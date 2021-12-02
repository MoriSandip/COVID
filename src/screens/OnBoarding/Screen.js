import React from 'react'
import {
    StatusBar,
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View          // Container component
  } from 'react-native'; 
import SvgUri from 'react-native-svg-uri';
import { COLORS } from '../../../constants/theme'; 
import Swiper from './Swiper';
const Screen = ({navigation}) => {
    return (
        <>
        
       <StatusBar
       backgroundColor="#fff"/>
       <Swiper >
             
      <View style={[styles.slide]}>
      <View style={{position:'absolute',top:0,marginTop:32}}> 
      <SvgUri
       source={require('../../../assets/svg/ic_appName.svg')}
      />
      </View>  
       <SvgUri
         source={require('../../../assets/svg/ic_onboardingThree.svg')}
       />  
       
        <Text style={styles.header}>Wear a Mask</Text>
        <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
 
        </View>
        <View style={[styles.slide]}>
      <View style={{position:'absolute',top:0,marginTop:32}}> 
      <SvgUri
         source={require('../../../assets/svg/ic_appName.svg')}
      />
      </View>
                  
      <SvgUri
        source={require('../../../assets/svg/ic_onboardingThree.svg')}
      />  
       
        
        <Text style={styles.header}>Hand Wash & Sanitize</Text>
        <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>

         
      
        </View>
        <View style={[styles.slide]}>
      <View style={{position:'absolute',top:0,marginTop:32}}> 
      <SvgUri
                 source={require('../../../assets/svg/ic_appName.svg')}
                />
      </View>
                  
                 <SvgUri
                 source={require('../../../assets/svg/ic_onboardingThree.svg')}
                />  
       
       
        
        <Text style={styles.header}>Pyshical Distancing</Text>
        <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>

        
      
        </View>
       </Swiper>
     
        
        </>
    )
}

const styles = StyleSheet.create({
    // Slide styles
    slide: {
      flex: 1,                    // Take up all screen
      justifyContent: 'center',   // Center vertically
      alignItems: 'center',
      backgroundColor:COLORS.white       // Center horizontally
    },
    // Header styles
    header: {
      color: '#000',
      fontFamily: 'Avenir',
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 15,
    },
    // Text below header
    text: {
      color: '#000',
      fontFamily: 'Avenir',
      fontSize: 18,
      marginHorizontal: 40,
      textAlign: 'center',
    },
  });
export default Screen
