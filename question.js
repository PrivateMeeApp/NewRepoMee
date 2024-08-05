import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import meeImage from '../assets/faq/mee.png';
import myStarImage from '../assets/mystar.gif';
import adGif from '../assets/ad.gif'; // Import your advertisement GIF here
import quizImage from '../assets/quiz.jpeg'; // Import your quiz image here
import lightOnImage from '../assets/light_on.png'; // Import the light_on image here

export default function Question({ navigation }) {
  const questions = [
    {
      question: 'Find the next number in the sequence: 392781',
      options: ['424210', '123456', '654321', '789012'],
      answer: '424210',
      hint: 'It is a sequence with increasing digits.',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
      hint: 'It is a basic arithmetic addition.',
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      hint: 'It is known as the city of lights.',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [stars, setStars] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionPress = (option) => {
    if (answered) {
      Alert.alert("Only single attempt is allowed");
      return;
    }
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setStars(stars + 1);
      setIsCorrect(true);
      setAnswered(true);
    } else {
      setIsCorrect(false);
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("No more questions available.");
    }
    setSelectedOption(null);
    setIsCorrect(null);
    setAnswered(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Question</Text>
        <Image source={meeImage} style={styles.headerImage} />
      </View>
      
      <View style={styles.quizAndStarsContainer}>
        <Image source={quizImage} style={styles.quizImage} />
        <View style={styles.myStarsContainer}>
          <Image source={myStarImage} style={styles.myStarImage} />
          <Text style={styles.myStars}>My Stars: {stars}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.questionContainer}>
            <Text style={styles.sequence}>{currentQuestion.question}</Text>
          </View>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionBox,
                  answered && option === selectedOption && isCorrect ? styles.correctOptionBox : null,
                  answered && option === selectedOption && !isCorrect ? styles.wrongOptionBox : null,
                  answered && option === currentQuestion.answer && !isCorrect ? styles.correctOptionBox : null,
                ]}
                onPress={() => handleOptionPress(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {isCorrect !== null && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}

        {!answered && (
          <View style={styles.hintBox}>
            <Image source={lightOnImage} style={styles.hintImage} />
            <Text style={styles.hintText}>HINT: {currentQuestion.hint}</Text>
          </View>
        )}
      </View>

      {/* Advertisement Area */}
      <View style={styles.adContainer}>
        <Image source={adGif} style={styles.adImage} />
        <Text style={styles.adText}>Advertisement area</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
    flexDirection: 'column',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%', 
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  myStarsContainer: {
    left: 10,
    top:-10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    padding: 10,
    backgroundColor: '#FFDF84',
    borderColor: "#FFDF84",
    borderWidth: 1,
    borderRadius: 18,
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
  quizImage: {
    top:-20,
    width: 120,
    height: 40,
  },
  contentContainer: {
    top:-32,
    flex: 5,
    width: '93%',
    borderRadius: 40,
    padding: 10,
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,  // Fill the available space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE3A8', // White background for better contrast
    borderRadius: 20, // Slightly reduced border radius for a softer look
    padding: 20, // Increased padding for more spacing
    marginVertical: 20, // Vertical margin for spacing from other elements
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // Elevation for Android shadow
  },
  mainContainer: {
    padding: 1,
    height: '50%', // Adjust this value as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E3',
    height: 300,
    borderRadius: 40,
  },
  questionContainer: {
    width: '90%',
    backgroundColor: '#FFD580',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  sequence: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    textAlign: 'justify',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  optionBox: {
    backgroundColor: '#FFD580',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 5,
    width: '40%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  correctOptionBox: {
    backgroundColor: '#90EE90', // Light green color
  },
  wrongOptionBox: {
    backgroundColor: '#FFCCCB', // Light red color
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#FF6600',  // Orange color
    borderRadius: 15,            // Increased border radius for a more rounded look
    padding: 15,                 // Increased padding for a bigger button
    marginTop: 30,
    marginLeft: 'auto',          // Center align
    marginRight: 'auto',         // Center align
    width: '50%',                // Increased width for a more prominent button
    alignSelf: 'center',
    shadowColor: '#000',         // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,                // Elevation for Android shadow
  },
  nextButtonText: {
    color: '#FFFFFF',            // White text color
    fontSize: 22,                // Slightly increased font size
    fontWeight: 'bold',          // Bold text for emphasis
    textAlign: 'center',
    letterSpacing: 1,            // Slight spacing between letters for style
  },
  hintBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF8E1', // Light yellow background
    borderRadius: 15,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#F5C518', // Border color to match the hint box
  },
  hintImage: {
    width: 24,
    height: 24,
    marginRight: 15, // Increased margin to space out from text
  },
  hintText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333', // Darker color for better readability
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
    width: 100, // Adjust size as needed
    height: 100,
  },
  adText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
});
