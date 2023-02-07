import { View, StyleSheet, Text, Image } from "react-native";

const RestaurantDetail = ({ image, name, rating, review_count }) => {
  return (
    <View style={styles.containerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.subHeaderStyle}>{name}</Text>
      <Text
        style={styles.textStyle}
      >{`${rating} Stars, ${review_count} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaderStyle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  textStyle: {
    fontSize: 13,
    color: "grey",
  },
  containerStyle: {
    height: 195,
    width: 250,
    display: "flex",
    marginRight: 30,
    marginLeft: 20,
  },
  imageStyle: {
    backgroundColor: "red",
    height: 150,
    borderRadius: 5,
  },
});

export default RestaurantDetail;
