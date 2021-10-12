import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = (props) => {
  const { navigation, route } = props;
  const movie = route.params.movie;
  // console.log(route);
  return (
    <View style={styles.mainView}>
      <Text style={{ fontSize: 20 }}>
        {movie.title} {movie.release}
      </Text>
      <Text style={{ fontSize: 100 }}> {movie.screenNumber} </Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("BigImageView");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          movie.screenNumber = movie.screenNumber + 1;
          navigation.push("Details_to_Details", { movie: movie }); //forces tha stack navigator to create another instance of the details screen
        }}
      />
      <Button
        title="Go Back Screen"
        onPress={() => {
          // navigation.navigate("Details_to_Details"); //specify a screen name to navigate to
          // navigation.goBack(); // navigating one screen back
          // navigation.pop(); // remove the current screen from the stack and navigate back
          navigation.popToTop(); //  removing all the previous stacked screen and navigating to the first screen
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
