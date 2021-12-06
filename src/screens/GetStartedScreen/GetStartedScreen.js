import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native' 
import { COLORS, icons, images } from '../../../constants'
import CircleButton from '../../components/Button/CircleButton' 
import Title from '../../components/Text/Title'

const GetStartedScreen = ({navigation}) => {   
    const getStarted=() =>{
        console.log("hy 1")
        navigation.navigate('OnBoarding')
    }
    return (
        <>
        <StatusBar
        backgroundColor="#CFE3FC"/>
        <View style={{flex:1,backgroundColor:"#CFE3FC"}}>
            <View style={{width:'100%'}}>
            <Image 
             source={images.background}
             />
            </View>
            <View style={style.container}>
            <View style={{marginHorizontal:22,marginTop:24}}>
            <Title
            title='Be aware' size={32} fontWeight={"600"} color={COLORS.black} />
            <Title
            title='Stay healthy' size={32} fontWeight={"600"} color={COLORS.black} />
            <View style={{marginVertical:10}}>
            <Title 
            title="Welcome to COVID-19 information portal."   />
            </View>
            <View style={{ width:'100%', marginVertical:62}}> 
            <View
             style={style.rowContainer}>
            <Title title="GET STARTED" fontWeight={"900"} size={18}> </Title> 
            <CircleButton icon={icons.right_arrow} size={18} tintColor={COLORS.white} onpress={getStarted} /></View>
            </View>           
            </View>        
            </View>
           
        </View>

        </>
    )
}
const style = StyleSheet.create({
    container:{
    backgroundColor:'#fff',
    height:210,
    width:'100%',
    borderTopEndRadius:26,
    borderTopStartRadius:26,
    position:'absolute',
    bottom:0
    },
    rowContainer:{
        flexDirection:'row'
        ,alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:0,
        bottom:0 
    }
})
export default GetStartedScreen
