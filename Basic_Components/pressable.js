import { Pressable, View, Text } from "react-native";
import { Colors } from "../constants/Colors";
export default function PressableExample() {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("om Press");
        }}
        onPressOut={() => {
          console.log("om Press Out");
        }}
      >
        <Text style={{ fontSize: 20 }}>I'm pressable!</Text>
      </Pressable>
    </View>
  );
}
