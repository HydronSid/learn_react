import { View, Image } from "react-native";

export default function DisplayImage() {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image
        style={{ height: 150, width: 150 }}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
    </View>
  );
}
