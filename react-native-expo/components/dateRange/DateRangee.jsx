import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Modal } from "react-native";
import DateRangePicker from "rn-select-date-range";
import { AntDesign } from "@expo/vector-icons";

const DateRangee = ({ setRange, selectedRange, onDate, setOndate }) => {
  return (
    <SafeAreaView>
      <Modal transparent={true} visible={onDate}>
        <View
          style={{
            flex: 1,
            backgroundColor: "gray",
          }}
        >
          <View style={{ backgroundColor: "white", margin: 50 }}>
            <AntDesign
              name="closecircleo"
              size={24}
              color="black"
              onPress={() => setOndate(!onDate)}
            />
            <View style={styles.container}>
              <DateRangePicker
                onSelectDateRange={(range) => {
                  setRange(range);
                }}
                blockSingleDateSelection={true}
                responseFormat="DD-MM-YYYY"
                selectedDateContainerStyle={styles.selectedDateContainerStyle}
                selectedDateStyle={styles.selectedDateStyle}
              />
              <View style={styles.container}>
                <Text>first date: {selectedRange.firstDate}</Text>
                <Text>second date: {selectedRange.secondDate}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    margin: 10,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});

export default DateRangee;
