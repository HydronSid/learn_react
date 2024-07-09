import { ImageBackground, View, Text } from "react-native";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
export default function DisplayImageBackground() {
  return (
    <View>
      <ImageBackground
        source={image}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000c0",
          }}
        >
          Inside
        </Text>
      </ImageBackground>
    </View>
  );
}
