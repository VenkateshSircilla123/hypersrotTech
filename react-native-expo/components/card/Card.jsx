import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Task from "../task/Task";
import { selectTask } from "../../features/task/tasks";
import { useSelector } from "react-redux";

const Card = ({ status, color }) => {
  const tasks = useSelector(selectTask);
  const [filteredStatus, setFilteredStatus] = useState([]);
  useEffect(() => {
    setFilteredStatus(tasks.filter((task) => task?.status === status));
  }, [tasks]);
  return (
    <View
      style={{
        width: 300,
        borderRadius: 20,
        height: 600,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: color,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 8,
        }}
      >
        <Text>{status}</Text>
      </View>
      <ScrollView>
        {filteredStatus.length != 0 && (
          <ScrollView>
            <View className="allTasks">
              {filteredStatus.map((task) => (
                <Task task={task} key={task.id} />
              ))}
            </View>
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default Card;
