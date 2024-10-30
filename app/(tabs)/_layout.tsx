import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import Colors from "../../constants/Colors";
import HomeScreen from "./HomeScreen";
import InvoiceScreen from "./InvoiceScreen";
import SearchScreen from "./SearchScreen";
import ItemsScreen from "./ItemsScreen";
import ReferralScreen from "./ReferralScreen";

type RootTabParamList = {
  Home: undefined;
  Invoice: undefined;
  Search: undefined;
  Items: undefined;
  Referral: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const SIDEBAR_WIDTH = 240;
const TAB_BAR_HEIGHT = 70;
const TRIANGLE_SIZE = 80;

const TabBarBackground = () => (
  <View style={styles.tabBarContainer}>
    <View style={[styles.triangle, styles.leftTriangle]} />

    <View style={[styles.triangle, styles.rightTriangle]} />

    <View style={styles.tabBarBackground} />
  </View>
);

const Sidebar = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const slideAnim = useRef(new Animated.Value(-(SIDEBAR_WIDTH + 40))).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -(SIDEBAR_WIDTH + 40),
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  return (
    <>
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: fadeAnim,
            display: isVisible ? "flex" : "none",
          },
        ]}
      >
        <TouchableOpacity
          style={styles.overlayTouch}
          activeOpacity={1}
          onPress={onClose}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <View style={styles.sidebarHeader}>
          <View style={styles.profileSection}>
            <View style={styles.profileInfoContainer}>
              <Text style={styles.profileName}>Gabriel B. Ross</Text>
              <Text style={styles.profileEmail}>gbross@gmail.com</Text>
            </View>
            <View style={styles.profileImage}>
              <Text style={styles.profileInitials}>GR</Text>
            </View>
          </View>
        </View>
        <View style={styles.sidebarContent}>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="home" size={24} color={Colors.background} />
            <Text style={styles.sidebarItemText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Feather name="file-text" size={24} color={Colors.background} />
            <Text style={styles.sidebarItemText}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Entypo name="database" size={24} color={Colors.background} />
            <Text style={styles.sidebarItemText}>Referral</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default function TabsLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Sidebar
        isVisible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => (
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => setIsSidebarVisible(true)}
              >
                <FontAwesome name="align-justify" size={24} />
              </TouchableOpacity>
              <Text style={styles.title}>bahbeta</Text>
              <View style={styles.notificationContainer}>
                <Ionicons name="notifications" size={24} />
              </View>
            </View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return <Feather name="home" size={size} color={color} />;
              case "Invoice":
                return <Feather name="file-text" size={size} color={color} />;
              case "Items":
                return <Feather name="list" size={size} color={color} />;
              case "Referral":
                return <Entypo name="database" size={size} color={color} />;
              default:
                return null;
            }
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textSecondary,
          tabBarStyle: {
            backgroundColor: "transparent",
            height: TAB_BAR_HEIGHT,
            elevation: 0,
            borderTopWidth: 0,
            position: "absolute",
            bottom: 0,
          },
          tabBarBackground: () => <TabBarBackground />,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -10,
            paddingBottom: 10,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Invoice" component={InvoiceScreen} />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.searchButton}>
                <Ionicons name="search" size={24} color={Colors.background} />
              </View>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen name="Items" component={ItemsScreen} />
        <Tab.Screen name="Referral" component={ReferralScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: Colors.background,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.primary,
  },
  notificationContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    zIndex: 1,
  },
  overlayTouch: {
    width: "100%",
    height: "100%",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: Colors.primary,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sidebarHeader: {
    padding: 20,
    paddingTop: (StatusBar.currentHeight as number) + 80,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  profileInfoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderColor: Colors.primary,
    marginRight: -60,
  },
  profileInitials: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.background,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.background,
  },
  sidebarContent: {
    padding: 20,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  sidebarItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: Colors.background,
    fontWeight: "500",
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: Colors.background,
    padding: 15,
    left: 60,
    right: 60,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: Colors.primary,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: TAB_BAR_HEIGHT + TRIANGLE_SIZE,
  },
  tabBarBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: TAB_BAR_HEIGHT,
    backgroundColor: Colors.background,
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: TRIANGLE_SIZE,
    borderRightWidth: TRIANGLE_SIZE,
    borderBottomWidth: TRIANGLE_SIZE,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.background,
    top: 0,
  },
  leftTriangle: {
    left: -TRIANGLE_SIZE,
    top: TRIANGLE_SIZE * 0.5,
    transform: [{ rotate: "-20deg" }],
  },
  rightTriangle: {
    right: -TRIANGLE_SIZE,
    top: TRIANGLE_SIZE * 0.5,
    transform: [{ rotate: "20deg" }],
  },
});
