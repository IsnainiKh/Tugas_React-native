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
      <View style={styles.BoxLogo}>
        <Image
          source={require('../../Image/Group443.png')}
          style={{
            alignSelf: 'flex-start',
            width: '35',
            position: 'absolute',
          }}></Image>
      </View>
      <Image
        source={require('../../Image/Banner.png')}
        style={{
          alignSelf: 'flex-start',
          width: '100%',
          position: 'absolute',
          top: 35,
        }}></Image>
    </View>
  );
}
