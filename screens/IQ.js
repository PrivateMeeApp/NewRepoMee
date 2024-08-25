import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import meeImage from '../assets/faq/mee.png';
import myStarImage from '../assets/coin.gif';
import adGif from '../assets/ad.gif'; // Import your advertisement GIF here
import quizImage from '../assets/quiz.jpg'; // Import your quiz image here
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
      question: 'Who was the first person to set foot on the moon?',
      options: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'Yuri Gagarin'],
      answer: 'Neil Armstrong',
      hint: 'He made a famous statement, "That\'s one small step for man, one giant leap for mankind."',
    },
    {
      question: 'Choose the word that does not belong in the group: ?',
      options: ['Orange', 'Banana', 'Carrot', 'Tomato'],
      answer: 'Carrot',
      hint: 'Consider which item is not typically eaten raw as a fruit or found in desserts.',
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      hint: 'It is known as the city of lights.',
    },
    {
      question: 'Bird is to Fly as Fish is to ___',
      options: ['Swim', 'Walk', 'Jump', 'Run'],
      answer: 'Swim',
      hint: 'Think about the natural movement of each animal in its habitat.',
    },
    {
      question: 'If a train travels at a speed of 60 miles per hour for 2 hours, how far will it travel?',
      options: ['110', '160', '120', '190'],
      answer: '120',
      hint: 'Multiply the speed by the time to find the distance traveled.',
    },
    {
      question: 'Which of the following does not belong with the others?',
      options: ['Rose', 'Tulip', 'Lily', 'Oak'],
      answer: 'Oak',
      hint: 'Think about which item is not a type of flower.',
    },
    {
      question: 'If all A are B, and all B are C, then which of the following statements must be true?',
      options: ['Some C are A', 'All A are C', 'Some A are A', 'No A are C.'],
      answer: 'Some C are A',
      hint: 'Think about which item is not a type of flower.',
    },
    {
      question: 'Five friends - Anna, Ben, Chris, David and Emma - are seated in a row. Chris is sitting next to Anna, who is not sitting at either end. Who could be sitting at one end?',
      options: ['Chris or David', 'Anna or David', 'Ben or Emma', 'Chris or Emma'],
      answer: 'Ben or Emma',
      hint: 'Since Anna is not at either end, think about the possible positions for the others.',
    },
  ];

  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [stars, setStars] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [questionContainerHeight, setQuestionContainerHeight] = useState(null); // Add state for height

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 5)); // Select 5 questions instead of 3
  };
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleOptionPress = (option) => {
    if (answered) {
      Alert.alert("Notice", "Only a single attempt is allowed"); // Corrected alert message
      return;
    }
    setSelectedOption(option);
    if (option === currentQuestion?.answer) { // Check if currentQuestion is defined
      setStars(stars + 1);
      setIsCorrect(true);
      setAnswered(true);
    } else {
      setIsCorrect(false);
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowFinalScore(true); // Display final score message
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

      {showFinalScore ? (
        <View style={styles.contentContainer}>
          <View style={styles.mainContainer}>
            <View 
              style={[styles.questionContainer, { height: questionContainerHeight }]} // Adjust height dynamically
              onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setQuestionContainerHeight(height); // Set container height based on content
              }}
            >
              <Text style={styles.sequence} numberOfLines={0} adjustsFontSizeToFit>
                Thank you for answering the questions. Your score is {stars} out of 5.
              </Text>
            </View>
          </View>
        </View>
      ) : (
        currentQuestion && (
          <View style={styles.contentContainer}>
            <View style={styles.mainContainer}>
              <View 
                style={[styles.questionContainer, { height: questionContainerHeight }]} // Adjust height dynamically
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout;
                  setQuestionContainerHeight(height); // Set container height based on content
                }}
              >
                <Text style={styles.sequence} numberOfLines={0} adjustsFontSizeToFit>{currentQuestion.question}</Text>
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
                <Text style={styles.hintText}>
                  <Text style={styles.hintBold}>HINT: </Text>
                  {currentQuestion.hint}
                </Text>
              </View>
            )}
          </View>
        )
      )}

      {/* Advertisement Area */}
      <View style={styles.adContainer}>
        <Image source={adGif} style={styles.adImage} />
        <Text style={styles.adText}>Advertisement area</Text>
      </View>
    </View>
  );
}
``
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
    marginRight: 1,
  },
  myStars: {
    fontSize: 14,
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
  questionContainer: {
    width: '90%',
    backgroundColor: '#FFD580',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    flexGrow: 1, // Allow the container to grow based on content
  },
    
  sequence: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',  // Center text inside the box
    flexWrap: 'wrap', // Ensure text wraps within the container
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
    textAlign: 'center',  // Center text inside the box
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
    textAlign: 'center',  // Center text inside the box
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
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // Center content inside the box
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
    textAlign: 'justify',  // Center text inside the box
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