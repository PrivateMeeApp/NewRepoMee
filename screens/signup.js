import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import meeImage from '../assets/faq/mee.png';
import googleLogo from '../assets/faq/google.png';
import facebookLogo from '../assets/faq/facebook.png';

const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // Animation values for text boxes
  const inputAnimations = {
    username: useRef(new Animated.Value(1)).current,
    email: useRef(new Animated.Value(1)).current,
    password: useRef(new Animated.Value(1)).current,
    confirmPassword: useRef(new Animated.Value(1)).current,
    dob: useRef(new Animated.Value(1)).current,
  };

  const handleFocus = (key) => {
    Animated.spring(inputAnimations[key], {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = (key) => {
    Animated.spring(inputAnimations[key], {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleSignUp = () => {
    // Navigate to Home page without validations
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <Image source={meeImage} style={styles.headerImage} />
      </View>

      <View style={styles.content}>
        <Animated.View style={{ ...styles.inputContainer, transform: [{ scale: inputAnimations.username }] }}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            onFocus={() => handleFocus('username')}
            onBlur={() => handleBlur('username')}
          />
        </Animated.View>

        <Animated.View style={{ ...styles.inputContainer, transform: [{ scale: inputAnimations.email }] }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
          />
        </Animated.View>

        <Animated.View style={{ ...styles.inputContainer, transform: [{ scale: inputAnimations.dob }] }}>
          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.dobContainer}>
            <TextInput
              style={[styles.dobInput, styles.yearInput]}
              placeholder="YYYY"
              maxLength={4}
              value={year}
              onChangeText={setYear}
              keyboardType="numeric"
              onFocus={() => handleFocus('dob')}
              onBlur={() => handleBlur('dob')}
            />
            <TextInput
              style={[styles.dobInput, styles.monthInput]}
              placeholder="MM"
              maxLength={2}
              value={month}
              onChangeText={setMonth}
              keyboardType="numeric"
              onFocus={() => handleFocus('dob')}
              onBlur={() => handleBlur('dob')}
            />
            <TextInput
              style={[styles.dobInput, styles.dayInput]}
              placeholder="DD"
              maxLength={2}
              value={day}
              onChangeText={setDay}
              keyboardType="numeric"
              onFocus={() => handleFocus('dob')}
              onBlur={() => handleBlur('dob')}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ ...styles.inputContainer, transform: [{ scale: inputAnimations.password }] }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
          />
        </Animated.View>

        <Animated.View style={{ ...styles.inputContainer, transform: [{ scale: inputAnimations.confirmPassword }] }}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={() => handleBlur('confirmPassword')}
          />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or Signup With</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Image source={googleLogo} style={styles.socialButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Image source={facebookLogo} style={styles.socialButtonImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
            <Text style={styles.loginLinkText}>Click here to log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#FFBF05',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,
    height: 55,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  headerImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    paddingBottom: 20,
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
  yearInput: {
    width: '33%',
  },
  monthInput: {
    width: '33%',
  },
  dayInput: {
    width: '33%',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 80,
    paddingVertical: 10,
    marginVertical: 20,
    alignItems: 'center',
    width: 190,
    marginLeft:60,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  googleButton: {
    backgroundColor: '#FFF',
    borderColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#FFF',
    borderColor: '#4267B2',
  },
  socialButtonImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#000',
  },
  loginLink: {
    marginLeft: 5,
  },
  loginLinkText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Signup;
