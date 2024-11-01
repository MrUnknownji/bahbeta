import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const SplashScreen = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace('/OnboardingScreen');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <LinearGradient colors={Colors.gradient} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("@/assets/images/bahbeta_logo.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>B</Text>
        </View>
        <Text style={[styles.logoSubtext, { alignSelf: "center" }]}>B</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 60,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20,
  },
  logoCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoSubtext: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default SplashScreen;
