/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 import * as React from 'react';
 import { ColorSchemeName, Pressable, StyleSheet } from 'react-native';
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import TabOneScreen from '../screens/TabOneScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import HomeScreen from '../screens/HomeScreen';
 import MoreScreen from '../screens/MoreScreen'
 import SVG, {Path, G} from 'react-native-svg';
 import { useSafeAreaInsets } from "react-native-safe-area-context";
 import TripsScreen from '../screens/TripsScreen';


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const iconSize = "20"
  //console.log(insets)

  const HomeIcon = ({ size, color }) => (
    <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M12.925 2.35834H7.07504C5.00004 2.35834 4.54171 3.39167 4.27504 4.65834L3.33337 9.16667H16.6667L15.725 4.65834C15.4584 3.39167 15 2.35834 12.925 2.35834Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M18.325 16.5167C18.4167 17.4917 17.6334 18.3333 16.6334 18.3333H15.0667C14.1667 18.3333 14.0417 17.95 13.8834 17.475L13.7167 16.975C13.4834 16.2917 13.3334 15.8333 12.1334 15.8333H7.86669C6.66669 15.8333 6.49169 16.35 6.28336 16.975L6.11669 17.475C5.95836 17.95 5.83336 18.3333 4.93336 18.3333H3.36669C2.36669 18.3333 1.58336 17.4917 1.67502 16.5167L2.14169 11.4417C2.25836 10.1917 2.50002 9.16666 4.68336 9.16666H15.3167C17.5 9.16666 17.7417 10.1917 17.8584 11.4417L18.325 16.5167Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M3.33333 6.66666H2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M17.5 6.66666H16.6666" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<G opacity="0.4">
<Path d="M10 2.5V4.16667" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M8.75 4.16666H11.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
<Path opacity="0.4" d="M5 12.5H7.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M12.5 12.5H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </SVG>
  );
  const TripsIcon = ({ size, color }) => (
    <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M18.3333 9.99999C18.3333 14.6 14.6 18.3333 9.99996 18.3333C5.39996 18.3333 1.66663 14.6 1.66663 9.99999C1.66663 5.39999 5.39996 1.66666 9.99996 1.66666C14.6 1.66666 18.3333 5.39999 18.3333 9.99999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path opacity="0.4" d="M13.0917 12.65L10.5083 11.1083C10.0583 10.8417 9.69165 10.2 9.69165 9.675V6.25833" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </SVG>
  );
  const MenuIcon = ({ size, color }) => (
    <SVG width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M2.5 5.83334H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
<Path opacity="0.34" d="M2.5 10H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
<Path d="M2.5 14.1667H17.5" stroke={color} stroke-width="1.5" stroke-linecap="round"/>
    </SVG>
  );

  return (
    <BottomTab.Navigator
      initialRouteName="Ride"
      screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: [styles.tabContainer, {  height: 65 + insets.bottom}],
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          tabBarItemStyle : styles.item,

      }}
      safeAreaInsets = {{
        top: 0,
        left: 0,
        right: 0,
    }}
      >
      <BottomTab.Screen
        name="Rides"
        component={HomeScreen}
        options={({
          title: 'Ride',
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon size={iconSize} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Trips"
        component={TripsScreen}
        options={{
          title: 'Trips',
          headerShown: false,
          tabBarIcon: ({ color }) => <TripsIcon size={iconSize} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          headerShown: false,
          tabBarIcon: ({ color }) => <MenuIcon size={iconSize} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "lexend-regular",
    fontSize: 11,
    padding: 0,
    marginBottom: 8,

  },
  tabContainer: {

    borderTopWidth: 0,
    shadowOpacity: 0.1,
    elevation:0.1,


  },
  item  :{

    justifyContent :'center',
    alignSelf : "center",
    alignContent : "center",


  },

  icon: {

    marginTop: 7,
  },
});
