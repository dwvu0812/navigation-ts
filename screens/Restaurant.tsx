import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../App';
import RestaurantCard from '../components/RestaurantCard';
import TopBackNavigation from '../components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>

const RestaurantScreen: React.FC<Props> = ({route}: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{route.params?.name}</Text>

      <Text>Related restaurants</Text>
      <RestaurantCard
        name="Sushi 1"
        onPress={() => {
          
        }}
      />
      <RestaurantCard
        name="Sushi 2"
        onPress={() => {
          
        }}
      />
      <RestaurantCard
        name="Sushi 3"
        onPress={() => {
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default RestaurantScreen;