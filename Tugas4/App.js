import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screen/Splashscreen"
import AuthNavigation from "./src/AuthNavigation";
import Register from "./src/screen/Register";



const Stack = createNativeStackNavigator();

export default function App(){
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