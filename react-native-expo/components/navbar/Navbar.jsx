import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Navbar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: 900 }}>Task Dashboard</Text>
      <AntDesign name="user" size={30} color="black" />
    </View>
  );
};

export default Navbar;
