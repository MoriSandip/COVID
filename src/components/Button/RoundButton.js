import React from 'react'
import {
    StyleSheet,       // CSS-like styles
    Text,             // Renders text
    TouchableOpacity, // Pressable container
    View              // Container component
  } from 'react-native'; 
import { COLORS } from '../../../constants';

const RoundButton = ({onPress,title}) => {
    return (
        <TouchableOpacity onPress={onPress}  >
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    // Button container
    button: {
    marginVertical:32,
      borderRadius: 50,         // Rounded border
      borderWidth: 2,           // 2 point border widht
      borderColor: COLORS.primary,   // White colored border
      paddingHorizontal: 50, 
      backgroundColor:COLORS.primary,   // Horizontal padding
      paddingVertical: 10,      // Vertical padding
    },
    // Button text
    text: {
      color: '#FFFFFF',
      fontWeight: 'bold',
     
    },
  });
export default RoundButton
