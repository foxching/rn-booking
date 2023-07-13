import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import SearchResult from "../components/SearchResult";
import { data } from "../data/place";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#FFC72C",
          borderWidth: 4,
          borderRadius: 10,
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Enter Your Destination" />
        <Feather name="search" size={22} color="black" />
      </View>
      <SearchResult data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;
