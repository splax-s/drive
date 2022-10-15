import { StatusBar } from 'expo-status-bar';
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


import AsyncStorage from "@react-native-async-storage/async-storage";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
    imageChanged: false
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



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
         <Context.Provider value={userContext}>
         <Navigation colorScheme={colorScheme} />
         </Context.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
