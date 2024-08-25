import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import meeImage from '../assets/faq/mee.png';
import puzzleImage from '../assets/puzzle.png';
import puzzle1Image from '../assets/puzzle1.png';
import puzzle2Image from '../assets/puzzle2.png';
import puzzle3Image from '../assets/puzzle3.png';
import puzzle4Image from '../assets/puzzle4.png';
import puzzle5Image from '../assets/puzzle5.png';
import adGif from '../assets/ad.gif';
import myStarImage from '../assets/coin.gif';

const puzzles = [
  {
    image: puzzleImage,
    question: "Can you help the police find the armed robber? The robber was in blue pants, a straight-striped hat, and a mustache. Unfortunately, he stole a watch! Find the thief now!",
    options: ['Liu', 'Lo', 'La', 'Lee'],
    answer: 'Liu',
  },
  {
    image: puzzle1Image,
    question: "How many triangles are in the picture?",
    options: ['19', '18', '16', '14'],
    answer: '16',
  },
  {
    image: puzzle2Image,
    question: "Find what is 6581 = ?",
    options: ['4', '2', '3', '6'],
    answer: '3',
  },
  {
    image: puzzle3Image,
    question: "Choose the red shape with corners.",
    options: ['square', 'circle', 'red square', 'yellow square'],
    answer: 'red square',
  },
  {
    image: puzzle4Image,
    question: "How many jump ropes are there in the box, assuming we can see all the ends?",
    options: ['4', '3', '5', '6'],
    answer: '4',
  },
  {
    image: puzzle5Image,
    question: "There were 2 blocks. Then there were 9 blocks. How many cuts were made?",
    options: ['5', '7', '3', '2'],
    answer: '7',
  },
];

const Puzzle = ({ navigation }) => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [stars, setStars] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentPuzzle = puzzles[currentPuzzleIndex];

  const handleOptionPress = (option) => {
    if (answered) {
      Alert.alert("Only single attempt is allowed");
      return;
    }
    setSelectedOption(option);
    if (option === currentPuzzle.answer) {
      setStars(stars + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentPuzzleIndex + 1 >= 5) {
      setCompleted(true);
    } else {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setAnswered(false);
    }
  };

  if (completed) {
    return (
      <View style={styles.container}>
        <Text style={styles.finalMessage}>Thank you for answering the questions!</Text>
        <Text style={styles.finalScore}>Your score is {stars} out of 5.</Text>
       
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Puzzle</Text>
        <Image source={meeImage} style={styles.headerImage} />
      </View>

      <View style={styles.quizAndStarsContainer}>
        <Image source={myStarImage} style={styles.myStarImage} />
        <Text style={styles.myStars}>My Stars: {stars}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Image source={currentPuzzle.image} style={styles.puzzleImage} resizeMode="contain" />
        
        <Text style={styles.puzzleText}>
          {currentPuzzle.question}
        </Text>

        <View style={styles.optionsContainer}>
          {currentPuzzle.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionBox,
                answered && option === selectedOption && isCorrect ? styles.correctOptionBox : null,
                answered && option === selectedOption && !isCorrect ? styles.wrongOptionBox : null,
                answered && option === currentPuzzle.answer && !isCorrect ? styles.correctOptionBox : null,
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {answered && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>

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
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
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
    left: 10,
    top:10,
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
  contentContainer: {
    flex: 1,
    top:-10,
    height: 20,
    width: '93%',
    backgroundColor: '#FFDF84',
    borderRadius: 30,
    padding: 15,
    marginTop: 10,
    alignSelf: 'center',
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
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
  nextButton: {
    backgroundColor: '#FF6600',
    borderRadius: 15,
    padding: 15,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  finalMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  finalScore: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  thankYouImage: {
    width: 200,
    height: 200, 
    marginBottom: 40, 
    alignSelf: 'center',
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
});

export default Puzzle;