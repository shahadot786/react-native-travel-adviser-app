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
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);
  const [type, setType] = useState('restaurants');

  useEffect(() => {
    setIsLoading(true);
    getPlaceData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-4 pt-8">
        {/* text */}
        <View>
          <Text className="text-[38px] text-[#15c55d] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>
        {/* image */}
        <View className="w-12 h-12 bg-gray-500 rounded-md justify-center items-center shadow-lg">
          <Image
            className="w-full h-full object-cover rounded-md"
            source={Avatar}
          />
        </View>
      </View>
      {/* Google Place Api */}
      <GoogleApi
        bl_latData={setBl_lat}
        bl_lngData={setBl_lng}
        tr_latData={setTr_lat}
        tr_lngData={setTr_lng}
      />
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#15c55d" />
        </View>
      ) : (
        <ScrollView>
          {/* Menus */}
          <Menu type={type} setType={setType} />
          {/* items */}
          <View className="flex-1">
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
              <View className="flex-row mt-8 flex-wrap justify-between">
                <ItemCards cardData={mainData} />
              </View>
            ) : (
              <View className="w-full h-[300px] items-center justify-center space-y-8">
                <Image source={NotFound} className="w-28 h-28 object-cover" />
                <Text className="text-[#1b1b1d] text-[16px]">
                  Opps.. No Data Found
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
