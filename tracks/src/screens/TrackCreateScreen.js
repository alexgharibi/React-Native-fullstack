import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../../../track-server/src/hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation((location) => {
    addLocation(location);
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
