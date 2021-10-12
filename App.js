import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native"; // step 1
import { createStackNavigator } from "@react-navigation/stack"; // step 2

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={{
          // these option will be applied to all screens
          headerTintColor: "white", // font color
          headerStyle: { backgroundColor: "orange" }, // background color
        }}
      >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            // these options will be specific for the Home screen
            title: "Movie Time",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.movie.title })}
        />
        <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.movie.title })} // arrow function that capture the title
        />

        <Stack.Screen name="BigImageView" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
