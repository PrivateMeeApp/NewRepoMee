import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// Import the images
import meeImage from '../assets/faq/mee.png';
import downArrowImage from '../assets/faq/down_arrow.png';
import upArrowImage from '../assets/faq/up_arrow.png';
import searchIconImage from '../assets/faq/search.png';

const FAQScreen = ({ navigation }) => {
  const faqItems = [
    { question: 'How do I choose a career path?', answer: 'Explore passions, skills, and values to align with career options, seek guidance, and gain practical experience for informed decision-making.' },
    { question: 'How do I handle pressure from family or society regarding career choices?', answer: 'Communicate openly with family about your passions and goals, seek a balance between their expectations and your aspirations, and stay true to your own career path while respecting their concerns.' },
    { question: 'How do you create my resume effectively and attractively?', answer: 'Highlight key skills and achievements, use a clean and professional layout, tailor content to the job, and include clear contact information.' },
    { question: 'How can I find and maintain motivation to pursue my career goals?', answer: 'Set clear, achievable goals, stay organized, seek inspiration from mentors, and celebrate small wins to maintain motivation.' },
    { question: 'How can I build and maintain confidence in my career choices?', answer: 'Reflect on your strengths and achievements regularly, seek feedback and support from mentors, set and review short-term goals, and be open to adapting your plan as you grow and learn more about yourself.' },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(faqItems.map(() => false));

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.topBar} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
      <Image source={meeImage} style={styles.image} />

      <View style={styles.faqContainer}>
        <View style={styles.searchBox}>
          <Image source={searchIconImage} style={styles.searchIcon} />
          <Text style={styles.searchText}>What can we help you with?</Text>
        </View>

        <View style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>Educational FAQ’s</Text>
        </View>
        
        <View style={styles.spacer} />

        <ScrollView style={styles.faqItemsContainer}>
          {faqItems.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <View style={styles.faqItemHeader}>
                <Text style={styles.faqItemNumber}>{index + 1}.</Text>
                <Text style={styles.faqItemContent}>{item.question}</Text>
                <TouchableOpacity onPress={() => toggleAnswerVisibility(index)}>
                  <Image
                    source={visibleAnswers[index] ? upArrowImage : downArrowImage}
                    style={styles.arrow}
                  />
                </TouchableOpacity>
              </View>
              {visibleAnswers[index] && <Text style={styles.faqItemAnswer}>{item.answer}</Text>}
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF05',
  },
  faqanswer: {
    textAlign: 'justify',
  },
  spacer: {
    height: 15, // Adjust the height to control the space
  },
  topBar: {
    position: 'absolute',
    top: 73,
    left: 1,
    backgroundColor: '#fff',
    borderColor: '#fbbc05',
    borderWidth: 1,
    width: '100%',
    height: 5,
  },
  button: {
    position: 'absolute',
    top: 20,
    left: '68%',
    backgroundColor: '#ff0000',
    borderRadius: 60,
    width: 95,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  image: {
    position: 'absolute',
    top: 6,
    left: 35,
    width: 50, // Adjust size as needed
    height: 60,
  },
  faqContainer: {
    marginTop: 85,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#f4bf62',
    borderRadius: 30,
    padding: 20,
    flex: 1,
    marginBottom: 20,
  },
  faqHeader: {
    backgroundColor: '#2B95B7',
    marginHorizontal: 50,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
  },
  faqHeaderText: {
    fontWeight: '600',
    fontSize: 16,
  },
  faqItem: {
    marginVertical: 10,
    paddingLeft: 0, // Remove padding for alignment
  },
  faqItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  faqItemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    // Align to the left
  },
  faqItemContent: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    // Align to the left
  },
  faqItemAnswer: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
    paddingLeft: 24, // Remove padding for alignment
    paddingRight: 35, 
    textAlign: 'justify',
  },
  arrow: {
    width: 24,
    height: 24,
    tintColor: '#000',
    marginLeft: 10,
  },
  searchBox: {
    backgroundColor: 'rgba(255, 155, 0, 0.78)',
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchIcon: {
    width: 24, // Adjust size as needed
    height: 24,
    marginRight: 10,
  },
  searchText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    opacity: 0.6,
  },
  highlightBox: {
    marginTop: 20,
    marginHorizontal: 22,
    backgroundColor: '#e9a847',
    borderRadius: 20,
    padding: 20,
  },
  highlightText: {
    fontSize: 13,
  },
  faqItemsContainer: {
    flex: 1,
  },
});

export default FAQScreen;
