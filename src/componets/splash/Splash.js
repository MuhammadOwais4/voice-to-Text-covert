import React, { useEffect } from 'react'
import { Image,  StyleSheet, Text, View,Animated, Easing} from 'react-native'
import SplashScreens from 'react-native-animated-splash-screen';
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Home');
        }, 3000); 
      }, []);
      

    return (
      
        <View style={styles.maincontainer}>
            <View style={styles.container}>
            <Animated.Image 
        source={require('../../assets/microphone.webp')}
        style={[styles.logo]}
      />
                <Text style={styles.text}>voice to text convert app</Text>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:'300',
        color:'black',
        textAlign:'center'
    },
    maincontainer:{
        flex:1,
        paddingHorizontal:50,
        backgroundColor:'white'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
      },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});
