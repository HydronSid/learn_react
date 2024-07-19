import { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TextExample() {
  const [stateId, setStateId] = useState();

  const [text, onChangeText] = useState("");

  useEffect(() => {
    setStateId("1");
    //Runs on every render
  }, []);

  const onPressState = (value) => () => {
    setStateId(value);
  };

  return (
    <ScrollView scrollEnabled={false}>
      <Text> {stateId}</Text>

      <Button
        onPress={onPressState("1")}
        title="SetId"
        color="#841584"
        accessibilityLabel=""
        disabled={false} // {true}
        touchSoundDisabled={false}
        textAlign="right"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        autoCapitalize="words"
        // editable={false}
        secureTextEntry={true}
        selectTextOnFocus={true}
        selectionColor="841584"
      />

      <Button
        onPress={() => console.log(text)}
        title="SetId"
        color="#841584"
        accessibilityLabel=""
        disabled={false} // {true}
        touchSoundDisabled={false}
      />
    </ScrollView>
  );
}
