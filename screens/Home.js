import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo installed for vector icons
import { useNavigation } from '@react-navigation/native';
import Navbar from '../screens/navbar';
const { width } = Dimensions.get('window');

// Import images from assets folder
import IQTestImage from '../assets/iqtest.jpeg';
import PuzzleImage from '../assets/puzzel.jpeg';
import PQImage from '../assets/pq.jpeg';
import IconImage from '../assets/testwmee.png'; // Replace with your icon image
import FAQImage1 from '../assets/eduf.png'; // Replace with your FAQ images
import FAQImage2 from '../assets/lovef.png';
import FAQImage3 from '../assets/carrerf.png';
import FAQImage4 from '../assets/familyf1.jpg';
import MeeImage from '../assets/mee1.png'; // Import the Mee image
import FAQIcon from '../assets/faqicon.png'; // Import the FAQ icon image
import CoinImage from '../assets/coin.gif'; // Import the coin image

const Home = () => {
  // const [activePage, setActivePage] = useState('home');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    setSelectedTab(screen);
  };

  // Hide navbar on touch events
  const handleTouchableAreaPress = () => {
    Keyboard.dismiss(); // Hide keyboard when tapping on non-input areas
  };

  const handleprofile = () => {
    navigation.navigate('profile');
  };
  const handleother = () => {
    navigation.navigate('family');
  };
  const handleIQ = () => {
    navigation.navigate('IQ');
  };
  const handlepuzzle = () => {
    navigation.navigate('puzzle');
  };

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };
  const handlepay = () => {
    navigation.navigate('pay');
  };
  const handlepq = () => {
    navigation.navigate('pq');
  };
  const handlestudy = () => {
    navigation.navigate('studyfaq');
  };

  return (
    <View style={styles.container}>
      {/* Modal for showing messages */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalToggle}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Latest Updates</Text>
            <Text style={styles.modalMessage}>This is where your latest updates will appear.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleModalToggle}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Add Mee Image */}
        <View style={styles.header}>
          <Image source={MeeImage} style={styles.meeImage} />
          <TouchableOpacity style={styles.messageIconContainer} onPress={handleModalToggle}>
            <Ionicons name="notifications" size={28} color="#000" />
          </TouchableOpacity>

          <View style={styles.coinContainer}>
            <Image source={CoinImage} style={styles.coinIcon} />
            <Text style={styles.coinCount}>99</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.faqsSectionContainer}>
          <View style={styles.faqsTitleContainer}>
            <Image source={FAQIcon} style={styles.faqIcon} />
            <Text style={styles.faqsSectionTitle}>FAQs  "Solve Your Issues Fast"</Text>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.faqsScrollContainer}>
            <TouchableOpacity style={styles.faqItem} onPress={handlestudy}>
              <Text style={styles.faqItemTitle}>Study</Text>
              <Image source={FAQImage1} style={styles.faqItemImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqItemTitle}>Love</Text>
              <Image source={FAQImage2} style={styles.faqItemImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
              <Text style={styles.faqItemTitle}>Carrer</Text>
              <Image source={FAQImage3} style={styles.faqItemImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem} onPress={handleother}>
              <Text style={styles.faqItemTitle}>Family</Text>
              <Image source={FAQImage4} style={styles.faqItemImage} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.categoriesBackgroundContainer}>
          <View style={styles.categoriesContainer}>
            <View style={styles.categoriesTitleContainer}>
              <Image source={IconImage} style={styles.iconImage} />
              <Text style={styles.categoriesTitle}>Test Yourself With Mee !!</Text>
            </View>
            <View style={styles.categoryList}>
            <TouchableOpacity style={styles.categoryItem} onPress={handleIQ}>
  <Image source={IQTestImage} style={styles.categoryImage} />
  <Text style={styles.categoryText}>IQ Test</Text>
</TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={handlepuzzle}>
                <Image source={PuzzleImage} style={styles.categoryImage} />
                <Text style={styles.categoryText}>Puzzles</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryItem} onPress={handlepq}>
                <Image source={PQImage} style={styles.categoryImage} />
                <Text style={styles.categoryText}>PQ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.connectionContainer}>
        <Text style={styles.connectionText}>
          Connect with our skilled psychologist for tailored solutions to your challenges.
        </Text>
        <TouchableOpacity style={styles.buttonInsideContainer} onPress={handlepay}>
          <MaterialIcons name="support-agent" size={24} color="#ff8c00" style={styles.icon} />
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActivePage('home')}
        >
          <Ionicons name="home" size={24} color={activePage === 'home' ? '#FFA800' : '#fff'} />
          <Text style={[styles.navText, { color: activePage === 'home' ? '#FFA800' : '#fff' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handlepay}
        >
          <MaterialIcons name="support-agent" size={24} color={activePage === 'connect' ? '#FFA800' : '#fff'} />
          <Text style={[styles.navText, { color: activePage === 'connect' ? '#FFA800' : '#fff' }]}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleprofile}
        >
          <Ionicons name="person" size={24} color={activePage === 'profile' ? '#FFA800' : '#fff'} />
          <Text style={[styles.navText, { color: activePage === 'profile' ? '#FFA800' : '#fff' }]}>Profile</Text>
        </TouchableOpacity>
      </View>  */}
      <Navbar selectedTab={selectedTab} onNavigate={handleNavigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800', // Full background color
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 150, // Increased padding to avoid overlap with the connection container
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  meeImage: {
    width: 90,
    height: 60,
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 119,
  },
  messageIconContainer: {
    position: 'absolute',
    left: 10, // Positioning on the left
    top: 13,  // Adjust the top position as needed
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#FFD048',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 50,
  },
  coinContainer: {
    position: 'absolute',
    right: 0, // Positioning on the right
    top: 10,  // Adjust the top position as needed
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Added background color
    borderColor: '#FFf', // Added border color
    borderWidth: 2,
    borderRadius: 50, // Optional: add some border radius for a smoother look
    paddingHorizontal: 3,
    paddingVertical: 0,
    height:46,
    width:90,
  },
  coinIcon: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
    
  },
  coinCount: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight:10,
  },
  line: {
    height: 2.5,
    backgroundColor: 'black',
    elevation: 15,
  
  },
  faqsSectionContainer: {
    backgroundColor: '#FFD048',
    padding: 16,
    borderRadius: 45,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  faqsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  faqIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  faqsSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#343a40',
  },
  faqsScrollContainer: {
    flexDirection: 'row',
  },
  faqItem: {
    width: 80,
    height: 120,
    backgroundColor: '#000',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.37,
    shadowRadius: 87,
    elevation: 30,
    borderWidth: 2,
    borderColor: '#FFD048',
    padding: 10,
  },
  faqItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  faqItemImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoriesBackgroundContainer: {
    backgroundColor: '#FFD048',
    padding: 10,
    borderRadius: 45, // Same border radius as connectionContainer
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    marginTop: 1,
    height: 202,

    elevation: 15, // Drop shadow for the container
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconImage: {
    marginLeft:16,
    width: 24,
    height: 24,
    marginRight: 8,
  },
  categoriesTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#343a40',
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: width * 0.27,
    height: width * 0.39,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.37,
    shadowRadius: 87,
    elevation: 30,
    borderWidth: 2,
    borderColor: '#FFD048', // Border color for category boxes
  },
  categoryImage: {
    width: '100%',
    height: '75%',
    borderRadius: 25,
    resizeMode: 'cover',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 1,
    textAlign: 'center',
  },
  connectionContainer: {
    position: 'absolute',
    bottom: 100, // Positioned above the navbar
    left: 10,
    right: 10,
    backgroundColor: '#ffe187', // Container color
    padding: 16,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#000000', // Black border color
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadow for 3D effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5, // Shadow effect for floating appearance
  },
  connectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', // Text color
    textAlign: 'center',
    marginBottom: 10, // Space between text and button
  },
  buttonInsideContainer: {
    flexDirection: 'row', // Align icon and text horizontally
    backgroundColor: '#000000', // Button color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff8c00', // Border color of button
    shadowColor: '#000', // Shadow for 3D effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10, // Shadow effect for floating appearance
    alignItems: 'center', // Center icon and text vertically
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8c00', // Button text color
    marginLeft: 8, // Space between icon and text
  },
  navbar: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#000000', // Navbar background color
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 11,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom:10,
    elevation: 15, // Shadow effect for floating appearance
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,

  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for a stronger focus
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFD048',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // For Android shadow
    borderWidth: 2,
    borderColor: '#FFA500', // Orange border
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 25,
    color: '#000',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FFA500', // Orange border for the message
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#FFD048',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    borderWidth: 2,
    borderColor: '#FFA500', // Orange border
    transition: 'background-color 0.3s ease',
  },
  closeButtonText: {
    color: '#FFD048',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;