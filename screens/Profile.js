import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import CoinImage from '../assets/coin.gif'; // Import the coin image

const Profile = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [activeSetting, setActiveSetting] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [username, setUsername] = useState('user');
  const [email, setEmail] = useState('user@example.com');
  const [dob, setDob] = useState('01/01/2000');
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newDob, setNewDob] = useState(dob);

  const navigation = useNavigation(); // Initialize the navigation hook

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
    setActiveSetting(!activeSetting);
  };

  const handleEditProfile = () => {
    setUsername(newUsername);
    setEmail(newEmail);
    setDob(newDob);
    setShowEditModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.goBackButton}>
          <Icon name="angle-double-left" size={30} color="#000" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/mee.png')} style={styles.logoImage} />
        </View>
        <View style={styles.coinContainer}>
          <Image source={CoinImage} style={styles.coinIcon} />
          <Text style={styles.coinCount}>99</Text>
        </View>
      </View>

      <View style={styles.breakLine}></View>

      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Icon name="user-circle" size={30} color="#000" style={styles.profileIcon} />
            <Text style={styles.headerText}>My Profile</Text>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setShowEditModal(true)}
            >
              <Icon name="pencil" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Icon name="user" size={20} color="#000" />
              <Text style={styles.detailLabel}>Username:</Text>
              <Text style={styles.detailValue}>{username}</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="envelope" size={20} color="#000" />
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailValue}>{email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.settingsSection}>
            <TouchableOpacity
              style={[styles.settingsItem, activeSetting && styles.activeSettingItem]}
              onPress={toggleSettingsMenu}
            >
              <Icon name="gear" size={20} color="#000" style={styles.icon} />
              <Text style={styles.settingsText}>Account Settings</Text>
            </TouchableOpacity>

            {showSettingsMenu && (
              <Animatable.View
                animation="fadeIn"
                duration={300}
                style={styles.dropdownMenu}
              >
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text style={styles.dropdownText}>Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem}>
                  <Text style={styles.dropdownText}>My Transactions</Text>
                </TouchableOpacity>
              </Animatable.View>
            )}

            {!showSettingsMenu && (
              <>
                <TouchableOpacity style={styles.settingsItem}>
                  <Icon name="bell" size={20} color="#000" style={styles.icon} />
                  <Text style={styles.settingsText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                  <Icon name="info-circle" size={20} color="#000" style={styles.icon} />
                  <Text style={styles.settingsText}>Contact Us & Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                  <Icon name="lock" size={20} color="#000" style={styles.icon} />
                  <Text style={styles.settingsText}>Privacy and Policies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.settingsItem}
                  onPress={() => navigation.navigate('login')} // Corrected navigation to Login screen
                >
                  <Icon name="sign-out" size={20} color="#000" style={styles.icon} />
                  <Text style={styles.settingsText}>Sign Out</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>

      {/* Edit Profile Modal */}
      <Modal
        visible={showEditModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalContainer}>
          <Animatable.View
            animation="fadeInUpBig"
            duration={500}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={newUsername}
              onChangeText={setNewUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={newEmail}
              onChangeText={setNewEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={newDob}
              onChangeText={setNewDob}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleEditProfile}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowEditModal(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800', // Yellow background
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFA800', // Orange background
    position: 'relative', // Allow positioning of child elements
  },
  breakLine: {
    height: 2, // Adjust the height of the line
    backgroundColor: '#FFF', // White color for the break line
    marginHorizontal: 6,
    marginTop: -15,
  },
  goBackButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  logoContainer: {
    alignItems: 'center', // Center the logo within this container
  },
  logoImage: {
    width: 80,  // Adjust the width as needed
    height: 50, // Adjust the height as needed
    resizeMode: 'contain',
  },
  coinContainer: {
    position: 'absolute',
    right: 10, // Align to the right
    top: 25,  // Adjust top position to match the logo
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Added background color
    borderColor: '#FFf', // Added border color
    borderWidth: 2,
    borderRadius: 50, // Optional: add some border radius for a smoother look
    paddingHorizontal: 3,
    paddingVertical: 0,
    height: 46,
    width: 80,
  },
  coinIcon: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
  },
  coinCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30, // Adjust margin to account for the header
  },
  profileContainer: {
    backgroundColor: '#FFDF84', // Light orange background
    borderRadius: 45,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2, // Border width
    borderColor: '#000', // Black border color
    elevation: 20, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
},
  profileHeader: {
    alignItems: 'center',
    position: 'relative', // Ensure proper positioning for the edit icon
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  detailValue: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    position: 'relative', // Changed to 'relative' for proper positioning
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: '#FFDF84', // Light orange background
    borderRadius: 50,
    padding: 20,
  },
  settingsSection: {
    marginTop: 15,
    marginBottom: 20,
  },
  settingsItem: {
    flexDirection: 'row', // Row layout for the icon and text
    alignItems: 'center',
    backgroundColor: '#FF9900', // Light yellow background
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
  },
  activeSettingItem: {
    backgroundColor: '#f2ebe6', // Darker color for active state
  },
  icon: {
    marginRight: 10,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black color
  },
  dropdownMenu: {
    backgroundColor: '#FF9900', // Light orange background to match the page
    borderRadius: 30,
    padding: 10,
    marginTop: 5,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
  },
  dropdownItem: {
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#000', // Matching button color
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 10, // Shadow radius for iOS
  },
  dropdownText: {
    fontSize: 16,
    color: '#FFF', // White text color for contrast
    textAlign: 'center', // Centered text
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    elevation: 10, // Shadow effect for Android
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#CCC',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
