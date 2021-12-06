import React from 'react'
import {
  Image,
    StatusBar,
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View  ,
    TouchableOpacity        // Container component
  } from 'react-native';  
import { COLORS, icons } from '../../../constants'; 
import Screen from './Screen';

const OnBoarding = ({navigation}) => {
  const goDashboard = () => {
    // console.log("hy 1")
    navigation.navigate('Dashboard')
  }
    return ( 
       
        
      <View style={{flex:1,backgroundColor:COLORS.white}}> 
       
       <View style={{backgroundColor:COLORS.white,margin:14,flexDirection:'row' }}>
        <TouchableOpacity
         style={{flexDirection:'row',position:'absolute',right:0,marginRight:12}}
         onPress={goDashboard}>
        <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.black}}>Skip</Text>
         <Image source={icons.right_arrow} style={{height:14,width:14,marginHorizontal:2}} />
        </TouchableOpacity>
        
       </View>
   
     
         <Screen /> 
       
      </View>
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
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 15,
    },
    // Text below header
    text: {
      color: '#000',
      fontSize: 18,
      marginHorizontal: 40,
      textAlign: 'center',
    },
  });
export default OnBoarding
