import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Image, 
  ScrollView, Animated, Text, View, 
  Dimensions 
} from 'react-native'

import Constants from 'expo-constants'


export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/cam.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain'
        />
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 120, height: 40 }}
          resizeMode='contain'
        />
        <Image
          source={require('./assets/send.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain'
        />
      </View>

      <ScrollView>
        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>

        <View style={styles.box}></View>
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
  },
  header: {
    backgroundColor: '#101010',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  box: {
    height: 300,
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5
  }
});
