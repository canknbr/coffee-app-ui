import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { PlusIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
        borderRadius: 40,
      }}>
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 40,
          shadowOpacity: 0.8,
          shadowOffset: {
            width: 0,
            height: 40,
          },
        }}
        className="flex-row justify-center -mt-16">
        <Image source={item.image} className="h-40 w-40" />
      </View>
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View
          style={{ backgroundColor: "rgba(255,255,255,.2)" }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16">
          <StarIcon size="15" color={"white"} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-6">
          <Text className="text-base text-white font-semibold opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-semibold">
            {item.volume}
          </Text>
        </View>
        <View
          className="flex-row items-center justify-between"
          style={{
            backgroundColor: themeColors.bgDark,
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOpacity: 0.6,
            shadowOffset: {
              width: 0,
              height: 20,
            },
          }}>
          <Text className="text-white text-lg font-semibold">
            ${item.price}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", { ...item })}
            className="rounded-full p-3 bg-white">
            <PlusIcon size={24} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
