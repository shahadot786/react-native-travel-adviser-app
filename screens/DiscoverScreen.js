import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, NotFound } from '../assets';
import GoogleApi from '../components/GoogleApi';
import Menu from '../components/Menu';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ItemCards from '../components/ItemCards';
import { getPlaceData } from '../api';

const DiscoverScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlaceData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

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
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#15c55d" />
        </View>
      ) : (
        <ScrollView>
          {/* Menus */}
          <Menu />
          {/* items */}
          <View>
            <View className="flex-row items-center justify-between px-6 mt-8">
              <Text className="text-[#15c55d] text-[24px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#b8bbb9] text-[16px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={16}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
            {/* Card  */}
            {mainData?.length > 0 ? (
              <>
                <View className="flex-row flex-wrap mt-8">
                <ItemCards cardData={mainData} />
                </View>
              </>
            ) : (
              <>
                <View className="w-full h-[300px] items-center justify-center space-y-8">
                  <Image source={NotFound} className="w-28 h-28 object-cover" />
                  <Text className="text-[#1b1b1d] text-[16px]">
                    Opps.. No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
