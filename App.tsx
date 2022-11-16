import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from './screens/Explore';
import RestaurantsScreen from './screens/Restaurants';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurant';

export type RootStackParams = {
  Explore,
  Restaurants,
  Profile,
  Restaurant: {
    name: string;
  }
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name="Explore" component={ExploreScreen}/>
        <RootStack.Screen name="Restaurants" component={RestaurantsScreen}/>
        <RootStack.Screen name="Profile" component={ProfileScreen}/>
        <RootStack.Screen name="Restaurant" component={RestaurantScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
});

export default App;
