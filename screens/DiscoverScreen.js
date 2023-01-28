import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import GoogleApi from '../components/GoogleApi';
import MenuContainer from '../components/MenuContainer';

const DiscoverScreen = () => {
  const [type, setType] = useState('attractions');
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8 pt-10">
        {/* text */}
        <View>
          <Text className="text-[38px] text-[#15c55d] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        {/* image */}
        <View className="w-14 h-14 bg-gray-500 rounded-md justify-center items-center shadow-lg">
          <Image
            className="w-full h-full object-cover rounded-md"
            source={Avatar}
          />
        </View>
      </View>
      {/* Google Place Api */}
      <GoogleApi />
      {/* Menus */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-6">
          <MenuContainer
            key={'hotels'}
            title="Hotels"
            imageUrl={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'attractions'}
            title="Attractions"
            imageUrl={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'restaurants'}
            title="Restaurants"
            imageUrl={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
