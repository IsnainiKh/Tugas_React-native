import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screen/Login"

const Stack = createNativeStackNavigator();

function AuthNavigation(){
return(
 
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}>

            </Stack.Screen>
        </Stack.Navigator>

)

}
export default AuthNavigation;