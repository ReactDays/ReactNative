import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
    const onPressItem = (id , name) => {
        navigation.navigate('Detail' , {id: id , name: name}) // change navigation
        // navigate no navigation is function
      }
  return (
    <ScrollView style={{padding: 10, backgroundColor: 'black'}}>
      <View>
        <Text style={{fontSize: 30, color: 'white'}}>Asean Countries</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(1, 'VIETNAM')}>
          <Image
            source={require('../img/attraction/1.png')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          VIETNAM
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Vietnam is launching a campaign named “Live fully in Vietnam” as it
          welcomes international tourists back into the country.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(2, 'MYANMAR')}>
          <Image
            source={require('../img/attraction/2.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          MYANMAR
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Dominating Monywas skyline, the 400-foot-tall Aung Sakkya pagoda is
          surrounded by more than a thousand smaller pagodas that contain scores
          of Buddha images.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(3, 'LAOS')}>
          <Image
            source={require('../img/attraction/3.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>LAOS</Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          In a bid to promote tourism, the beautiful Southeast Asian nation Laos
          has announced to remove all COVID-19 entry restrictions for fully
          vaxxed tourists from Monday.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(4, 'THAILAND')}>
          <Image
            source={require('../img/attraction/4.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          THAILAND
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Bangkok can be a hot, hectic, and overwhelming city. It can also be a
          delight to explore, with golden temples.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(5, 'CAMBODIA')}>
          <Image
            source={require('../img/attraction/5.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          CAMBODIA
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Cambodia brings you to the wonders of Angkor, Phnom Penh, the heritage
          town of Battambang, the pristine natural beauty of the Cardamom
          Mountains.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(6, 'PHILIPPINES')}>
          <Image
            source={require('../img/attraction/6.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          PHILIPPINES
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          An ambitious concept has been thoughtfully designed to cease the
          destruction in the Philippine Sea by Vincent Callebaut Architectures.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(7, 'BRUNEI')}>
          <Image
            source={require('../img/attraction/7.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          BRUNEI
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Brunei Darussalam Brunei Stolicą jest Bandar Seri Begawan Energy
          Brunei ma powierzchnię tylko 5765 km2 co czyni go krajem 54 razy
          mniejszym od Polski.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(8, 'MALAYSIA')}>
          <Image
            source={require('../img/attraction/8.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          MALAYSIA
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Kuala Lumpur has a cityscape filled with gleaming skyscrapers and
          colonial architecture.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(9, 'INDONESIA')}>
          <Image
            source={require('../img/attraction/9.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          INDONESIA
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          Indonesia is known as the largest archipelago country in the world,
          with an area of 1,904,569 km2 and the number of islands at least
          17,508.
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(10, 'SINGAPORE')}>
          <Image
            source={require('../img/attraction/10.jpg')}
            style={{width: '100%', height: 333}}
          />
        </Pressable>
        <Text style={{fontSize: 20, marginTop: 10, color: 'white'}}>
          SINGAPORE
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginVertical: 10}}>
          leading global professional services company, providing a broad range
          of services and solutions in strategy, consulting, digital,
          technology, and operations.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
