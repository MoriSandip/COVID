import React ,{useEffect}from 'react'
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import images from '../../../constants/images'  
import Title from '../../components/Text/Title'
 import SvgUri from 'react-native-svg-uri';
import ImageView from '../../components/Image/ImageView'
import { COLORS } from '../../../constants';
const SplashScreen = ({navigation}) => {
    useEffect(() => { 
        setTimeout(() => navigation.navigate('GetStartedScreen') , 3000);
      })
    return (
        <>
           <StatusBar 
            backgroundColor={COLORS.white} />
           <View style={style.container}> 
           <View>
               <ImageView
               icon={images.appLogo}
               />  
                <SvgUri
                 source={require('../../../assets/svg/ic_appName.svg')}
                />  
           </View>
          
           <View style={style.bottomContainer}>
               <Title title={"Made with - COVID"} color={COLORS.black} size={24} fontWeight="bold" /> 
               <Title title={"app version - D.0.0.1"} color={COLORS.black} size={14}   /> 
           </View>

           </View>

        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white
    },
    bottomContainer:{
        height:120,width:'100%',position:'absolute',bottom:0,justifyContent:'center',alignItems:'center'
    }
}
    

)
export default SplashScreen
