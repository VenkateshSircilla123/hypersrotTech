import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Edit from "../edit/Edit";
import Delete from "../delete/Delete";

const Task = ({ task }) => {
  const [options, setOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);

  return (
    <View
      style={{
        borderRadius: 15,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        gap: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{task.title}</Text>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: "blue",
            padding: 5,
            color: "white",
            borderRadius: 3,
          }}
        >
          {task.Priority}
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "justify" }}>{task.description}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>@{task.assignees === "" ? "-" : task.assignees}</Text>
        <Feather
          name="more-vertical"
          size={20}
          color="white"
          style={{ backgroundColor: "blue", padding: 3, borderRadius: 3 }}
          onPress={() => setOptions(!options)}
        />
        <Modal transparent={true} visible={options}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ display: "flex", backgroundColor: "gray" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color="black"
                  onPress={() => setOptions(!options)}
                />
              </View>
              <View
                style={{
                  padding: 40,
                  gap: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 50,
                  }}
                  onPress={() => setEdit(!edit)}
                >
                  Edit
                </Text>
                <Text
                  style={{
                    fontSize: 50,
                  }}
                  onPress={() => setDel(!del)}
                >
                  Delete
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <Edit setEdit={setEdit} edit={edit} task={task} />
        <Delete del={del} setDel={setDel} task={task} />
      </View>
      <View style={styles.c}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Assign</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 60,
    elevation: 3,
    backgroundColor: "blue",
  },
  c: {
    display: "flex",
    width: "30px",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Task;

// taskContainer: {
//   borderRadius: 15,
//   padding: 10,
//   margin: 10,
//   borderWidth: `${currentTaskIndex < noOfFilteredTasks ? "3" : "1"}`,
//   borderColor: `${currentTaskIndex < noOfFilteredTasks ? "green" : "black"}`,
//   gap: 10,
// },
