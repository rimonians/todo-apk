import { StyleSheet, View, Text, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import useTodo from "../hooks/useTodo";

const TodoItem = ({ item }) => {
  const { updateTodo, deleteTodo, getTodos } = useTodo();

  const handleUpdate = (id) => {
    updateTodo(id, () => {
      getTodos();
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id, () => {
      getTodos();
    });
  };
  return (
    <View
      style={[
        styles.todoItem,
        item.status === "complete" && styles.todoItemComplete,
      ]}
    >
      <View style={styles.itemLeft}>
        {item.status === "uncomplete" ? (
          <MaterialIcons
            style={styles.itemLeftIcon}
            name="radio-button-unchecked"
            onPress={() => handleUpdate(item.id)}
          />
        ) : (
          <MaterialIcons
            style={styles.itemLeftIcon}
            name="check-circle-outline"
            onPress={() => handleUpdate(item.id)}
          />
        )}
        <Text
          style={[
            styles.itemLeftContent,
            item.status === "complete" && styles.itemLeftContentComplete,
          ]}
        >
          {item.content}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <MaterialIcons
          style={styles.itemRightIcon}
          name="delete-forever"
          onPress={() => handleDelete(item.id)}
        />
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#3908bf",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoItemComplete: {
    backgroundColor: "#7245ed",
  },
  itemLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemLeftIcon: {
    color: "#fff",
    fontSize: 24,
    marginRight: 10,
  },
  itemLeftContent: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  itemLeftContentComplete: {
    textDecorationLine: "line-through",
  },
  itemRight: {
    flexShrink: 1,
    marginLeft: 10,
  },
  itemRightIcon: {
    color: "#fff",
    fontSize: 24,
  },
});
