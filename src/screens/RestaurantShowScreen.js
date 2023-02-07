import { StyleSheet, Image, FlatList } from "react-native";
import { useState, useEffect } from "react";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
  const [result, setResults] = useState(null);
  const restaurantId = navigation.getParam("id");

  const fetchRestaurant = async (id) => {
    const restaurant = await yelp.get(`/businesses/${id}`);
    setResults(restaurant.data);
  };

  useEffect(() => {
    fetchRestaurant(restaurantId);
  }, []);

  if (!result) {
    return null;
  } else {
      return (
        <>
          <FlatList
            data={result.photos}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item }) => {
              return <Image source={{ uri: item }} style={styles.image} />
            }}
          />
        </>
      );
  }
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default RestaurantShowScreen;
