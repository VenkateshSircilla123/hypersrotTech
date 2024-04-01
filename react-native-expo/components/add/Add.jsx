import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Dropdown from "../filters/Dropdown";
import { addTask } from "../../features/task/tasks";
import { useDispatch } from "react-redux";
const Add = ({ add, setAdd }) => {
  const [task, setTask] = useState([]);
  const [priority, setPriority] = useState("P0");
  const dispatch = useDispatch();

  useEffect(() => {
    setTask({
      ...task,
      id: Date.now(),
      Priority: priority,
      status: "Pending",
    });
  }, [priority]);
  const handleAdd = () => {
    dispatch(addTask(task));
    setAdd(!add);
  };
  return (
    <Modal transparent={true} visible={add}>
      <View
        style={{
          flex: 1,
          backgroundColor: "gray",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 40, margin: 50 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Create a Task</Text>
            <AntDesign
              name="closecircleo"
              size={24}
              color="black"
              onPress={() => setAdd(!add)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <View>
              <Text>Title</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setTask({ ...task, title: text })}
              ></TextInput>
            </View>
            <View>
              <Text>Description</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setTask({ ...task, description: text })}
              ></TextInput>
            </View>
            <View>
              <Text>Team</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setTask({ ...task, team: text })}
              ></TextInput>
            </View>
            <View>
              <Text>Assignee</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => setTask({ ...task, assignees: text })}
              ></TextInput>
            </View>
            <View>
              <Dropdown
                data={["P0", "P1", "P2"]}
                title="Priority"
                setPriority={setPriority}
              />
            </View>
            <Pressable
              style={{
                backgroundColor: "blue",
                height: 30,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }} onPress={handleAdd}>
                Add
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
  },
});

export default Add;
