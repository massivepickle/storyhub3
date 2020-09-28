import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import WriteScreen from './screens/write';
import Search from './screens/search';

export default class App extends React.Component {
  render(){
    return (
    <View style={styles.container}>
      <AppContainer />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TabNavigator = createBottomTabNavigator({
  Write: {
    screen: WriteScreen
  },
  Search: {
    screen: Search
  }
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'Write'){
        return (
          <Image source={require('./assets/book.png')} style={{
            width: 40,
            height: 40
          }} />
        )
      }
      else if(routeName === 'Search'){
        return (
          <Image source={require('./assets/searchingbook.png')} style={{
            width: 40,
            height: 40
          }} />
        )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator);