import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const Profile = () => {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.goBackButton}>
            <Icon name="angle-double-left" size={30} color="#000" />
          </TouchableOpacity>
          <Image source={require('../assets/mee.png')} style={styles.logoImage} />
        </View>

        <View style={styles.breakLine}></View>

        <Menu>
          <MenuTrigger>
            <View style={styles.coinsContainer}>
              <Image source={require('../assets/coin.gif')} style={styles.coinImage} />
              <Text style={styles.coinsText}>99</Text>
            </View>
          </MenuTrigger>
          <MenuOptions customStyles={{ optionsContainer: styles.tooltipContainer }}>
            <MenuOption>
              <Text style={styles.tooltipText}>
                Star Coins used to talk with the psychologist for free & collect the coins by playing "Test your self"
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>

        <View style={styles.contentContainer}>
          <View style={styles.profileInfo}>
            <Icon name="user-circle" size={30} color="#000" style={styles.profileIcon} />
            <Text style={styles.username}>user</Text>
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.scoreSection}>
              <Text style={styles.myScoreText}>My Score</Text>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemText}>IQ Test</Text>
                <Text style={styles.score}>8.5</Text>
              </View>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemText}>Puzzles</Text>
                <Text style={styles.score}>7</Text>
              </View>
              <View style={styles.scoreItem}>
                <Text style={styles.scoreItemText}>P Q</Text>
                <Text style={styles.score}>7.3</Text>
              </View>
            </View>

            <View style={styles.settingsSection}>
              <TouchableOpacity style={styles.settingsItem}>
                <Icon name="info-circle" size={20} color="#000" style={styles.icon} />
                <Text style={styles.settingsText}>Contact Us & Help</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsItem}>
                <Icon name="lock" size={20} color="#000" style={styles.icon} />
                <Text style={styles.settingsText}>Privacy and Policies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsItem}>
                <Icon name="sign-out" size={20} color="#000" style={styles.icon} />
                <Text style={styles.settingsText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF05', // Yellow background
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFBF05', // Orange background
  },
  breakLine: {
    height: 2, // Adjust the height of the line
    backgroundColor: '#FFF', // White color for the break line
    marginHorizontal: 6, 
    marginTop:-15
  },
  goBackButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    marginTop: 35,
    marginLeft: 13,
  },
  logoImage: {
    width: 50,  // Adjust the width as needed
    height: 40, // Adjust the height as needed
    resizeMode: 'contain',
    marginTop: 20,
    marginLeft: 260,
  },
  coinsContainer: {
    flexDirection: 'row', // Row layout for the image and text
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 245,
    width: 75,
    height: 35,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  coinImage: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    resizeMode: 'contain',
    marginLeft: -20,
  },
  coinsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black color
    textAlign: 'right',
    marginTop: -3,
    marginLeft: -5,
  },
  tooltipContainer: {
    padding: 10,
    backgroundColor: '#F8AC3B', // White background
    borderRadius: 10,
    marginTop: 12,
    marginLeft:56,
    borderRadius:20
  
  },
  tooltipText: {
    fontSize: 14,
    color: '#000', // Black color
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -30,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Reduced marginBottom
  },
  profileIcon: {
    marginRight: 5, // Reduced marginRight
  },
  username: {
    fontSize: 16, // Reduced fontSize
    fontWeight: 'bold',
    color: '#000', // Black color
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    marginTop:80,
    marginBottom: 50,
    backgroundColor: '#FFDF84', // Light orange backgroundF8AC3B
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
  },
  icon: {
    marginRight: 10,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Black color
  },
  scoreSection: {
    backgroundColor: '#FFF', // White background for score section
    borderRadius: 40,
    padding: 15,
    marginTop: 10,
  },
  myScoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black color
    textAlign: 'center',
    marginBottom: 10,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFA303', // Light orange background for score items
    padding: 15,
    borderRadius: 30,
    marginVertical: 5,
  },
  scoreItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF', // White text
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black color
  },
});

export default Profile;
