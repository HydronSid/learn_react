import { View, Text } from "react-native";
import { Colors } from "../constants/Colors";

export default function ViewExample() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text
        style={{
          color: "black",
          fontFamily: "SpaceMono-Regular",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        View
      </Text>
      <View style={{ flexDirection: "row", height: 100 }}>
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text
          style={{
            fontFamily: "SpaceMono-Regular",
            color: "black",
            fontSize: 18,
          }}
        >
          Hello World!
        </Text>
      </View>
    </View>
  );
}
