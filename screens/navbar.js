import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Navbar = ({ selectedTab }) => {
  const navigation = useNavigation(); // Get the navigation prop via useNavigation

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')}
      >
        <View style={[styles.selectedBox, { opacity: selectedTab === 'home' ? 1 : 0 }]} />
        <Ionicons name="home" size={24} color={'#000'} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('search')}
      >
        <View style={[styles.selectedBox, { opacity: selectedTab === 'search' ? 1 : 0 }]} />
        <Ionicons name="search" size={24} color={'#000'} />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Connect')}
      >
        <View style={[styles.selectedBox, { opacity: selectedTab === 'connect' ? 1 : 0 }]} />
        <MaterialIcons name="support-agent" size={24} color={'#000'} />
        <Text style={styles.navText}>Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('sparks')}
      >
        <View style={[styles.selectedBox, { opacity: selectedTab === 'sparks' ? 1 : 0 }]} />
        <Ionicons name="play-circle" size={24} color={'#000'} />
        <Text style={styles.navText}>Sparks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <View style={[styles.selectedBox, { opacity: selectedTab === 'profile' ? 1 : 0 }]} />
        <Ionicons name="person" size={24} color={'#000'} />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFD87D',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
    zIndex: 999, // Ensures it stays on top
  },
  navItem: {
    alignItems: 'center',
    padding: 4,
    position: 'relative',
  },
  selectedBox: {
    backgroundColor: '#FFA800',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 0,
    marginBottom: 2,
    position: 'absolute',
    top: 1,
    zIndex: -1,
    width: '100%',
    height: 30,
  },
  navText: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Navbar;
