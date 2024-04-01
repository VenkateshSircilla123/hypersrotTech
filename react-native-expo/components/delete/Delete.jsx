import React from "react";
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
import { deleteTask } from "../../features/task/tasks";
const Delete = ({ del, setDel, task }) => {
  const dispatch = useDispatch();
  return (
    <Modal transparent={true} visible={del}>
      <View
        style={{
          flex: 1,
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 800 }}>Delete Task</Text>
            <AntDesign
              name="closecircleo"
              size={24}
              color="black"
              onPress={() => setDel(!del)}
            />
          </View>
          <View style={{ gap: 10 }}>
            <View>
              <Text>Do You Wish to Delete Task</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text>Task 1</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable style={{}}>
                  <Text
                    style={{}}
                    onPress={() => dispatch(deleteTask({ id: task?.id }))}
                  >
                    Yes
                  </Text>
                </Pressable>
                <Pressable style={{}}>
                  <Text style={{}} onPress={() => setDel(!del)}>
                    No
                  </Text>
                </Pressable>
              </View>
            </View>
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

export default Delete;
