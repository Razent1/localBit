import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  TextInput,
} from "react-native";
import { Dropdown } from "../components/Dropdown";
import { ServerWorker } from "../components/ServerWorker";
import DropDownPicker from "react-native-dropdown-picker";
import { DropdownField } from "../components/DropdownField";
import { DownloadingServer } from "../components/DownloadingServer";

export const MainScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState(null);
  const [codes, setCodes] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [loading, isLoaded] = useState(false);
  const [country, setCountry] = useState(null);
  const [paymentDownload, setPaymentDownload] = useState(false);
  const [countryCurr, setCountryCurr] = useState(null);

  useEffect(() => {
    getServerInfo(country);
  }, [country]);

  const search = () => {
    console.log(country);
    console.log(paymentMethods);
  };
  const getServerInfo = async (country) => {
    const curr = await ServerWorker.getCurrency();
    const codes = await ServerWorker.getCountriesCodes();
    setCurrency(curr);
    setCodes(codes);
    if (country !== null) {
      const paymentMethod = await ServerWorker.getPaymentMethod(country.value);
      setPaymentMethods(paymentMethod);
      setPaymentDownload(true);
    }
    isLoaded(true);
  };
  if (loading) {
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
    );
  } else {
    return (
      // <DownloadingServer
      // onChangeText = {(text) => setValue(text)}
      // value = {value}/> // завтра посмотреть на работоспособность
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputSearch}
            onChangeText={(text) => setValue(text)}
            placeholder="Search"
            value={value}
          />
          <View style={styles.pickers}>
            <Text>Getting data from service...</Text>
          </View>
        </View>
      </View>
    );
  }
};

MainScreen.navigationOptions = {
  headerTitle: "Changer",
};

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
