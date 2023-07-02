import { View, Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SavedScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, []);
  return (
    <View>
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen