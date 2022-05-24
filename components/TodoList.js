import { StyleSheet, View, Text, FlatList } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <View style={styles.todoList}>
      <Text style={styles.todoListHeading}>All todos ({todos.length})</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todoListHeading: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
