import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Animated, Easing, TextInput } from 'react-native';

import meeImage from '../assets/mee.png';
import downArrowImage from '../assets/down_arrow.png';
import upArrowImage from '../assets/up_arrow.png';
import searchIconImage from '../assets/search.png';

const FAQScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [animatedHeights, setAnimatedHeights] = useState([]);

  const faqItems = [
    { question: 'How can I strengthen my relationship with family members?', answer: 'Spend quality time together, communicate openly and honestly, show appreciation and support, and work on resolving conflicts with empathy and understanding.' },
    { question: 'How do I deal with a family member who is consistently negative?', answer: 'Approach the situation with empathy, set boundaries if needed, and encourage them to seek professional help if their negativity affects their well-being or the family dynamic.' },
    { question: 'How can we improve communication in the family?', answer: 'Establish regular family meetings, practice active listening, express your feelings clearly and respectfully, and work on resolving misunderstandings constructively.' },
    { question: 'What can we do if we have different parenting styles?', answer: 'Discuss and agree on parenting approaches, respect each other’s perspectives, and focus on consistency and unity in parenting practices to provide a stable environment for the children.' },
    { question: 'How can we handle financial disagreements within the family?', answer: 'Discuss financial goals and concerns openly, create a budget together, and consider seeking financial counseling if disagreements persist.' },
    { question: 'What strategies can help us cope with a family member’s addiction?', answer: 'Educate yourself about addiction, offer support without enabling, seek professional help, and consider joining a support group for guidance.' },
    { question: 'How can we manage stress from family caregiving responsibilities?', answer: 'Seek support from other family members, use respite care services, and take time for self-care to prevent burnout and maintain your well-being.' },
    { question: 'What can we do if family members disagree on major decisions?', answer: 'Facilitate open discussions, listen to each perspective, and seek a compromise that respects everyone’s viewpoints, or consult a mediator if necessary.' },
    { question: 'How do we address issues with in-laws or extended family?', answer: 'Communicate openly and respectfully, set boundaries as needed, and focus on finding common ground to foster positive relationships.' },
    { question: 'How can we encourage our children to develop strong family bonds?', answer: 'Involve them in family activities, teach them the importance of family values, and create opportunities for them to interact and bond with relatives.' },
    { question: 'How do we handle disagreements about family traditions or holidays?', answer: 'Discuss and respect each person’s preferences, try to find a balance that honors traditions while accommodating everyone’s needs.' },
    { question: 'What can we do to support a family member with a mental health issue?', answer: 'Offer a listening ear, encourage them to seek professional help, and educate yourself about their condition to provide informed support.' },
    { question: 'How can we navigate changes in family dynamics, such as divorce or remarriage?', answer: 'Communicate openly, be patient with each other’s emotions, and seek counseling if needed to adjust to new family structures.' },
    { question: 'How do we handle disagreements about parenting decisions?', answer: 'Discuss concerns openly, find common ground, and consider seeking advice from parenting experts or counselors if needed.' },
    { question: 'How can we support a family member with chronic illness?', answer: 'Provide emotional support, help with practical tasks, and educate yourself about their condition to offer informed assistance.' },
    { question: 'What can we do to foster a more inclusive family environment?', answer: 'Encourage open discussions about diversity, respect each person’s identity, and create opportunities for everyone to feel valued and included.' },
    { question: 'How can we address issues with a family member’s behavior affecting others?', answer: 'Approach the situation calmly, express your concerns respectfully, and work together to find a solution that addresses the behavior without causing conflict.' },
    { question: 'How do we manage family expectations and pressures?', answer: 'Communicate your boundaries and priorities clearly, manage expectations realistically, and seek support if family pressures become overwhelming.' },
    { question: 'What strategies can help us handle major life changes as a family?', answer: 'Communicate openly about the changes, support each other through the transition, and adapt family routines as needed to accommodate new circumstances.' },
    { question: 'How can we address generational differences within the family?', answer: 'Acknowledge and respect different perspectives, find common interests, and foster open communication to bridge generational gaps.' },
    { question: 'What can we do if a family member feels left out or isolated?', answer: 'Include them in family activities, acknowledge their feelings, and work to ensure they feel valued and connected to the family.' },
    { question: 'How can we deal with family members who have different values or beliefs?', answer: 'Respect each other’s values and beliefs, find common ground, and focus on shared goals and interests to maintain harmony.' },
    { question: 'How do we handle disagreements about family roles and responsibilities?', answer: 'Discuss expectations clearly, share responsibilities fairly, and be willing to adjust roles as needed to ensure balance within the family.' },
    { question: 'What can we do to maintain family unity during stressful times?', answer: 'Support each other emotionally, stay connected, and work together to overcome challenges while maintaining family traditions and routines.' },
    { question: 'How can we encourage positive behavior and attitudes in our family?', answer: 'Model positive behavior, provide constructive feedback, and create an environment that fosters respect and encouragement.' },
    { question: 'How do we handle a family member who is frequently absent or disengaged?', answer: 'Communicate your concerns, find out the reasons for their absence, and work together to address any issues affecting their engagement.' },
    { question: 'How can we support a family member pursuing a significant career change?', answer: 'Offer encouragement, provide practical support if needed, and respect their decision while helping them navigate any challenges.' },
    { question: 'What strategies can help us maintain a strong family bond despite busy schedules?', answer: 'Prioritize family time, schedule regular family activities, and find ways to connect even with tight schedules.' },
    { question: 'How can we address family members who have difficulty accepting change?', answer: 'Communicate the reasons for the change clearly, be patient, and offer support to help them adjust more comfortably.' },
    { question: 'What can we do to ensure effective family communication?', answer: 'Encourage regular and open discussions, practice active listening, and address any communication barriers promptly.' },
    { question: 'How do we handle a family member’s financial irresponsibility?', answer: 'Discuss financial concerns openly, set boundaries, and offer support or guidance to help them manage their finances better.' },
    { question: 'How can we improve our family’s overall well-being?', answer: 'Focus on healthy lifestyle habits, encourage regular family activities, and address any issues that may affect the family’s physical and emotional health.' },
    { question: 'How do we handle disagreements about family traditions or values?', answer: 'Respect differing opinions, find a middle ground, and work towards understanding each other’s perspectives while maintaining core values.' },
    { question: 'How do I balance family responsibilities with personal goals?', answer: 'Set clear priorities, involve your family in your plans, delegate tasks when possible, and create a schedule that allows time for both family and personal pursuits.' },
    { question: 'How can I support a family member going through a difficult time?', answer: 'Listen without judgment, offer emotional support, be patient and understanding, and help them find resources or professional help if needed.' },
    { question: 'How do I manage conflicts within the family?', answer: 'Approach conflicts with calmness, encourage open dialogue, focus on finding common ground, and be willing to compromise to maintain family harmony.'},
    { question: 'How can I create a positive and supportive family environment?', answer: 'Encourage open communication, celebrate each other\'s successes, create family traditions, and make an effort to spend quality time together regularly.' },
  ];

  useEffect(() => {
    // Initialize animated heights for all FAQ items
    setAnimatedHeights(faqItems.map(() => new Animated.Value(0)));
  }, []);

  const filteredFaqItems = faqItems.filter((item) => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAnswerVisibility = (index) => {
    setActiveIndex(prevIndex => {
      // Hide the currently active answer if it's the same index
      if (prevIndex === index) {
        Animated.timing(animatedHeights[index], {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
        return null;
      } else {
        // Hide the previously active answer
        if (prevIndex !== null && animatedHeights[prevIndex]) {
          Animated.timing(animatedHeights[prevIndex], {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: false,
          }).start();
        }
        // Show the new answer
        Animated.timing(animatedHeights[index], {
          toValue: 200, // Adjust based on content height
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
        return index;
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <Image source={meeImage} style={styles.image} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <View style={styles.searchBox}>
            <Image source={searchIconImage} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="What can we help you with?"
              placeholderTextColor="#000000"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
          </View>

          <View style={styles.faqHeader}>
            <Text style={styles.faqHeaderText}>Family FAQ’s</Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.faqItemsContainer}>
            {filteredFaqItems.map((item, index) => (
              <View key={index} style={styles.faqItem}>
                <TouchableOpacity 
                  onPress={() => toggleAnswerVisibility(index)} 
                  style={styles.faqItemHeader}
                >
                  <Text style={styles.faqItemNumber}>{index + 1}.</Text>
                  <Text style={styles.faqItemContent}>{item.question}</Text>
                  <Image
                    source={activeIndex === index ? upArrowImage : downArrowImage}
                    style={styles.arrow}
                  />
                </TouchableOpacity>
                <Animated.View 
                  style={[
                    styles.answerContainer,
                    { height: animatedHeights[index] || 0 }, // Provide a fallback value
                    { opacity: animatedHeights[index] ? animatedHeights[index].interpolate({
                        inputRange: [0, 200],
                        outputRange: [0, 1]
                      }) : 0 } // Provide a fallback value
                  ]}
                >
                  {activeIndex === index && (
                    <Text style={styles.faqItemAnswer}>{item.answer}</Text>
                  )}
                </Animated.View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#FFA800',
        },
        topBar: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 70,
          backgroundColor: '#FFA800',
          borderBottomWidth: 1,
          borderBottomColor: '#fbbc05',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          flexDirection: 'row',
          paddingHorizontal: 10,
        },
        button: {
          backgroundColor: '#ff0000',
          borderRadius: 20,
          width: 95,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 'auto',
        },
        buttonText: {
          color: '#fff',
          fontWeight: '600',
          fontSize: 13,
        },
        image: {
          width: 50,
          height: 50,
          marginLeft: 'auto',
        },
        scrollViewContent: {
          paddingTop: 70, // Adjusted to avoid overlapping with the top bar
          paddingBottom: 20,
        },
        innerContainer: {
          paddingHorizontal: 15,
          paddingVertical: 20,
          backgroundColor: '#f4bf62',
          borderRadius: 30,
        },
        searchBox: {
          backgroundColor: 'rgba(255, 155, 0, 0.78)',
          borderRadius: 50,
          paddingVertical: 10,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        },
        searchIcon: {
          width: 24,
          height: 24,
          marginRight: 10,
        },
        searchInput: {
          fontWeight: '600',
          fontSize: 16,
          color: '#000',
          opacity: 0.8,
          flex: 1,
        },
        faqHeader: {
          backgroundColor: '#a36c02',
          marginHorizontal: 20,
          borderRadius: 50,
          paddingVertical: 20,
          alignItems: 'center',
          marginBottom: 20,
        },
        faqHeaderText: {
          fontWeight: '600',
          fontSize: 18,
          color: '#fff',
        },
        faqItem: {
          marginBottom: 15,
        },
        faqItemHeader: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 2,
        },
        faqItemNumber: {
          fontSize: 16,
          fontWeight: 'bold',
          marginRight: 10,
        },
        faqItemContent: {
          fontSize: 16,
          fontWeight: 'bold',
          flex: 1,
        },
        faqItemAnswer: {
          fontSize: 16,
          color: '#333',
          textAlign: 'justify',
        },
        arrow: {
          width: 24,
          height: 24,
          tintColor: '#000',
        },
        answerContainer: {
          overflow: 'hidden',
          backgroundColor: '#fff',
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginTop: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 2,
        },
        noResultsText: {
          fontSize: 16,
          color: '#333',
          textAlign: 'center',
          marginTop: 20,
        },
      });
      
      export default FAQScreen;
      