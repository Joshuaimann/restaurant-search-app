import { View, StyleSheet, Text, FlatList, Image } from "react-native";

const RestaurantsList = ({ title, data }) => {
    return (
      
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerStyle}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: `${item.image_url}`,
                }}
              />
              <Text style={styles.subHeaderStyle}>{item.name}</Text>
              <Text
                style={styles.textStyle}
              >{`${item.rating} Stars, ${item.review_count} Reviews`}</Text>
            </View>
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
    marginBottom: 5
  },
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
  },
  imageStyle: {
    backgroundColor: "red",
    height: 150,
  },
});

export default RestaurantsList;
