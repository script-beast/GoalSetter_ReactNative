import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function GoalInput(props) {
  const [text, setText] = React.useState("");

  const closeModal = () => {
    setText("");
    props.setShowGoalInput(false);
  };

  const addGoal = () => {
    if (!text) return;
    props.setGoals((currentGoals) => [...currentGoals, text]);
    closeModal();
  };

  return (
    <Modal style visible={props.showGoalInput}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Enter Goals"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
  },
});
