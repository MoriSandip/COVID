import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants/theme'

const CircleButton = ({icon,size,tintColor,onpress}) => {
    return (
         <TouchableOpacity
         onPress={onpress} 
         style={
             {
                 marginHorizontal:12,
                 marginVertical:10,
                 borderRadius:22,
                 height:46,
                 width:46,
                 backgroundColor:COLORS.primary,
                 justifyContent:'center',
                 alignContent:'center',
                 alignItems:'center',
                 padding:16
            }
        }>
             
        <Image 
        source={icon}
        style={{height:size ,width:size ,tintColor:tintColor}} />
         </TouchableOpacity>
    )
}

export default CircleButton
