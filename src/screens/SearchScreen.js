import { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [fetchRestaurants, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  if (!results.length) {
    return null;
  }

  return (
    <>
      <SearchBar
        searchTerm={searchText}
        changeSearchTerm={setSearchText}
        onTermSubmit={() => fetchRestaurants(searchText)}
      />
      {errorMessage.length > 0 ? <Text> {errorMessage} </Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={{ marginVertical: 10 }}></View>
          </>
        ) : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  dividerStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
    marginVertical: 10,
    marginLeft: 20,
  },
});

export default SearchScreen;
