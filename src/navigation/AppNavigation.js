import React from "react";
import {
  createAppContainer,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { ServerWorker } from "../components/ServerWorker";
import { Platform } from "react-native";

const PostNavigator = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <PostNavigator.Navigator
        initialRouteName="Main"
        defaultNavigationOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? "#303f9f" : "#fff",
          },
          headerTintColor: Platform.OS === "android" ? "#fff" : "#303f9f",
        }}
      >
        <PostNavigator.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Changer" }}
        ></PostNavigator.Screen>
        <PostNavigator.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Results of Search" }}
        ></PostNavigator.Screen>
      </PostNavigator.Navigator>
    </NavigationContainer>
  );
};
