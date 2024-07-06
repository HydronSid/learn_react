import { StyleSheet, StatusBar } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "SpaceMono-Regular",
  },
});
