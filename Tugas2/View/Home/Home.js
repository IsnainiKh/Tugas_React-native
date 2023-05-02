/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as react from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  onChangeText,
  text,
  Button,
  Image,
  Alert,
  Touchable,
  TouchableOpacity,
  Modal,
  width,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../style/style';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../../Image/Banner.png')}
        style={{
          width: '100%',
          top: 0,
          position: 'absolute',
        }}></Image>
     

      <View style={styles.ContainerBoxMenu1}>
      <Image
        source={require('../../Image/ic_ferry_domestic.png')}
        style={{
          alignSelf:'center'
        }}></Image>
        <Image
        source={require('../../Image/ic_ferry_domestic.png')}
        style={{
         
        }}></Image>
      </View>
    </View>
  );
}
