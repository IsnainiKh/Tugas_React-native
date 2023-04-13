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
import {styles} from '../style/style';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      <Text style={styles.txtTitleSign}>Please sign to continue</Text>
      <TextInput
        style={styles.inputEmail}
        placeholder="Username"
        placeholderTextColor="#959595"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.inputSandi}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#959595"
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.textLogin}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnForgotPw}>
        <Text style={styles.textBtnForgotPw}>Forgot password</Text>
      </TouchableOpacity>

      <View style={styles.rowLoginWith}>
        <View style={styles.LineView}></View>
        <Text style={styles.txtLoginWith}>Login with</Text>
        <View style={styles.LineView}></View>
      </View>

      <View style={styles.ContainerimageRow}>
        <Image
          source={require('../Image/Image6.png')}
          style={{
            width: 55,
            height: 55,
            marginHorizontal: 20,
          }}></Image>

        <Image
          source={require('../Image/Group493.png')}
          style={{
            width: 55,
            height: 55,
            marginHorizontal: 20,
            marginBottom: 20,
          }}></Image>
      </View>
      <Text style={styles.textVersion}>App Version 2.8.3</Text>

      <View style={styles.ContainerSignUp}>
        <Text style={styles.textDHA}>Don't have account?</Text>
        <TouchableOpacity
          style={styles.btnTextSignup}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textSignup}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
