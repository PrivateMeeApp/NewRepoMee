import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';


const Connect = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');

      // Simulate an automated reply after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is an automated reply', sender: 'bot' },
        ]);
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <MenuProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
              <Text style={styles.endButtonText}>END</Text>
            </TouchableOpacity>
            <Image source={require('../assets/mee.png')} style={styles.logoImage} />
          </View>

          <View style={styles.breakLine}></View>

          <View style={styles.contentContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.headSection}>
                <Image source={require('../assets/profile.png')} style={styles.psychologistImage} />
                <Text style={styles.headText}>Psychologist</Text>
                <View style={styles.headButtons}>
                  <TouchableOpacity style={styles.chatButton}>
                    <Image source={require('../assets/chat.png')} style={styles.buttonImage} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callButton}>
                    <Image source={require('../assets/call.png')} style={styles.buttonImage} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bodySection}>
                <ScrollView
                  style={styles.messageContainer}
                  ref={scrollViewRef}
                  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                  {messages.map((msg, index) => (
                    <View
                      key={index}
                      style={[
                        styles.messageBubble,
                        msg.sender === 'bot' ? styles.botMessage : styles.userMessage,
                      ]}
                    >
                      <Text style={styles.messageText}>{msg.text}</Text>
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Type a message..."
                    placeholderTextColor="#000"
                    value={message}
                    onChangeText={setMessage}
                    multiline={true}
                  />
                  <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Image source={require('../assets/send.png')} style={styles.sendImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF05', 
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFA800', 
  },
  breakLine: {
    height: 2, 
    backgroundColor: '#FFF',
    marginHorizontal: 2, 
    marginTop: -15,
  },
  goBackButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 25,
    position: 'absolute',
    left: 10,
    top: 9,
    zIndex: 5,
    marginTop: 28,
    marginLeft: 13,
    width: 70,
  },
  endButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 9,
  },
  logoImage: {
    width: 60,  
    height: 40,
    resizeMode: 'contain',
    marginTop: 20,
    marginLeft: 270,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -10,
    marginBottom: -15,
  },
  innerContainer: {
    flex: 1,
    width: 380,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: -18,
    marginRight: 10,
    backgroundColor: '#FFDF84',
    borderRadius: 0,
    padding: 20,
  },
  headSection: {
    backgroundColor: '#FFA800',
    borderRadius: 40,
    height: 55,
    width: 340,
    padding: 15,
    marginTop: -10,
    marginLeft: -12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  psychologistImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
    marginLeft:-75,
  },
  headButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chatButton: {
    marginLeft: 10,
  },
  callButton: {
    marginLeft: 10,
  },
  buttonImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  bodySection: {
    flex: 1,
    backgroundColor: '#FFA800', 
    borderRadius: 35,
    padding: 15,
    marginTop: 10,
    marginLeft: -8,
    marginRight: 14,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  messageContainer: {
    flex: 1,
  },
  messageBubble: {
    backgroundColor: '#FFF',
    borderRadius: 22,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    position: 'relative',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#c1d8e3',
    borderWidth: 1, // Width of the border
    borderColor: '#fff', // Color of the border (blue in this case, adjust as needed)
    padding: 10, // Optional: padding inside the message box
    margin: 5, // Optional: margin around the message box
    shadowColor: '#000', // Shadow color
  shadowOffset: { width: 0, height: 2 }, // Shadow offset
  shadowOpacity: 0.3, // Shadow opacity
  shadowRadius: 4, // Shadow blur radius
  elevation: 9, // Shadow elevation for Android
  },
  
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFD65E',
    borderWidth: 1, // Width of the border
    borderColor: '#FFf', // Color of the border (orange in this case, adjust as needed)
    padding: 10, // Optional: padding inside the message box
    margin: 5, // Optional: margin around the message box
    shadowColor: '#000', // Shadow color
  shadowOffset: { width: 0, height: 2 }, // Shadow offset
  shadowOpacity: 0.3, // Shadow opacity
  shadowRadius: 4, // Shadow blur radius
  elevation: 10, // Shadow elevation for Android
  },
  
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textBox: {
    flex: 1,
    height: 40,
    color: '#000',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  sendButton: {
    marginLeft: 10,
  },
  
  sendImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderWidth: 2, // Width of the border
    borderColor: '#fff', // Color of the border
    borderRadius: 25, // Radius of the border corners (optional, adjust as needed)
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 9, // Shadow elevation for Android
  }
  
});

export default Connect;
