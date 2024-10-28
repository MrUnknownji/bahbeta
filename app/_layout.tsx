import { Stack, router } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/OnboardingScreen");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation:'fade' }}>
        <Stack.Screen name="SplashScreen" />
        <Stack.Screen name="OnboardingScreen"/>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
