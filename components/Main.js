import { StyleSheet, View, Button, Image } from "react-native";
import React from "react";


import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

export default function Main() {
  const [goals, setGoals] = React.useState([]);
  const [showGoalInput, setShowGoalInput] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/goals.png")} /> */}
      <Button title="Add a Goal" onPress={() => setShowGoalInput(true)} />
      <GoalInput
        setGoals={setGoals}
        setShowGoalInput={setShowGoalInput}
        showGoalInput={showGoalInput}
      />
      <View></View>
      <GoalList goals={goals} setGoals={setGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
