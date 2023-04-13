/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import {styles} from '../style/style';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ResetPassword() {
  const navigation = useNavigation();
  const [password, setEmail] = useState('');
  return (
    <View style={styles.Container}>
      <Image
        source={require('../Image/Group443.png')}
        style={{
          width: 190,
          height: 44,
          margin: 20,
          alignSelf: 'center',
        }}></Image>
      <Text style={styles.txtTitleSign}>Reset Your Password</Text>
      <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        placeholderTextColor="#959595"
        onChangeText={text => setEmail(text)}
      />

      <TouchableOpacity style={styles.btnResetPassword}>
        <Text style={styles.textResetPassword}>Request Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
