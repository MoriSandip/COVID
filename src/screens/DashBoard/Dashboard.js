import React from 'react' 
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstPage from './DrawerMenu/FirstPage'; 
import CustomSidebarMenu from './DrawerMenu/CustomSidebarMenu'; 
import SvgUri from 'react-native-svg-uri';
import { COLORS, icons, svg } from '../../../constants';
 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={toggleDrawer}>
          {/*Donute Button Image */}
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
            }}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
         
           
        </TouchableOpacity>
      </View>
    );
  };

function firstScreenStack({navigation}) {
    return (
      <Stack.Navigator
    screenOptions={{
    headerShown: false    
    }}
      
       initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}  
          options={{
          title: 'First Page', //Set Header Title
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={icons.camera} style={{tintColor:'#000'}} size={30} />
            </TouchableOpacity>
          ),
          
        }}
        />
      </Stack.Navigator>
    );
  }
  
const Dashboard = ({navigation}) => {
    return (   
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: COLORS.primary,
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
         component={firstScreenStack}
          options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          
          headerRight: () => (
            <TouchableOpacity  style={{padding:10,tintColor:COLORS.white,marginHorizontal:12}} onPress={() =>  {}}>
            <SvgUri
            source={svg.ic_notification}/>
            </TouchableOpacity>
          ),
        }}
        />  
        
      </Drawer.Navigator>
   
    )
}

export default Dashboard
