import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" />
      <Stack.Screen name="OnboardingScreen" />
      <Stack.Screen name="LoginScreen" />
    </Stack>
  );
}