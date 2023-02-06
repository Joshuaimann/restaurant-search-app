import { View, StyleSheet, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  const { searchTerm, changeSearchTerm, onTermSubmit } = props;
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={searchTerm || ""}
        autoComplete="none"
        autoCorrect={false}
        onChangeText={changeSearchTerm}
        placeholder="Search..."
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#DCDCDC",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginVertical: 15,
    marginRight: 20,
    paddingVertical: 3,
    height: 50,
    display: "flex",
    flexDirection: "row",
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
  },
});

export default SearchBar;
