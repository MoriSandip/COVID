import React from 'react'
import {
    Image,
    StyleSheet,       // CSS-like styles
    Text,             // Renders text
    TouchableOpacity, // Pressable container
    View              // Container component
  } from 'react-native';  
import { COLORS } from '../../../constants';

const RoundButtonIcon = ({onPress,title,color,icon}) => {
    return (
    <TouchableOpacity onPress={onPress}>  
    <View style={ {
      flexDirection:'row',
      marginVertical:12,
      borderRadius: 50,         // Rounded border
      paddingHorizontal: 50, 
      backgroundColor:color,   // Horizontal padding
      paddingVertical: 10, 
      }}>
        <Image source={icon} style={{height:24,width:24,tintColor:COLORS.white}}/>
        <Text style={ { color: COLORS.white, fontWeight: 'bold',textAlign:'center'}}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
} 
export default RoundButtonIcon
