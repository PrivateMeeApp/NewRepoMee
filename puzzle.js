import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import meeImage from '../assets/faq/mee.png';
import puzzleImage from '../assets/puzzle.png';
import myStarImage from '../assets/mystar.gif';
import adGif from '../assets/ad.gif';

const Puzzle = ({ navigation }) => {
  const [stars, setStars] = useState(0);
  const [inputValue, setInputValue] = useState(''); // State for input value
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submit button click
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // Track correctness after submission

  // Handle the submit button press
  const handleSubmit = () => {
    setIsSubmitted(true); // Set submit state to true
    setIsAnswerCorrect(inputValue.trim().toLowerCase() === 'lou'); // Check if the answer is correct
  };

  // Determine the container style based on submission status and answer correctness
  const inputContainerStyle = isSubmitted
    ? (isAnswerCorrect ? styles.inputContainerAboveSubmitGreen : styles.inputContainerAboveSubmitRed)
    : styles.inputContainerDefault;

  // Determine the input field style based on submission status and answer correctness
  const inputFieldStyle = isSubmitted
    ? (isAnswerCorrect ? styles.inputAboveSubmitCorrect : styles.inputAboveSubmitIncorrect)
    : styles.inputAboveSubmit;

  // Reset submission state and answer correctness when input value changes
  const handleChangeText = (text) => {
    setInputValue(text);
    if (isSubmitted) {
      setIsSubmitted(false); // Reset submission status
      setIsAnswerCorrect(null); // Reset answer correctness
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Puzzles</Text>
        <Image source={meeImage} style={styles.headerImage} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.topBar} />
        
        {/* My Stars section */}
        <View style={styles.myStarsContainer}>
          <Image source={myStarImage} style={styles.myStarImage} />
          <Text style={styles.myStars}>My Stars: {stars}</Text>
        </View>

        {/* Puzzle Image */}
        <Image source={puzzleImage} style={styles.puzzleImage} />
        
        {/* Puzzle Text */}
        <Text style={styles.puzzleText}>
          Can you help the police find the armed robber? The robber was in blue pants, a straight-striped hat, and a mustache. Unfortunately, he stole a watch! Find the thief now!
        </Text>
        
        {/* Input Section Above Submit */}
        <View style={inputContainerStyle}>
          <TextInput 
            style={inputFieldStyle} // Apply conditional style here
            placeholder="Guess the answer and type here.." 
            placeholderTextColor="#707070"
            value={inputValue} // Bind input value to state
            onChangeText={handleChangeText} // Update state on text change
          />
        </View>
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit & Show Answer</Text>
        </TouchableOpacity>
        
        {/* Input Section Below Submit */}
        <View style={styles.inputContainerBelowSubmit}>
          <Image source={adGif} style={styles.adImage} />
          <Text style={styles.adText}>Advertisement area</Text>
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
    backgroundColor: '#FFBF05',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 55,
    zIndex: 1,
  },
  backButton: {
    marginLeft: 10,
  },
  adText: {
    left: 230,
    fontSize: 16,
    color: 'black',
    marginTop: -80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },  
  contentContainer: {
    flex: 1,
    width: '93%',
    backgroundColor: '#FFDF84',
    borderRadius: 30,
    padding: 15,
    marginTop: 10,
    alignSelf: 'center',
  },
  topBar: {
    backgroundColor: '#fff',
    borderColor: '#fbbc05',
    borderWidth: 1,
    width: '130%',
    left: -25,
    top: -23,
    height: 5,
    zIndex: 1,
    marginBottom: 10,
  },
  adImage: {
    width: '50%',
    height: 120,
    marginBottom: 10,
  },
  myStarsContainer: {
    left: 90,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    padding: 10,
    backgroundColor: '#FFDF84',
    borderColor: "#FFDF84",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  myStarImage: {
    width: 30,
    height: 50,
    marginRight: 10,
  },
  myStars: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  puzzleImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  puzzleText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    lineHeight: 23,
    textAlign: 'justify',
  },
  inputContainerDefault: {
    marginBottom: 10,
    backgroundColor: '#FFDF84', // Default color
    borderRadius: 15,
  },
  inputContainerAboveSubmitGreen: {
    backgroundColor: 'green',
    marginBottom: 10,
    borderRadius: 15,
  },
  inputContainerAboveSubmitRed: {
    backgroundColor: 'red',
    marginBottom: 10,
    borderRadius: 15,
  },
  inputAboveSubmit: {
    height: 72,
    borderWidth: 1,
    borderColor: '#FF9900',
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#D9D9D9',
  },
  inputAboveSubmitCorrect: {
    height: 72,
    borderWidth: 1,
    borderColor: '#00FF00', // Green border for correct answer
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#00FF00',
  },
  inputAboveSubmitIncorrect: {
    height: 72,
    borderWidth: 1,
    borderColor: '#FF0000', // Red border for incorrect answer
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#FF0000',
  },
  submitButton: {
    left: 75,
    width: '55%',
    alignSelf: 'center',
    marginTop: 45,
    backgroundColor: '#FF9900',
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: '#000000',
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },
  inputContainerBelowSubmit: {
    left: -30,
    width: 385,
    height: 140,
    marginTop: 30,
    backgroundColor: "#B5A999",
  },
  advertisementContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#DB0404',
    borderWidth: 1,
  },
  advertisementText: {
    color: '#707070',
    fontSize: 13,
  },
});

export default Puzzle;
