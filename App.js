import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Image, 
  ScrollView, Animated, View, 
} from 'react-native'

import Constants from 'expo-constants'


export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View 
        style={[styles.header,
        {
          height: scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [140, 20, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
          })
        }
        ]}
      >
        <Image
          source={require('./assets/cam.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain'
        />
        <Animated.Image
          source={require('./assets/logo.png')}
          style={{ 
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [240, 90],
              extrapolate: 'clamp'
            }), 
            height: 90 
          }}
          resizeMode='contain'
        />
        <Image
          source={require('./assets/send.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain'
        />
      </Animated.View>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
        { useNativeDriver: false })}
      >
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
