import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/app-logo.png'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <Text>HomeScreen</Text> */}
      <View
        style={{
          // borderStyle: 'solid',
          // borderWidth: 1,
          // borderColor: 'rgb(0, 0, 0)',
          // marginTop: 30,
          marginLeft: 15
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            // borderStyle: 'solid',
            // borderWidth: 1,
            // borderColor: 'rgb(0, 0, 0)'
          }}
          source={require('../../assets/app-logo.png')}
        />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen