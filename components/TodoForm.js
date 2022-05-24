import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import uuid from "react-native-uuid";

const TodoForm = () => {
  const { storeTodos, getTodos } = useTodo();

  const [todo, setTodo] = useState({
    id: uuid.v4(),
    content: "",
    status: "uncomplete",
  });

  const handleChange = (val) => {
    setTodo({ ...todo, content: val });
  };

  const handleSubmit = () => {
    if (todo.content.length < 5) {
      Alert.alert("Warning", "Todo content must be longer than 4 character", [
        { text: "Okey Get It" },
      ]);
      return;
    }
    storeTodos(todo, () => {
      getTodos();
      setTodo({
        id: uuid.v4(),
        content: "",
        status: "uncomplete",
      });
    });
  };

  return (
    <View style={styles.todoForm}>
      <TextInput
        style={styles.todoFormInput}
        placeholder="Write your todo"
        autoCorrect={false}
        autoCompleteType="off"
        defaultValue={todo.content}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  todoForm: {
    padding: 20,
  },
  todoFormInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    borderStyle: "dashed",
  },
});
