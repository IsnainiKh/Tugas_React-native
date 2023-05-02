import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SignUp from './View/SignUp';
// import SignIn from './View/SignIn';
import DatePicker from './DatePicker';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import NetInfor from './NetInfor';
import Geolocation from './geolocation';
import ClipBoard from './ClipBoard';
// import Home from './View/Home/Home';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconsName =
          label === 'DatePicker' ? 'home' : 'heart';

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Ionicons name={iconsName} size={20} color={'red'} />
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        
      >
        <Tab.Screen
          name="DatePicker"
          component={DatePicker}
          options={{headerShown: false}}
        />
         <Tab.Screen
          name="NetInfor"
          component={NetInfor}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Progres Indicator"
          component={Geolocation}
          options={{headerShown: false}}
        />
         <Tab.Screen
          name="Clipboard"
          component={ClipBoard}
          options={{headerShown: false}}
        />

       
      </Tab.Navigator>
    </NavigationContainer>
  );
}