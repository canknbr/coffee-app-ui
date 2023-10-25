import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeftCircleIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
const ProductScreen = ({ route }) => {
  const sizeArray = ["small", "medium", "large", "xlarge", "xxlarge"];
  const navigation = useNavigation();
  const [coffeeSize, setCoffeeSize] = useState("small");
  let item = route.params;
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("../../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="flex-1 space-y-4">
        <View className="mx-4 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon
              size={"50"}
              color={"white"}
              strokeWidth={1.2}
            />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full p-2 border-2 border-white">
            <HeartIcon size="24" color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOpacity: 0.6,
            shadowOffset: {
              width: 0,
              height: 20,
            },
          }}>
          <Image source={item.image} className="h-60 w-60" />
        </View>
        <View
          className="flex-row items-center justify-center rounded-xl p-1 px-2 w-16 space-x-2 mx-4 opacity-70"
          style={{
            backgroundColor: themeColors.bgDark,
          }}>
          <StarIcon size="15" color={"white"} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row items-center justify-between">
          <Text
            className="text-3xl font-semibold"
            style={{
              color: themeColors.text,
            }}>
            {item.name}
          </Text>
          <Text
            className="text-lg font-semibold"
            style={{
              color: themeColors.text,
            }}>
            ${item.price}
          </Text>
        </View>
        <View className="mx-4 space-y-2">
          <Text
            style={{
              color: themeColors.text,
            }}
            className="text-lg font-bold">
            Coffee Size
          </Text>
          <View className="flex-row justify-between">
            {sizeArray.map((size, i) => {
              let activeSize = size === coffeeSize;
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => setCoffeeSize(size)}
                  style={{
                    backgroundColor: activeSize
                      ? themeColors.bgDark
                      : "rgba(0,0,0,.06)",
                  }}
                  className="p-3 px-8 rounded-full">
                  <Text className={activeSize ? "text-white" : "text-gray-700"}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View className="mx-4 space-y-2 h-28">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold">
            About
          </Text>
          <Text className="text-gray-600">{item.desc}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base text-gray-700 font-semibold opacity-60">
              Volume
            </Text>
            <Text className="text-base text-black font-semibold">
              {item.volume}
            </Text>
          </View>
          <View className=" flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
            <TouchableOpacity>
              <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text
              style={{
                color: themeColors.text,
              }}
              className="text-lg font-extrabold">
              1
            </Text>
            <TouchableOpacity>
              <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className="border-gray-400 border p-4 rounded-full">
            <ShoppingBagIcon size="30" color={"gray"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: themeColors.bgLight,
            }}
            className="p-4 rounded-full flex-1 ml-3">
            <Text className="text-center text-base font-semibold text-white">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
