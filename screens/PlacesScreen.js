import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { data } from "../data/place";
import PropertyCard from "../components/PropertyCard";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const PlacesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modalVisibile, setModalVisibile] = useState(false);
  const { rooms, adult, children, selectedDates } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
        {data
          .filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => {
              return (
                <PropertyCard
                  key={index}
                  property={property}
                  selectedData={route.params}
                />
              );
            })
          )}
      </ScrollView>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View>
            <Text>Sort</Text>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default PlacesScreen;
