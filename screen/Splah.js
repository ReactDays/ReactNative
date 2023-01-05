import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

const Splah = ({navigation}) => {
  
  const onPress = () => {
    navigation.navigate('Home') // change navigation
  }


  return (
    
    <Pressable onPress={onPress}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <View
          style={{
            flex: 0.95,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../img/React_Hero.png')}
            style={{width: 250, height: 250}}
          />
        </View>
        <View
          style={{
            flex: 0.05,
          }}>
          <Text style={{color: 'white'}}>React.FullTime</Text>
        </View>
      </View>
      </Pressable>
  );
};

export default Splah;
