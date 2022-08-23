import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem} key={props.goal.index}>
      <Pressable
        android_ripple={{ color: "#ccc", borderless: true }}
        onPress={() => props.onDelete(props.goal.index)}
      >
        <Text style={styles.goalText}>{props.goal.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: "#a47cd9",
  },
  goalText: {
    padding: 8,
    paddingHorizontal: 16,
    color: "white",
    fontSize: 18,
  },
});
