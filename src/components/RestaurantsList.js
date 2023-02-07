import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantsList = ({ title, data, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {id: item.id})}>
              <RestaurantDetail
                name={item.name}
                image={item.image_url}
                review_count={item.review_count}
                rating={item.rating}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 20,
  },
});

export default withNavigation(RestaurantsList);
