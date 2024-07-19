import { View, TouchableOpacity } from "react-native";

export default function TouchableExpample() {
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => {}}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
