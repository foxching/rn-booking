import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, []);
  return (
    <View>
      <Text>BookingScreen</Text>
    </View>
  );
};

export default BookingScreen;
