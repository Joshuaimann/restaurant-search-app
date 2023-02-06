import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [fetchRestaurants, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchText}
        changeSearchTerm={setSearchText}
        onTermSubmit={() => fetchRestaurants(searchText)}
      />
      {errorMessage.length > 0 ? <Text> {errorMessage} </Text> : null}
      {filterResultsByPrice("$").length > 0 ? (
        <>
          <RestaurantsList
            title={"Cost Effective"}
            data={filterResultsByPrice("$")}
          />
          <View style={styles.dividerStyle} />
        </>
      ) : null}
      {filterResultsByPrice("$$").length > 0 ? (
        <>
          <RestaurantsList
            title={"Bit Pricier"}
            data={filterResultsByPrice("$$")}
          />
          <View style={styles.dividerStyle} />
        </>
      ) : null}
      {filterResultsByPrice("$$$").length > 0 ? (
        <>
          <RestaurantsList
            title={"Big Spender"}
            data={filterResultsByPrice("$$$")}
          />
          <View style={styles.dividerStyle} />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  dividerStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
    marginVertical: 10,
  },
});

export default SearchScreen;
