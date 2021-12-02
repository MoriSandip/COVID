import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'    
import { COLORS, icons } from '../../../../constants'
import Title from '../../../components/Text/Title'

const FirstPage = () => {
    return (
        <>
        <StatusBar
        backgroundColor={COLORS.primary} />
        <View
        style={style.topContainer}
        >
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:12}}>
        <Title title="Covid-19" size={34} fontWeight={"bold"} color={COLORS.white}></Title>
        <Text>Covid-19</Text>

        </View>
        <View style=
        {{marginTop:32,marginHorizontal:12}}>
            <Title title="Are you feeling sick?" size={24} fontWeight={"bold"} color={COLORS.white}></Title>
           <View style={{margin:4}}></View>
            <Title title="If you feel sick with any of covid-19 symptoms please call or message us immediately for help." size={14} fontWeight={"bold"} color={COLORS.white}></Title>
               </View>

        <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:12}}>
         
         <RoundButtonIcon  title="cafdgl"  color={COLORS.secondary} icon={icons.call} />
         <RoundButtonIcon  title="casfdgl"  color={COLORS.backgroundColor} icon={icons.call}/>
 
        </View>
        <View>
            <Text>dkjfhakdj</Text>
        </View>

        </View>
        </>
    )
}


const style = StyleSheet.create({
    topContainer:{
        backgroundColor:COLORS.primary,
            height:220,
            borderBottomLeftRadius:32,
            borderBottomRightRadius:32,
            width:'100%',
            
    }
})
export default FirstPage
// screenOptions={{
//     headerShown: false
//   }}