// React Native NetInfo
// https://aboutreact.com/react-native-netinfo/

// import React in our code
import React, {useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';
import {ProgressView} from "@react-native-community/progress-view";
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const NetInfor = () => {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native NetInfo
          {'\n'}
          To Get NetInfo information
        </Text>
        <Text style={styles.textStyle}>
          
          {netInfo}
        </Text>
        <Button
          title="Get more detailed NetInfo"
          onPress={getNetInfo}
        />
      </View>
      <Text style={{
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 20,}}>Slider</Text>
      <Slider
        style={{width: '100%', height: 40}}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={{
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        paddingVertical: 20,}}>Progres View</Text>
      <ProgressView
          progressTintColor="orange"
          trackTintColor="blue"
          progress={0.7}
/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
});

export default NetInfor;