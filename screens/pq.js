import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PQ = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonAnimations] = useState({
    Relationship: new Animated.Value(1),
    Career: new Animated.Value(1),
    Struggling: new Animated.Value(1),
    Studies: new Animated.Value(1),
  });

  const [arrowColor] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(arrowColor, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(arrowColor, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [arrowColor]);

  const handlePress = (option) => {
    setSelectedOption(option);
    Object.keys(buttonAnimations).forEach((key) => {
      Animated.spring(buttonAnimations[key], {
        toValue: key === option ? 1.1 : 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleNextPress = () => {
    if (selectedOption) {
      // Navigate based on the selected option
      const routeName = getNextRoute(selectedOption);
      navigation.navigate(routeName);
    }
  };

  const getNextRoute = (option) => {
    switch (option) {
      case 'Career':
        return 'pqrel';  // Destination for Career
      case 'Relationship':
        return 'Pqana1'; // Destination for Relationship
      case 'Struggling':
        return 'Pqana2'; // Destination for Struggling
      case 'Studies':
        return 'Pqana3'; // Destination for Studies
      default:
        return 'Home';  // Fallback route if something goes wrong
    }
  };

  const arrowColorInterpolation = arrowColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000', '#FFF'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <View style={styles.buttonContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>
            Tap on the box that matches your reason for wanting to improve
          </Text>
        </View>
        <View style={styles.arrow}>
          <Animated.Text style={[styles.arrowText, { color: arrowColorInterpolation }]}>▼</Animated.Text>
          <Animated.Text style={[styles.arrowText, { color: arrowColorInterpolation }]}>▼</Animated.Text>
        </View>

        {['Relationship', 'Career', 'Struggling', 'Studies'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => handlePress(option)}
          >
            <Animated.View
              style={{
                transform: [{ scale: buttonAnimations[option] }],
                shadowColor: selectedOption === option ? '#000' : '#ffa800',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
              }}
            >
              <Text style={styles.optionText}>
                {option === 'Struggling' ? 'Struggling to resolve Problems' : option}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        ))}

        {selectedOption && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next ➜</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA800',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goBackButton: {
    backgroundColor: '#FF0000',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  goBackText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  line: {
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: '#FFDF84',
    padding: 45,
    borderRadius: 15,
    marginTop: 20,
  },
  instructionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  instruction: {
    fontWeight: 'bold',
    color: '#000000',
  },
  arrow: {
    marginVertical: 10,
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 20,
  },
  optionButton: {
    backgroundColor: '#7B68EE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#4B0082',
  },
  optionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default PQ;