import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  TextInput,
} from "react-native";

export const DownloadingServer = ({onChangeText, value}) => {
    return (
        <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputSearch}
            onChangeText={onChangeText}
            placeholder="Search"
            value={value}
          />
          <View style={styles.pickers}>
            <Text>Getting data from service...</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    button: {
      alignSelf: "center",
      justifyContent: "center",
    },
    inputSearch: {
      alignSelf: "center",
      width: "80%",
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderBottomColor: "#3949ab",
      height: 40,
    },
    pickers: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 40,
    },
    centralPicker: {
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 40,
    },
  });