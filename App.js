import { useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";

import { Audio } from "expo-av";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/mu_chaos_gem.mp3")
    );
    await sound.playAsync();
  };

  return (
    <View
      style={[
        { flex: 1, paddingHorizontal: 15 },
        { paddingTop: Platform.OS === "android" && 30 },
        { backgroundColor: colors[currentTime] },
      ]}
    >
      <Text style={styles.text}>Pomodoro App</Text>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
      <Timer time={time} />
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { fontSize: 32, fontWeight: "bold" },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
});
