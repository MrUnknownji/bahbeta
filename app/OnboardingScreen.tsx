import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, PanResponder, Dimensions, GestureResponderEvent, PanResponderGestureState } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dx } = gestureState;
        return Math.abs(dx) > 10;
      },
      onPanResponderRelease: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        const { dx } = gestureState;
        if (dx < -50 && currentIndex < images.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else if (dx > 50 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      },
    })
  ).current;

  const images = [
    require('../assets/images/bahbeta_logo.png'),
    require('../assets/images/bahbeta_logo.png'),
    require('../assets/images/bahbeta_logo.png'),
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/(tabs)");
    }
  };

  const handleSkip = () => {
    router.push("/(tabs)");
  };

  return (
    <LinearGradient
      colors={['#87CEEB', '#4169E1']}
      style={styles.container}
    >
      <View {...panResponder.panHandlers}>
        <Image source={images[currentIndex]} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {currentIndex === 0
            ? 'Send Money More Wisely'
            : currentIndex === 1
            ? 'Smart Money Management'
            : 'Easiest Way Send Money'}
        </Text>
        <Text style={styles.description}>
          This is demo text here you can write according you.
        </Text>
      </View>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentIndex === images.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.55,
    resizeMode: 'contain',
  },
  textContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  nextButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#4169E1',
  },
});

export default OnboardingScreen;