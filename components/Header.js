import { View, Text, Pressable } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Pressable>
        <Text>Header</Text>
      </Pressable>
    </View>
  );
};

export default Header;
