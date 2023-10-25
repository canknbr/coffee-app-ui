import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";

import { themeColors } from "../theme";
import { categories, coffeeItems } from "../constants";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/CoffeeCard";

const HomeScreen = () => {
  const [category, setCategory] = useState(1);
  return (
    <View className="flex-1 bg-white relative">
      <Image
        source={require("../../assets/images/beansBackground1.png")}
        className="absolute w-full -top-5 opacity-10 h-[240px]"
      />
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center justify-between px-4">
          <Image
            source={require("../../assets/images/avatar.png")}
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2 ">
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text className="text-base font-semibold">Ankara</Text>
          </View>
          <BellIcon size={25} color={"black"} />
        </View>
        <View className="mx-5 mt-14">
          <View className="p-1 bg-[#e6e6e6] flex-row items-center rounded-full">
            <TextInput
              className="p-4 flex-1 font-semibold text-gray-700"
              placeholder="Search"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{
                backgroundColor: themeColors.bgLight,
              }}>
              <MagnifyingGlassIcon size={25} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-5 mt-6">
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            key={(item) => item.id}
            renderItem={({ item, index }) => {
              let activeCategory = item.id == category;
              let activeClass = activeCategory
                ? "font-bold text-white "
                : "font-semibold";
              return (
                <TouchableOpacity
                  onPress={() => setCategory(item.id)}
                  style={{
                    backgroundColor: activeCategory
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 rounded-full px-5 mr-2 shadow">
                  <Text className={activeClass}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View className="mt-20 py-4">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
