import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

type RootTabParamList = {
  Home: undefined;
  Invoice: undefined;
  Search: undefined;
  Items: undefined;
  Referral: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
            case 'Invoice':
              return <MaterialCommunityIcons name={focused ? 'file-document' : 'file-document-outline'} size={size} color={color} />;
            case 'Items':
              return <Ionicons name={focused ? 'menu' : 'menu-outline'} size={size} color={color} />;
            case 'Referral':
              return <MaterialCommunityIcons name={focused ? 'database' : 'database-outline'} size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop:-10,
          paddingBottom:10
        }
      })}
    >
      <Tab.Screen name="Home" component={View} />
      <Tab.Screen name="Invoice" component={View} />
      <Tab.Screen
        name="Search"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Ionicons 
                name="search" 
                size={24} 
                color={Colors.background}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Items" component={View} />
      <Tab.Screen name="Referral" component={View} />
    </Tab.Navigator>
  );
}