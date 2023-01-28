import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native-animatable';

const ItemCardContainer = ({ imageUrl, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md mb-8 border border-gray-300 space-y-2 ml-2 shadow-md bg-white w-[182px]">
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-52 rounded-md object-cover"
      />
      <Text className="text-[#15c55d] text-[16px] font-bold pl-2">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className="pl-2 pb-2 flex-row items-center space-x-1">
        <FontAwesome
          className="pl-2"
          name="map-marker"
          size={24}
          color="#A0C4C7"
        />
        <Text className="text-[#A0C4C7] text-[14px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 14)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
