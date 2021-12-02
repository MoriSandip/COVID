import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/Splash/SplashScreen";
import GetStartedScreen from "./src/screens/GetStartedScreen/GetStartedScreen";
import OnBoarding from "./src/screens/OnBoarding/OnBoarding";
import Dashboard from "./src/screens/DashBoard/Dashboard";
import FirstPage from "./src/screens/DashBoard/DrawerMenu/FirstPage";
import SecondPage from "./src/screens/DashBoard/DrawerMenu/SecondPage";
 

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SplashScreen'}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                 <Stack.Screen
                    name="GetStartedScreen"
                    component={GetStartedScreen}
                />
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />
                 {/* <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                />
                <Stack.Screen
                    name="FirstPage"
                    component={FirstPage}
                />
                <Stack.Screen
                    name="SecondPage"
                    component={SecondPage}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App