import React from 'react'
import { View, Text, Image , } from 'react-native'
//resizeMode: 'contain',
export default ImageView= ({icon,height,width,tintColor,resizeMode}) => {
    return (
        <View>
            <Image  
                resizeMode={resizeMode}
                source={icon}
               // style={{height:height,width:width,tintColor:tintColor}}      
            />
        </View>
    )
}


