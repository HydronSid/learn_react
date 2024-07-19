import React from "react";
import { useState, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import ViewExample from "../Basic_Components/view.js";
import ActivityIndicatorExample from "../Basic_Components/ActivityIndicator/activity_indicator.js";
import ButtonExample from "../Basic_Components/button.js";
import FlatListExample from "../Basic_Components/Flatlist/flatlist.js";
import DisplayImage from "../Basic_Components/image.js";
import DisplayImageBackground from "../Basic_Components/image_background.js";
import ModalExample from "../Basic_Components/Modal/modal.js";
import PressableExample from "../Basic_Components/pressable.js";
import SectionListExample from "../Basic_Components/SectionList/section_list.js";
import SwitchExapmle from "../Basic_Components/switch.js";
import TextExample from "../Basic_Components/text_example.js";

export default function Index() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Siddhant"
            // progressBackgroundColor={Colors.light}
          />
        }
        showsVerticalScrollIndicator={true}
        fadingEdgeLength={25}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ color: "black", fontFamily: "SpaceMono-Regular" }}>
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
          {/* View */}
          <ViewExample />
          {/* View */}
          <ActivityIndicatorExample />
          <ButtonExample />
          <FlatListExample />
          <DisplayImage />
          <DisplayImageBackground />
          <ModalExample />
          <PressableExample />
          <SectionListExample />
          <SwitchExapmle />
          <TextExample />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
