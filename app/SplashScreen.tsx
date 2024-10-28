import React
 from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={['#4169E1','#87CEEB']}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Image source={require('../assets/images/bahbeta_logo.png')} />
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>B</Text>
        </View>
        <Text style={[styles.logoSubtext, { alignSelf: 'center' }]}>B</Text> 
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
  },
  iconContainer: {
  },
  logoContainer: {
    position:'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom:20
  },
  logoCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#4169E1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoSubtext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SplashScreen;
