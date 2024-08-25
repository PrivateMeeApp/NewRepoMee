import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pay({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleUseCoinsPress = () => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate('connect');
    });
  };

  return (
    <Animated.View style={[styles.outerContainer, { opacity: fadeAnim }]}>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.fullWidthBar} />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/mee.png')} style={styles.logoImage} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.toPayContainer}>
            <Text style={styles.toPay}>TO PAY ₹</Text>
          </View>
        </View>
        <View style={styles.coinContainer}>
          <Image source={require('../assets/coin.gif')} style={styles.coinIcon} />
          <Text style={styles.coinCountTop}>99</Text>
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>NOTE:</Text>
          <Text style={styles.note}>This Super Coins is applied until your problem is solved</Text>
        </View>
        <TouchableOpacity style={styles.useCoinsButton} onPress={handleUseCoinsPress}>
          <Text style={styles.useCoinsText}>Use Star Coins & Continue</Text>
          <Animated.View style={[styles.coinCountContainer, { transform: [{ scale: bounceAnim }] }]}>
            <Image source={require('../assets/coin.gif')} style={styles.coinIconInButton} />
            <Text style={styles.coinCountBottom}>60</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFA800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFDF84',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    height: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 98,
  },
  fullWidthBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 4,
    position: 'absolute',
    top: '13%', // Adjust this value to move the line directly under the cancel button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  cancelButton: {
    position: 'absolute',
    top: '3%',
    left: '4%',
    width: 92,
    height: 37,
    backgroundColor: '#D30303',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 32,
    marginLeft: -10,
    borderColor: '#000',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  cancelText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 0,
  },
  toPayContainer: {
    backgroundColor: '#FFA800',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    height: 50,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
  },
  toPay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 25,

    paddingVertical: 5,
    width: 100,
    height: 48,
    marginTop: -250,
    marginBottom: 300,
    marginLeft: -180,
  },
  coinIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 0,
  },
  coinIconInButton: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  noteContainer: {
    backgroundColor: '#FF9900',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginTop: -550,
    height: 80,
    width: 300,
  },
  note: {
    fontSize: 13,
    textAlign: 'center',
    color: '#000000',
  },
  useCoinsButton: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 50,
    top: -250,
    width: 280,
    height: 60,
    justifyContent: 'space-between',
  },
  useCoinsText: {
    color: '#FFFFFF',
    fontSize: 13,
    
  },
  coinCountContainer: {
    backgroundColor: '#3DBB3A',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 40,
    width: 77,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the content within the container
  },
  coinCountTop: {
    color: '#FFD700',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  coinCountBottom: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  logoContainer: {
    position: 'absolute',
    top: 30,
    left: '84%',
    transform: [{ translateX: -20 }],
  },
  logoImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
