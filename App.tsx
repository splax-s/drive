import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {useEffect, useState, createContext, useRef} from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { View, Platform } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Device from 'expo-device';
import Context from "./hooks/Provider";
import {Provider} from 'react-redux'
import {store } from './redux/store'
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';


import AsyncStorage from "@react-native-async-storage/async-storage";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const LOCATION_TRACKING = 'location-tracking';

async function registerForPushNotificationsAsync() {
  let token: string;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [hasLocalData, setHasLocalData] = useState(false);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(false);
  const [locationStarted, setLocationStarted] = React.useState(false);

  const [user, setUser] = useState({
    details: {},
    authToken: "Token ",
    hidden: false,
  });
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding : ", error);
    } finally {
    }
  }
  const setUp = async () => {
    try {
      checkOnboarding();
      setLoading(false);
    } catch (error) {
    } finally {
    }
  };

  const userContext = {
    user: user,
    hasLocalData: hasLocalData,
    setHasLocalData: setHasLocalData,
    expoPushToken: expoPushToken,
    imageChanged: false,
    location: location,
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@image')
    } catch(e) {
      // remove error
    }

    console.log('Done.')
  }

  useEffect(() => {
    setUp();
    //removeValue();
  });


  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {

      setExpoPushToken(token);
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
        accuracy: Location.Accuracy.Highest,
        timeInterval:10000,
        distanceInterval: 0,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TRACKING
    );
    setLocationStarted(hasStarted);
    console.log('tracking started?', hasStarted);
};

const startLocation = () => {
  startLocationTracking();
}

startLocation()


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let status1 = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted' || status1.status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      Location.setGoogleApiKey("AIzaSyBkI2Q0pVP9cuXHc_Xk3N8-nn_wKzSewKM");

      let { coords } = await Location.getCurrentPositionAsync();
      setLocation(coords);

      console.log(coords);


      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        // console.log(regionName, 'nothing');
      }

      // console.log();
    })();
  }, [getLocation]);



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
         <Context.Provider value={userContext}>
         <Navigation colorScheme={colorScheme} />
         </Context.Provider>
        <StatusBar />
        </Provider>

      </SafeAreaProvider>
    );
  }
}

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
      console.log('LOCATION_TRACKING task ERROR:', error);
      return;
  }
  if (data) {
      let { locations } = data;
      let lat = locations[0].coords.latitude;
      let long = locations[0].coords.longitude;
console.log(
          `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
      );
      // console.log(locations.latitude, locations.longitude)
      return locations
  }
});
