import { ActivityIndicator, View } from "react-native";
import styles from "./activity_indicater_style";

export default function ActivityIndicatorExample() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" animating={false} />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}
