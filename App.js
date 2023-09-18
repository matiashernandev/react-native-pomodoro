import { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  console.log(currentTime);

  return (
    <View
      style={[
        { flex: 1 },
        { paddingTop: Platform.OS === "android" && 30 },
        { backgroundColor: colors[currentTime] },
      ]}
    >
      <Text style={styles.text}>Pomodoro App</Text>
      <Text style={styles.text}>{time}</Text>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { fontSize: 32, fontWeight: "bold" },
});
