import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";
import { Fontisto } from "@expo/vector-icons";
import Dropdown from "./Dropdown";
import { useDispatch } from "react-redux";
import Add from "../add/Add";
import {
  filterAssigneesTasks,
  filterDates,
  filterPriorityTasks,
  sortTasks,
} from "../../features/task/tasks";
import { format } from "date-fns";
import DateRangee from "../dateRange/DateRangee";

const Filters = () => {
  const [priority, setPriority] = useState("");
  const [assignees, setAssignees] = useState("");
  const [add, setAdd] = useState(false);
  const [onDate, setOndate] = useState(false);

  const [selectedRange, setRange] = useState({
    firstDate: null,
    secondDate: null,
  });
  const priorityOptions = ["P0", "P1", "P2"];

  const dispatch = useDispatch();

  const handleSelectPriority = (value) => {
    console.log("Selected priority:", value);
  };

  const handleFilter = () => {
    dispatch(
      filterDates({
        startDate: selectedRange?.firstDate,
        endDate: selectedRange?.secondDate,
      })
    );
    dispatch(filterPriorityTasks({ Priority: priority }));
    dispatch(filterAssigneesTasks({ assignees: assignees }));
  };
  console.log(selectedRange);

  return (
    <View styles={styles.filterContainer}>
      <Text style={{ padding: 10 }}>Filter By:</Text>
      <View
        className="filters"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput
          placeholder="Assignee"
          style={{
            flex: 1 / 3,
            color: "black",
            backgroundColor: "white",
            height: 32,
            borderRadius: 5,
            paddingLeft: 10,
          }}
          onChangeText={(text) => setAssignees(text)}
        />
        <Dropdown
          data={["P0", "P1", "P2"]}
          title="Priority"
          setPriority={setPriority}
        />
        <View style={styles.container}>
          <Pressable
            onPress={() => setOndate(!onDate)}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              height: 35,
            }}
          >
            <Text>DD/MM/YYYY</Text>
            <Fontisto name="date" size={24} color="black" />
          </Pressable>

          <DateRangee
            setRange={setRange}
            selectedRange={selectedRange}
            onDate={onDate}
            setOndate={setOndate}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "blue",
            height: 30,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleFilter}
        >
          <Text style={{ color: "white" }}>Filter</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "blue",
            height: 30,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }} onPress={() => setAdd(!add)}>
            Add new Task
          </Text>
        </Pressable>
        <Add add={add} setAdd={setAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 0,
  },
});

export default Filters;
