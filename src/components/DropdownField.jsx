import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    TextInput,
  } from "react-native";
  import { Dropdown } from "../components/Dropdown";

export const DropdownField = ({}) => {
    return (
        <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputSearch}
            onChangeText={(text) => setValue(text)}
            keyboardType = "numeric"
            placeholder="Amount"
            value={value}
          />
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 40,
              zIndex: 3,
            }}
          >
            <Dropdown
              placeholder="Currency"
              data={currency.data.currencies}
              containerStyle={{ height: 50, width: 300 }}
              countryCode={country}
              onChangeItem={(item) => setCountryCurr(item)}
              zIndex={30}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 40,
              zIndex: 2,
            }}
          >
            <Dropdown
              placeholder="Country"
              data={codes.data.cc_list}
              containerStyle={{ height: 50, width: 300 }}
              onChangeItem={(item) => {
                setPaymentDownload(false);
                setCountry(item);
              }} //проверить завтра
              zIndex={20}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 40,
              zIndex: 1,
            }}
          >
            {paymentDownload ? (
              <Dropdown
                placeholder="Payment method"
                data={paymentMethods.data.methods}
                containerStyle={{ height: 50, width: 300 }}
                zIndex={10}
              />
            ) : (
              <Text>g</Text> // заменить на прелоадер
            )}
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Search" onPress={search} />
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