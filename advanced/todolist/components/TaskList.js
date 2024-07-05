// components/TaskList.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={styles.taskText}>{task}</Text>
          <Button title="Delete" onPress={() => onDeleteTask(index)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskList;
