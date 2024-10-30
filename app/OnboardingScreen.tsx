import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const images = [
    require("../assets/images/bahbeta_logo.png"),
    require("../assets/images/bahbeta_logo.png"),
    require("../assets/images/onborading_lady_image.png"),
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/LoginScreen");
    }
  };

  const handleSkip = () => {
    router.replace("/LoginScreen");
  };

  return (
    <LinearGradient colors={["#87CEEB", "#E8F4F8"]} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <View>
            <Image
              source={images[currentIndex]}
              style={[styles.image, { transform: [{ scale: 0.8 }] }]}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {currentIndex === 0
              ? "Send Money More Wisely"
              : currentIndex === 1
                ? "Smart Money Management"
                : "Easiest Way Send Money"}
          </Text>
          <Text style={styles.description}>
            This is demo text here you can write according you.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.indicatorContainer}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    index === currentIndex && styles.activeIndicator,
                  ]}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Feather name="chevrons-right" size={28} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 35,
    paddingVertical: 40,
  },
  imageContainer: {
    height: height * 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: width,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    width: width,
    paddingHorizontal: 20,
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 20,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#000000",
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: "#4169E1",
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  nextButton: {
    padding: 10,
  },
});

export default OnboardingScreen;
