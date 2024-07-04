import { View, Text } from "react-native";
import { Colors } from "../constants/Colors";

export default function ViewExample() {
  return (
    <View>
      <Text
        style={{ color: Colors.dark.text, fontFamily: "SpaceMono-Regular" }}
      >
        View
      </Text>
      <View style={{ flexDirection: "row", height: 100 }}>
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text style={{ fontFamily: "SpaceMono-Regular", color: "white" }}>
          Hello World!
        </Text>
      </View>
    </View>
  );
}
