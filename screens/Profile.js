import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../screens/navbar';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const shineAnim = useRef(new Animated.Value(-100)).current; // For the shine effect animation
  const starCount = 100; // Replace with dynamic value if needed
  const highScore = 9;

  useEffect(() => {
    const animateShine = () => {
      Animated.loop(
        Animated.timing(shineAnim, {
          toValue: 300, // Adjust based on Mee Card width
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    };
    animateShine();
  }, [shineAnim]);

  const handleNavigation = (screen) => {
    setSelectedTab(screen);
  };

  return (
    <LinearGradient colors={['#FFA800', '#FFCF73']} style={styles.pageContainer}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Top-right notification & star container */}
      <View style={styles.notificationContainer}>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.starCoinContainer}>
          <View style={styles.coinContainer}>
            <Image source={require('../assets/coin.gif')} style={styles.coinGif} />
            <Text style={styles.starCount}>{starCount}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Edit Button Section */}
        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
            <Ionicons name="pencil-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Mee Card Section */}
        <View style={styles.meeCard}>
          <LinearGradient colors={['#FFCF73', '#FFA800']} style={styles.cardBackground}>
            <Text style={styles.meeCardTitle}>MEE CARD</Text>
            <View style={styles.meeCardContent}>
              <Text style={styles.userName}>G PREM CHARAN</Text>
              <Text style={styles.userId}>********49</Text>
            </View>
            <Text style={styles.meeCardScore}>90.3%</Text>
            {/* Shine Effect */}
            <Animated.View
              style={[
                styles.shineOverlay,
                { left: shineAnim }, // Dynamic position based on animation
              ]}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0)']}
                style={styles.shineGradient}
              />
            </Animated.View>
          </LinearGradient>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingButton}>
            <Ionicons name="settings-outline" size={20} color="#000" />
            <Text style={styles.settingText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.settingText}>Contact Us & Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Ionicons name="document-text-outline" size={20} color="#000" />
            <Text style={styles.settingText}>Privacy and Policies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Ionicons name="log-out-outline" size={20} color="#000" />
            <Text style={styles.settingText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        {/* My Score Section */}
        <View style={styles.scoreContainer}>
        <View style={styles.scoreSectionContainer}>
          <View style={styles.myScoreContainer}>
            <Text style={styles.scoreTitle}>My Score</Text>
          </View>

          <View style={styles.highScoreContainer}>
            <Text style={styles.scoreValue}>High Score: {highScore}</Text>
          </View>
        </View>
        </View>
      </ScrollView>


      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar selectedTab={selectedTab} onNavigate={handleNavigation} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 4,
    zIndex: 10,
  },
  logo: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  notificationContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 10,
  },
  starCoinContainer: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#FFA800',
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinContainer: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinGif: {
    width: 20,
    height: 47,
  },
  starCount: {
    fontSize: 15,
    color: '#FFA800',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  scrollContainer: {
    padding: 20,
  },
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 70,
    marginBottom: -90,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFA800',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 100,
    elevation: 5,
    width: 65,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 4,
  },
  meeCard: {
    marginTop: 100,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardBackground: {
    padding: 20,
    position: 'relative',
  },
  meeCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  meeCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  userId: {
    fontSize: 14,
    color: '#555',
  },
  meeCardScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28A745',
    textAlign: 'right',
  },
  shineOverlay: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: 100,
    backgroundColor: 'transparent',
  },
  shineGradient: {
    flex: 1,
  },
  settingsContainer: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFDF84',
    padding: 15,
    borderRadius: 20,
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginBottom: 15,
    paddingRight: 120,
  },
  settingText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  scoreSectionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // Optional padding for spacing
  },
  scoreContainer: {
    marginBottom: 30, // Reduced margin at the bottom for less spacing
    backgroundColor: '#FFDF84',
    paddingVertical: 0, // Reduced vertical padding for less height
    paddingHorizontal: 15, // Keep horizontal padding for spacing
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    height: 150, // You can adjust the height of the score container as needed
  },
  myScoreContainer: {
    backgroundColor: '#FFF', // Background color for My Score container
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
 
    alignItems: 'center',
  },
  highScoreContainer: {
    backgroundColor: '#FFF', // Background color for High Score container
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
     
    alignItems: 'center',
  },
  
  scoreTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  scoreValue: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Profile;
