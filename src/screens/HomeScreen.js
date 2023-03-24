import { Image, SafeAreaView, Text, View, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">

      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={33} color="#00CCBB" />

      </View>

      <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginHorizontal: 14 }}>

        <View style={{ flexDirection: "row", paddingHorizontal: 7, alignItems: "center", backgroundColor: "#D3D3D3", flex: 1, marginRight: 10 }}>

          <MagnifyingGlassIcon color="gray" size={20} />

          <TextInput
            style={{ marginLeft: 7, paddingVertical: 8 }}
            placeholder='Restaurants and cuisines'
            keyboardType="default"
            value={search}
            onChangeText={setSearch}
          />

        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />

      </View>

      <Categories />

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  pfImage: {
    height: 30,
    width: 30
  }
})