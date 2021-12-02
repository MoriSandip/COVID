import React from 'react'
import { View, Text } from 'react-native'

const Title = ({title,color,size,fontWeight,margin}) => {
    return (
        <View>
            <Text style={{color:color,fontSize:size,fontWeight:fontWeight}}>{title}</Text>
        </View>
    )
}
export default Title
