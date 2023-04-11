/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
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
import {styles} from './style';
import React, {useState} from 'react';

const App: () => Node = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.Container}>
      <Image
        source={require('./Image/Group443.png')}
        style={{
          width: 190,
          height: 44,
          margin: 20,
          alignSelf: 'center',
        }}></Image>
      <Text style={styles.txtTitleSign}>Creat an account</Text>
      <TextInput
        style={styles.inputEmail}
        placeholder="Name"
        placeholderTextColor="#959595"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputSandi}
        placeholder="Email"
        placeholderTextColor="#959595"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.inputEmail}
        placeholder="Phone"
        placeholderTextColor="#959595"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.inputSandi}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#959595"
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.textLogin}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.ContainerSignUp}>
        <Text style={styles.textDHA}>Already have account?</Text>
        <TouchableOpacity style={styles.btnTextSignup}>
          <Text style={styles.textSignup}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
