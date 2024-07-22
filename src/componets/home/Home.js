// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Platform, Animated, Easing } from 'react-native';
// import Voice from '@react-native-voice/voice';
// import { PermissionsAndroid } from 'react-native';
// import Microphone from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 from Expo vector icons

// const Home = ({ navigation }) => {
//   const [isListening, setIsListening] = useState(false);
//   const [recognizedText, setRecognizedText] = useState('');
//   const spinValue = new Animated.Value(0);

//   useEffect(() => {
//     Voice.onSpeechStart = onSpeechStartHandler;
//     Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;
//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const requestMicrophonePermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//           {
//             title: 'Microphone Permission',
//             message: 'This app needs access to your microphone to process voice commands.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           console.log('Microphone permission granted');
//         } else {
//           console.log('Microphone permission denied');
//         }
//       } catch (err) {
//         console.warn('Error requesting microphone permission:', err);
//       }
//     }
//   };

//   useEffect(() => {
//     requestMicrophonePermission();
//   }, []);

//   const startListening = async () => {
//     try {
//       await Voice.start('en-US');
//       setIsListening(true);
//       console.log('Listening...');
//       animateStartButton();
//     } catch (error) {
//       console.error('Error starting recognition:', error);
//     }
//   };

//   const stopListening = async () => {
//     try {
//       await Voice.stop();
//       setIsListening(false);
//       console.log('Stopped listening');
//     } catch (error) {
//       console.error('Error stopping recognition:', error);
//     }
//   };

//   const onSpeechStartHandler = () => {
//     console.log('Speech started');
//   };

//   const onSpeechEndHandler = () => {
//     console.log('Speech ended');
//   };

//   const onSpeechResultsHandler = (event) => {
//     const text = event.value[0];
//     setRecognizedText(text);
//     console.log('Recognized text:', text);
//   };

//   const animateStartButton = () => {
//     Animated.loop(
//       Animated.timing(spinValue, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   };

//   const spin = spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.SubContainer}>
//       </View>
//       <View style={styles.SubContainerButton}>
//         <Text style={styles.text}>
//          Voice to text convert app
//         </Text>
//         <TouchableOpacity style={{textAlign:'center'}} onPress={isListening ? stopListening : startListening}>
//           <Animated.View style={{ transform: [{ rotate: spin }] }}>
//             <Microphone style={{textAlign:'center'}} name={isListening ? "microphone-alt" : "microphone-alt-slash"} size={40} color="black" />
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={{ fontSize: 16, textAlign: 'center', marginHorizontal: 20, marginTop: 20 }}>
//           {recognizedText}
//         </Text>
//       </View>
//       <View style={[styles.SubContainerButton, { paddingBottom: 30, paddingTop: 5 }]}>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     width: '100%',
//     paddingHorizontal: 20
//   },
//   SubContainerButton: {
//     width: '100%',
//   },
//   SubContainer: {
//     padding: 0
//   },
//   text: {
//     color: '#000000',
//     paddingBottom: 50,
//     textAlign: 'center',
//     fontSize: 30
//   }
// });

// export default Home;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Animated, Easing } from 'react-native';
import Voice from '@react-native-voice/voice';
import { PermissionsAndroid } from 'react-native';
import Microphone from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 from Expo vector icons
import { Fonts } from '../style';

const Home = ({ navigation }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app needs access to your microphone to process voice commands.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Microphone permission granted');
        } else {
          console.log('Microphone permission denied');
        }
      } catch (err) {
        console.warn('Error requesting microphone permission:', err);
      }
    }
  };

  useEffect(() => {
    requestMicrophonePermission();
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
      console.log('Listening...');
      animateStartButton();
    } catch (error) {
      console.error('Error starting recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
      console.log('Stopped listening');
    } catch (error) {
      console.error('Error stopping recognition:', error);
    }
  };

  const onSpeechStartHandler = () => {
    console.log('Speech started');
  };

  const onSpeechEndHandler = () => {
    console.log('Speech ended');
  };

  const onSpeechResultsHandler = (event) => {
    const text = event.value[0];
    setRecognizedText(text);
    console.log('Recognized text:', text);
  };

  const animateStartButton = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
      </View>
      <View style={styles.SubContainerButton}>
        <Text style={styles.text}>
          Voice to text convert app
        </Text>
        <TouchableOpacity style={{ textAlign: 'center' }} onPress={isListening ? stopListening : startListening}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Microphone style={{ textAlign: 'center' }} name={isListening ? "microphone-alt" : "microphone-alt-slash"} size={50} color={isListening ? "gray" : "black"} />
          </Animated.View>
        </TouchableOpacity>
        <View style={{width:'100%',marginTop:50,backgroundColor:'#D3D3D3',borderRadius:5,height:200}}>
        <Text style={{ fontSize: 15, textAlign: 'center', marginHorizontal: 20, marginTop: 10,paddingBottom:20 ,color:'black',height:200,borderRadius:5,fontFamily:Fonts.MEDIUM}}>
          {recognizedText}
        </Text>
        </View>
       
      </View>
      <View style={[styles.SubContainerButton, { paddingBottom: 30, paddingTop: 5 }]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 20
  },
  SubContainerButton: {
    width: '100%',
  },
  SubContainer: {
    padding: 0
  },
  text: {
    color: 'red',
    paddingBottom: 80,
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'800'
  }
});

export default Home;
