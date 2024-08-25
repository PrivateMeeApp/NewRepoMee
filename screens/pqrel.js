import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import meeImage from '../assets/faq/mee.png';
import adGif from '../assets/ad.gif';
import myStarImage from '../assets/coin.gif';
import correctGif from '../assets/correct.gif';
import pqImage from '../assets/pqimage.gif';

const puzzles = [
  {
    question: "1. How satisfied are you with your current job or career path?",
    options: [
      'a) Very satisfied; I find my work fulfilling and rewarding.',
      'b) Somewhat satisfied; there are good and bad days.',
      'c) Unsatisfied; I often feel unfulfilled or disconnected from my work.',
      'd) Very dissatisfied; I am unhappy and considering a change.'
    ]
  },  

  {
    question: "2. How motivated do you feel in your current job?",
    options: [
      'a) Very motivated; I’m excited and driven to do well.',
      'b) Somewhat motivated; I have good days, but sometimes it’s hard.',
      'c) Not very motivated; I often feel uninterested in my work.',
      'd) Not motivated at all; I feel stuck and not excited about my job.'
    ]
  },
  {
    question: "3. How do you feel about the balance between your work and personal life?",
    options: [
      'a) It’s great; I have enough time for both work and personal activities.',
      'b) It’s okay; sometimes work takes over, but I manage.',
      'c) It’s hard; work often takes up too much of my personal time.',
      'd) It’s bad; I feel like work controls most of my life.'
    ]
  },
  {
    question: "4. How do you feel about the skills and training you have for your job?",
    options: [
      'a) Very confident; I have the skills I need and feel well-trained.',
      'b) Somewhat confident; I have most of the skills but need more training.',
      'c) Not confident; I feel like I lack some important skills.',
      'd) Very unsure; I feel unprepared and need a lot more training.'
    ]
  },
  {
    question: "5. How satisfied are you with the communication and teamwork at your workplace?",
    options: [
      'a) Very satisfied; communication and teamwork are great.',
      'b) Somewhat satisfied; it’s okay but could be better.',
      'c) Unsatisfied; communication and teamwork are often poor.',
      'd) Very unsatisfied; there’s little to no communication or teamwork.'
    ]
  }
];
const Puzzle = ({ navigation }) => {
  const [stars, setStars] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answered, setAnswered] = useState({});
  const [showSubmitMessage, setShowSubmitMessage] = useState(false); // New state for showing the submit message

  const handleOptionPress = (index, option) => {
    if (answered[index]) {
      return;
    }

    const isCorrect = puzzles[index].answer === option;
    setSelectedOptions((prev) => ({ ...prev, [index]: option }));
    setAnswered((prev) => ({ ...prev, [index]: true }));

    if (isCorrect) {
      setStars((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setShowSubmitMessage(true); // Show the submit message container
  };

  const handleClosePopup = () => {
    setShowSubmitMessage(false); // Hide the popup
    
    // Navigate to the App.js or main screen
    navigation.navigate('Home'); // Replace 'MainScreen' with the actual route name of your App.js or the main screen
  };

  const allQuestionsAnswered = puzzles.length > 0 && Object.keys(answered).length === puzzles.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Career</Text>
        <Image source={meeImage} style={styles.headerImage} />
      </View>
      <Image source={pqImage} style={styles.pqImage} />
      <Text style={styles.pqText}>PQ</Text>
      
      <View style={styles.quizAndStarsContainer}>
        <Image source={myStarImage} style={styles.myStarImage} />
        <Text style={styles.myStars}>My Stars: {stars}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}> 
          {puzzles.map((puzzle, index) => (
            <View key={index} style={styles.puzzleContainer}>
              <Text style={styles.puzzleText}>{puzzle.question}</Text>
              <View style={styles.optionsContainer}>
                {puzzle.options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.optionBox,
                      answered[index] && option === selectedOptions[index] && puzzle.answer === option ? styles.correctOptionBox : null,
                      answered[index] && option === selectedOptions[index] && puzzle.answer !== option ? styles.wrongOptionBox : null,
                    ]}
                    onPress={() => handleOptionPress(index, option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}

          {/* Show submit button only if all questions have been answered */}
          {allQuestionsAnswered && (
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* New submit message popup */}
      <Modal
        visible={showSubmitMessage}
        transparent={true}
        animationType="fade"
        onRequestClose={handleClosePopup}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.submitMessageContainer}>
            <Text style={styles.submitMessageText}>Thanks for taking PQ Test</Text>
            <Text style={styles.submitMessageText}>Mee Stars are added to you in next 12 hr’s</Text>
            <Image source={correctGif} style={styles.correctGif} />
            
            <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.adContainer}>
        <Image source={adGif} style={styles.adImage} />
        <Text style={styles.adText}>Advertisement area</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
    justifyContent: 'center',
    alignItems: 'center',
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
  quizAndStarsContainer: {
    left: 90,
    top: 10,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    width: '39%',
    padding: 10,
    backgroundColor: '#FFDF84',
    borderColor: "#FFDF84",
    borderWidth: 1,
    borderRadius: 40,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 20, // Shadow radius
    elevation: 20, // Android shadow effect
    alignSelf: 'center',
    marginBottom: 20,
  },
  correctGif: {
    width: 120,
    height: 180,
    marginTop: 10, // Adjust the margin as needed for spacing
  },
  myStars: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  myStarImage: {
    width: 30,
    height: 50,
    marginRight: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '93%',
    backgroundColor: '#FFDF84',
    borderRadius: 30,
    borderColor:'#000000',
    borderWidth:0.9,
    marginTop: 10,
    alignSelf: 'center',
    flex: 1,
  },
  puzzleContainer: {
    marginBottom: 20,
    padding: 15, // Add padding around the question container for better spacing
    backgroundColor: '#FFE4B5', // Light background color for the question container
    borderRadius: 20, // Rounded corners for a smoother look
    borderColor: '#FFA500', // Add a border color to match the theme
    borderWidth: 1, // Define the border width
    elevation: 5, 
  },
  puzzleText: {
    fontSize: 16, // Increase font size for better readability
    fontWeight: 'bold', // Make the question text bold
    color: '#333', // Use a slightly darker color for contrast
    marginBottom: 10,
    lineHeight: 24, // Increase line height for better spacing between lines
    textAlign: 'justify',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Change this to space-between for better alignment
    paddingHorizontal: 10, // Add padding to the container
    marginTop: 10,
  },
  pqImage: {
    width: 60,
    height: 70,
    marginVertical: 10,
    position: 'absolute',
    left: 10,
    top: 45,
  },
  pqText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFFFFF',
    marginVertical: 10,
    position: 'absolute',
    left: 75,
    top: 63,
  },
  optionBox: {
    backgroundColor: '#FFD580',
    borderRadius: 20,
    paddingVertical: 15, // Adjust padding for better spacing
    paddingHorizontal: 15, 
    marginVertical: 8, // Adjust vertical margin to space out rows of options
    marginHorizontal: '2%', // Add horizontal margin to space out options within the row
    width: '46%', // Adjust width to be a bit less than 50% to account for spacing
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  correctOptionBox: {
    backgroundColor: '#90EE90',
  },
  wrongOptionBox: {
    backgroundColor: '#FFCCCB',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: "#B5A999",
    padding: 10,
    position: 'relative',
  },
  adImage: {
    width: 100,
    height: 100,
  },
  adText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#3DBB3A',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the popup
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitMessageContainer: {
    backgroundColor: '#FFf',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    elevation: 10, // Adding shadow/elevation for a popup effect
  },
  submitMessageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#3DBB3A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Puzzle;