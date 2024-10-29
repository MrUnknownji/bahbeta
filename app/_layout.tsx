import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace("/OnboardingScreen");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="SplashScreen" />
        <Stack.Screen name="OnboardingScreen" />
        <Stack.Screen name="LoginScreen" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
}
