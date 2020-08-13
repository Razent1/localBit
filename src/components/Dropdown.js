import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

export const Dropdown = ({ placeholder, data, containerStyle, onChangeItem, countryCode}) => {
  const codeConverter = (codes) => {
    let res = [];
    const { getName } = require("country-list");
    codes.map((code) => {
      res.push({
        label: getName(code),
        value: code,
      });
    });
    return res;
  };

  const fillArray = (data) => {
    let res = [];
    if (placeholder === "Currency") {
      for (let currency in data) {
        res.push({ label: currency, value: data[currency].name });
      }
      return res;
    } else if (placeholder === "Country" ) {
      res = codeConverter(data);
      return res;
    } else if (placeholder === "Payment method") {
      // console.log(data);
      for (let method in data) {
        res.push({label: data[method].name, value: data[method].currency})
      }
      return res;
    }
    return "Not Found";
  };

  return (
    <DropDownPicker
      items={fillArray(data)}
      placeholder={placeholder}
      containerStyle={containerStyle}
      defaultIndex={0}
      onChangeItem={onChangeItem}
    />
  );
};
