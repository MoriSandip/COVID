// import React from 'react';
// import { SafeAreaView,View,StyleSheet,Image,Text, TouchableOpacity,} from 'react-native';
// import {DrawerContentScrollView} from '@react-navigation/drawer';
// import SvgUri from 'react-native-svg-uri'; 
// import { COLORS, images, svg } from '../../../../constants';

// const CustomSidebarMenu = (props) => {
//   const BASE_PATH ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
//   const proileImage = 'react_logo.png';

//   return (
//     <SafeAreaView style={{flex: 1 ,backgroundColor:COLORS.primary}}>
//       {/*Top Large Image */}
//       <View style={{borderColor:'#2F2E41',borderBottomWidth:1,borderTopEndRadius:1}}>
//       <Image
//         source={images.appWithName}
//         style={styles.sideMenuProfileIcon}
//       />
     
//       </View>
     
      
//       <DrawerContentScrollView {...props}>
 
//          <View style={{marginTop:34}}>
//          </View>
            
//         <TouchableOpacity style={styles.customItem}>      
        
//       <SvgUri
//        source={svg.Home}
//       />
     
//           <Text style={styles.text}
//             onPress={() => {
//                 {  }
//             }}>
//             Home
//           </Text> 
//         </TouchableOpacity>

//           <TouchableOpacity style={styles.customItem}>      
//           <SvgUri
//           source={svg.Statistics}
//           /> 
//           <Text style={styles.text}
//             onPress={() => {
//                 { }
//             }}>
//           Statistics
//           </Text> 
//         </TouchableOpacity> 

//           <TouchableOpacity style={styles.customItem}>      
//           <SvgUri
//        source={svg.Symptoms}
//       />
//           <Text style={styles.text}
//             onPress={() => {
//                 { }
//             }}>
//            Symptoms
//           </Text> 
//         </TouchableOpacity>
       
        
//         <TouchableOpacity style={styles.customItem}>      
//         <SvgUri
//        source={svg.article}
//       />
//           <Text style={styles.text}
//             onPress={() => {
//                 { }
//             }}>
//             Article
//           </Text> 
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.customItem}>      
//         <SvgUri
//        source={svg.help}
//       />
//           <Text style={styles.text}
//             onPress={() => {
//                 { }
//             }}>
//              Help
//           </Text> 
//         </TouchableOpacity>


       
//       </DrawerContentScrollView>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: 'center',
//           color: COLORS.white,
//           marginBottom:32
//         }}>
//         www.covid.com
//       </Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sideMenuProfileIcon: {
//     resizeMode: 'center',
//     width: 150,
//     height: 150,
//     margin:8,
//     alignSelf: 'center',
  
//   },
//   text:{
//       color:COLORS.white,
//       fontSize:20,
//       marginHorizontal:12

//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//     marginHorizontal:6
//   },
//   customItem: {
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
     
    
//   },
  
// });

// export default CustomSidebarMenu;
// //https://github.com/MoriSandip/ReactNative-COVID.git
// //https://github.com/MoriSandip/ReactNative-COVID
import React from 'react';
import { SafeAreaView,View,StyleSheet,Image,Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import SvgUri from 'react-native-svg-uri';  
import { images } from '../../../../constants';

const CustomSidebarMenu = (props) => {
  const BASE_PATH ='https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1 ,backgroundColor:"#fafafa"}}>
      {/*Top Large Image */}
      <View style={{borderColor:'#2F2E41',borderBottomWidth:1,borderTopEndRadius:1}}>
      <Image
        source={images.appLogo}
        style={styles.sideMenuProfileIcon}
      />
     
      </View>
     
      
      <DrawerContentScrollView {...props}>
 
         <View style={{marginTop:34}}>
         </View>
            
        <TouchableOpacity style={styles.customItem}>      
        
      <SvgUri
       source={svg.Home}
      />
     
          <Text style={styles.text}
            onPress={() => {
                {  }
            }}>
            Home
          </Text> 
        </TouchableOpacity>

          <TouchableOpacity style={styles.customItem}>      
          <SvgUri
          source={svg.Statistics}
          /> 
          <Text style={styles.text}
            onPress={() => {
                { }
            }}>
          Statistics
          </Text> 
        </TouchableOpacity> 

          <TouchableOpacity style={styles.customItem}>      
          <SvgUri
       source={svg.Symptoms}
      />
          <Text style={styles.text}
            onPress={() => {
                { }
            }}>
           Symptoms
          </Text> 
        </TouchableOpacity>
       
        
        <TouchableOpacity style={styles.customItem}>      
        <SvgUri
       source={svg.article}
      />
          <Text style={styles.text}
            onPress={() => {
                { }
            }}>
            Article
          </Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.customItem}>      
        <SvgUri
       source={svg.help}
      />
          <Text style={styles.text}
            onPress={() => {
                { }
            }}>
             Help
          </Text> 
        </TouchableOpacity>


       
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color:"#000",
          marginBottom:32
        }}>
        www.covid.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    margin:8,
    alignSelf: 'center',
  
  },
  text:{
      color:"#000",
      fontSize:20,
      marginHorizontal:12

  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal:6
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
     
    
  },
  
});

export default CustomSidebarMenu;
//https://github.com/MoriSandip/ReactNative-COVID.git
//https://github.com/MoriSandip/ReactNative-COVID