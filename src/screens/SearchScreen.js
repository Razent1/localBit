import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const SearchScreen = ({}) => {
  return (
    <View style={styles.wrapper}>
      {/* <FlatList data={} keyExtractor={} renderItem = {() => {return <View><Text>hello</Text></View>}}/> */}
    </View>
  );
};

SearchScreen.navigationOption = {
  headerTitle: "Search Results",
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
