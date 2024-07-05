import { FlatList, View } from "react-native";
import styles from "./flatlist_style.js";
import { useState } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, borderColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor, borderColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function FlatListExample() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backColor = item.id == selectedId ? "white" : "black";
    const textColor = item.id == selectedId ? "black" : "white";
    const borderColor = item.id == selectedId ? "black" : "white";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backColor}
        textColor={textColor}
        borderColor={borderColor}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
}
