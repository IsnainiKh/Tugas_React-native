import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screen/Splashscreen";
import AuthNavigation from "./AuthNavigation";
import Register from "./screen/Register";



const Stack = createNativeStackNavigator();

export default function Routing(){
return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name='AuthNavigation' component={AuthNavigation}/>
            <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
    </NavigationContainer>
)

}