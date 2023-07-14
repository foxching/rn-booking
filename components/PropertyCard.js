import { View, Text, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({ property, selectedData }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 3, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text style={{ width: 200, marginTop: 4, color: "gray" }}>
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Nights and {selectedData.adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * selectedData.adults}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs {property.newPrice * selectedData.adults}
            </Text>
          </View>
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room 1 Bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal:3,
              marginTop:2
            }}
          >
            <Text style={{textAlign:"center", color:"white"}}>Limited Time Deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
