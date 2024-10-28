import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Overview" component={View} />
      <Tab.Screen name="Profile" component={View} />
      <Tab.Screen name="Settings" component={View} />
      <Tab.Screen name="Billing" component={View} />
      <Tab.Screen name="Security" component={View} />
    </Tab.Navigator>
  );
}
