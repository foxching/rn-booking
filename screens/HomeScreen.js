import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Ching Booking",
      headerTitleAlign: "center",
      headerRight: () => {
        <View style={{ marginRight: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="white" />;
        </View>;
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
      },
    });
  }, []);
  return (
    <View>
      <Header />
    </View>
  );
};

export default HomeScreen;
