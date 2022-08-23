import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import GoalItem from "./GoalItem";

export default function GoalList(props) {
  const handleDelete = (goalIndex) => {
    props.setGoals(props.goals.filter((goal, index) => index !== goalIndex));
  };

  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalText}>
        {props.goals.length === 0 ? "No goals yet" : "Your Goals"}
      </Text>
      <FlatList
        data={props.goals}
        renderItem={(goal) => <GoalItem goal={goal} onDelete={handleDelete} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    flex: 5,
  },
  goalText: {
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
