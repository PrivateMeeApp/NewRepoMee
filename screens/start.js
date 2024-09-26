import React from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import walkingImageGif from '../assets/walk.gif';
import mstaarImage from '../assets/mstar.jpg';
import brainGif from '../assets/brain.gif';
import familyGif from '../assets/family.gif';
import careerGif from '../assets/career.gif';
import loveGif from '../assets/love.gif';
import eduGif from '../assets/edu.gif';
import startButtonGif from '../assets/startbutton.gif';
import descImage from '../assets/desc.png';

const { width, height } = Dimensions.get('window');

// Function to calculate responsive font size
const calculateFontSize = (size) => {
  const baseWidth = 375; // iPhone X width
  return size * (width / baseWidth);
};

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainerTop}>
          <View style={styles.mstaarWrapper}>
            <Image source={mstaarImage} style={styles.mstaarImage} />
            <Image source={brainGif} style={[styles.aroundImage, styles.brain]} />
            <Image source={familyGif} style={[styles.aroundImage, styles.family]} />
            <Image source={careerGif} style={[styles.aroundImage, styles.career]} />
            <Image source={loveGif} style={[styles.aroundImage, styles.love]} />
            <Image source={eduGif} style={[styles.aroundImage, styles.edu]} />
          </View>
        </View>
        <Image source={descImage} style={styles.descImage} />
      </ScrollView>
      <View style={styles.imageContainer}>
        <Image source={walkingImageGif} style={styles.walkingImageGif} />
        <TouchableOpacity style={styles.startButtonContainer} onPress={() => navigation.navigate('signup')}>
          <Image source={startButtonGif} style={styles.startButtonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: height * 0.08,
  },
  imageContainerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height / 3,
    marginBottom: height * 0.06,
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
  descImage: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginTop: height * 0.01,
    marginBottom: height * 0.03,
  },
  startButtonContainer: {
    position: 'absolute',
    bottom: height * 0.1,
  },
  startButtonImage: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: '100%',
    height: height / 3,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  walkingImageGif: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Start;
