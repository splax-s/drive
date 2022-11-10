import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'lexend-bold': require('../assets/fonts/Lexend-Bold.ttf'),
          'lexend-extrabold': require('../assets/fonts/Lexend-ExtraBold.ttf'),
          'lexend-light': require('../assets/fonts/Lexend-Light.ttf'),
          'lexend-medium': require('../assets/fonts/Lexend-Medium.ttf'),
          'lexend-regular': require('../assets/fonts/Lexend-Regular.ttf'),
          'lexend-extralight': require('../assets/fonts/Lexend-ExtraLight.ttf'),
          'lexend-semibold': require('../assets/fonts/Lexend-SemiBold.ttf'),
          'lexend-black': require('../assets/fonts/Lexend-Black.ttf'),
          'lexend-thin': require('../assets/fonts/Lexend-Thin.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
