import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import walkingImageGif from '../assets/walk.gif';
import mstaarImage from '../assets/mstar.jpg';
import brainGif from '../assets/brain.gif';
import familyGif from '../assets/family.gif';
import careerGif from '../assets/career.gif';
import loveGif from '../assets/love.gif';
import eduGif from '../assets/edu.gif';


const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlelogin = () => {
    navigation.navigate('login');
  };

  const containerAnimation = useRef(new Animated.Value(height)).current;
  const logoAnimation = useRef(new Animated.Value(-height)).current;
  const textAnimation = useRef(new Animated.Value(-height)).current;

  useEffect(() => {
    // Animate container from bottom (footer) to its original position
    Animated.timing(containerAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    // Animate logo and gifs
    Animated.timing(logoAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    // Animate Signup text
    Animated.timing(textAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainerTop, { transform: [{ translateY: logoAnimation }] }]}>
        <View style={styles.mstaarWrapper}>
          <Image source={mstaarImage} style={styles.mstaarImage} />
          <Image source={brainGif} style={[styles.aroundImage, styles.brain]} />
          <Image source={familyGif} style={[styles.aroundImage, styles.family]} />
          <Image source={careerGif} style={[styles.aroundImage, styles.career]} />
          <Image source={loveGif} style={[styles.aroundImage, styles.love]} />
          <Image source={eduGif} style={[styles.aroundImage, styles.edu]} />
        </View>
      </Animated.View>

      <Animated.View style={[styles.signupTextContainer, { transform: [{ translateY: textAnimation }] }]}>
        <Text style={styles.signupText}>Signup</Text>

        <TouchableOpacity onPress={() => navigation.navigate('login')} >
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.formContainer, { transform: [{ translateY: containerAnimation }] }]}>
        {step === 1 && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date of Birth</Text>
              <View style={styles.dobContainer}>
                <TextInput
                  style={[styles.dobInput, styles.yearInput]}
                  placeholder="YYYY"
                  maxLength={4}
                  value={year}
                  onChangeText={setYear}
                  keyboardType="numeric"
                />
                <TextInput
                  style={[styles.dobInput, styles.monthInput]}
                  placeholder="MM"
                  maxLength={2}
                  value={month}
                  onChangeText={setMonth}
                  keyboardType="numeric"
                />
                <TextInput
                  style={[styles.dobInput, styles.dayInput]}
                  placeholder="DD"
                  maxLength={2}
                  value={day}
                  onChangeText={setDay}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>OTP</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handlelogin}>
              <Text style={styles.buttonText}>Complete Signup</Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
  },
  imageContainerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height / 3,
    position: 'absolute',
    top: 0,
  },
  mstaarWrapper: {
    position: 'relative',
    width: '50%',
    height: height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mstaarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  aroundImage: {
    position: 'absolute',
    width: '12%',
    height: '25%',
    resizeMode: 'cover',
  },
  brain: {
    top: '10%',
    left: 0,
  },
  family: {
    top: '10%',
    right: 0,
  },
  career: {
    top: '50%',
    left: 0,
  },
  love: {
    top: '75%',
    left: '50%',
  },
  edu: {
    top: '50%',
    right: 0,
  },
  signupTextContainer: {
    position: 'absolute',
    top: height / 2.4, // Adjust the position as needed
    width: '100%',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF', // White text color
    letterSpacing: 1,
    textShadow: '20px 20px 40px #000', // Black shadow for a glowing effect
    position: 'relative',
    overflow: 'hidden',
    animation: 'shine 3s ease-in-out infinite, glow 2s ease-in-out infinite',
  },
  loginLink: {
    marginTop: 10,
    fontSize: 12,
    color: '#000',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  '@keyframes shine': {
    '0%': { backgroundPosition: '-500%' },
    '100%': { backgroundPosition: '500%' },
  },
  '@keyframes glow': {
    '0%, 100%': { textShadow: '2px 2px 4px #000' },
    '50%': { textShadow: '20px 20px 100px #FFF' }, // Glow effect
  },
  
  formContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFBF05', // Main container color
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 10,
    borderColor: '#F7C04A', // Slightly darker shade for border
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, // For Android shadow effect
    overflow: 'hidden', // Ensures shadow is clipped within the container
    borderStyle: 'solid', // Adds a solid border to enhance appearance
  },
  
  
  
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
    fontSize: 16,
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobInput: {
    width: '30%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 80,
    paddingVertical: 10,
    marginVertical: 20,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Signup;
