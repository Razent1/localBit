import React from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";

export class ServerWorker {
  _proxyUrl = "https://cors-anywhere.herokuapp.com/";
  _apiBase = "https://localbitcoins.net/api";
  _fullLink = _proxyUrl + _apiBase;

  static async getResource(url) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = `https://localbitcoins.net/api${url}`;
    try {
      const res = await fetch(proxyUrl + targetUrl, {
        method: "get",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return await res.json();
    } catch (e) {
      console.log(e);
      // throw new Error("Server does not work");
    }
  }
  static async getCurrency() {
    return await this.getResource("/currencies/");
  }
  static async getCountriesCodes() {
    return await this.getResource("/countrycodes/");
  }
  static async getPaymentMethod(countryCode) {
    return await this.getResource(`/payment_methods/${countryCode}/`);
  }
}
