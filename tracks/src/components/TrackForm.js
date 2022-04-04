import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const [saveTrack] = useSaveTrack();
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations },
  } = useContext(LocationContext);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Button title="Save Recording" onPress={saveTrack} />
      ) : null}
    </>
  );
};

export default TrackForm;
