import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Colors } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import ViewExample from "../Basic_Components/view.js";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.text }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{ color: Colors.dark.text, fontFamily: "SpaceMono-Regular" }}
          >
            My App
          </Text>
          <View style={{ height: 10 }}></View>
          <Ionicons name="checkmark-circle" size={32} color="#9BA1A6" />
          <View style={{ height: 10 }}></View>
          <Image
            source={require("../assets/images/icon.png")}
            style={{ width: 150, height: 150 }}
          />
          <View style={{ height: 10 }}></View>
          <FontAwesome.Button
            name="twitter"
            onPress={() => {}}
          ></FontAwesome.Button>
          <View style={{ height: 10 }}></View>
          <TouchableOpacity
            onPress={() => alert("Button pressed!")}
            style={{ padding: 10, backgroundColor: "blue", borderRadius: 12 }}
          >
            <Text style={{ color: "white" }}>Press Me</Text>
          </TouchableOpacity>
          <View style={{ height: 20 }}></View>

          {/* View */}
          <ViewExample />
          {/* View */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
