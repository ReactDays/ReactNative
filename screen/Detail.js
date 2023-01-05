import {View, Text, Image} from 'react-native';
import React from 'react';

const images = {
  1: require('../img/attraction/1.png'),
  2: require('../img/attraction/2.jpg'),
  3: require('../img/attraction/3.jpg'),
  4: require('../img/attraction/4.jpg'),
  5: require('../img/attraction/5.jpg'),
  6: require('../img/attraction/6.jpg'),
  7: require('../img/attraction/7.jpg'),
  8: require('../img/attraction/8.jpg'),
  9: require('../img/attraction/9.jpg'),
  10: require('../img/attraction/10.jpg'),
};

const Detail = ({navigation, route}) => {
  return (
    <View style={{backgroundColor: 'black', width: '100%' , height: '100%' , padding: 10 }}>
      <Image
        source={images[route.params.id]}
        style={{width: '100%', height: 333}}
      />
      <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
        {route.params.name}
      </Text>
    </View>
  );
};

export default Detail;
