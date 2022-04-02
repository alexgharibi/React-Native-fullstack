import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return null;
  }

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="red"
        fillColor="yellow"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
