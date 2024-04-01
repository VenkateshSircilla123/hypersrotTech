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
import { useDispatch } from "react-redux";
import { updateTask } from "../../features/task/tasks";
const Edit = ({ setEdit, edit, task }) => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState(task?.Priority);
  const [status, setStatus] = useState(task?.status);
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask({
      ...editedTask,
      Priority: priority,
      status: status,
    });
  }, [status, priority]);

  const handleEdit = () => {
    dispatch(updateTask({ id: task.id, editedTask }));
    setEdit(!edit);
  };
  return (
    <Modal transparent={true} visible={edit}>
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
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Edit Task</Text>
            <AntDesign
              name="closecircleo"
              size={24}
              color="black"
              onPress={() => setEdit(!edit)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <View>
              <Text>Title</Text>
              <TextInput
                style={styles.inputStyle}
                readOnly
                placeholder={task?.title}
              ></TextInput>
            </View>
            <View>
              <Text>Description</Text>
              <TextInput
                style={styles.inputStyle}
                readOnly
                placeholder={task?.description}
              ></TextInput>
            </View>
            <View>
              <Text>Team</Text>
              <TextInput
                style={styles.inputStyle}
                readOnly
                placeholder={task?.team}
              ></TextInput>
            </View>
            <View>
              <Text>Assignee</Text>
              <TextInput
                style={styles.inputStyle}
                readOnly
                placeholder={task?.assignees}
              ></TextInput>
            </View>
            <View>
              <Text>Priority</Text>
              <Dropdown
                data={["P0", "P1", "P2"]}
                title="Priority"
                setPriority={setPriority}
                value={task?.Priority}
              />
              <Text>Status</Text>
              <Dropdown
                data={["In Progress", "Completed", "Deployed", "Deffered"]}
                title="Status"
                setStatus={setStatus}
                value={task?.status}
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
              <Text style={{ color: "white" }} onPress={handleEdit}>
                Edit
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

export default Edit;
