import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import TopDrawerNavigation from '../components/TopDrawerNavigation';



const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
            // navigation.push('Restaurant', {name: 'Sushi restaurant'});
           
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
          
          }}
        />
        <RestaurantCard
          name="Fine dining restaurant"
          onPress={() => {
           
          }}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={() => {
           
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={() => {
            
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;