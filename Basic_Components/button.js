import { Button } from "react-native";

export default function ButtonExample() {
  return (
    <Button
      onPress={() => alert("Button pressed!")}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      disabled={false} // {true}
      touchSoundDisabled={false}
    />
  );
}
