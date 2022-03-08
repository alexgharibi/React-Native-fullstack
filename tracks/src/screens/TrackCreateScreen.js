import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
