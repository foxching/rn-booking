import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

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
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 6,
        }}
      >
        <Ionicons name="bed-outline" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-airplane-outline" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Flights
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
       <Ionicons name="car-outline" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Car Renter
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="uber" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
