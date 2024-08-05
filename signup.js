import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import meeImage from '../assets/faq/mee.png'; // Ensure this path is correct
import googleLogo from '../assets/faq/google.png'; // Add path to Google logo
import facebookLogo from '../assets/faq/facebook.png'; // Add path to Facebook logo

const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('INDIA'); // Default country

  const countryOptions = [
    { label: 'India (+91)', value: 'INDIA' },
    // Add more countries here if needed
  ];

  // Animation values
  const scaleAnim = new Animated.Value(0);

  // Start animation when component mounts
  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <Animated.Image source={meeImage} style={[styles.headerImage, { transform: [{ scale: scaleAnim }] }]} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.countryDropdown}>
            <Text style={styles.label}>Country</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedCountry(value)}
              items={countryOptions}
              style={pickerSelectStyles}
              value={selectedCountry}
              placeholder={{ label: 'Select country', value: null }}
            />
          </View>

          <View style={styles.mobileNumberContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
              maxLength={10} // Optional: limit length to 10 digits
            />
          </View>
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button}>
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

// Styles for picker select
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000', // Black border
    borderRadius: 8, // Curved borders
    color: '#000',
    fontSize: 16,
    backgroundColor: '#FFF', // Set background color to white
    shadowColor: '#000', // Shadow for glowing effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2,
  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#000', // Black border
    borderRadius: 8, // Curved borders
    color: '#000',
    fontSize: 16,
    backgroundColor: '#FFF', // Set background color to white
    shadowColor: '#000', // Shadow for glowing effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2,
  },
});

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
    marginTop: 100, // Adjust this margin to ensure proper spacing
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  countryDropdown: {
    flex: 1,
    marginRight: 10,
    borderRadius: 8, // Curved borders
    height: 65,
    overflow: 'hidden', // Ensure the curved borders are applied correctly
  },
  mobileNumberContainer: {
    flex: 2,
    marginLeft: 10,
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
    borderColor: '#000', // Black border
    borderWidth: 1, // Border width
    shadowColor: '#000', // Shadow for glowing effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
    textAlign: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  socialButton: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#FFF',
  },
  googleButton: {
    backgroundColor: 'white',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  socialButtonImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
  },
  loginLink: {
    marginLeft: 5,
  },
  loginLinkText: {
    fontSize: 14,
    color: '#0066CC', // Link color
    fontWeight: 'bold',
  },
});

export default Signup;
