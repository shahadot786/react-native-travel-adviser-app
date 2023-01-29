import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageUrl, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemsDetails', { param: data })}
      className="rounded-md mb-8 border border-gray-300 space-y-2 ml-2 shadow-md bg-white w-[182px]"
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-52 rounded-md object-cover"
      />
      {title ? (
        <>
          <Text className="text-[#15c55d] text-[16px] font-bold pl-2 my-1">
            {title?.length > 20 ? `${title.slice(0, 20)}..` : title}
          </Text>
          <View className="pl-2 pb-2 flex-row items-center space-x-1">
            <FontAwesome
              className="pl-2"
              name="map-marker"
              size={20}
              color="#A0C4C7"
            />
            <Text className="text-[#A0C4C7] text-[12px] font-bold">
              {location?.length > 24 ? `${location.slice(0, 24)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Text className="text-[#15c55d] text-[16px] font-bold pl-2">
            No Name Found
          </Text>
          <View className="pl-2 pb-2 flex-row items-center space-x-1">
            <FontAwesome
              className="pl-2"
              name="map-marker"
              size={24}
              color="#A0C4C7"
            />
            <Text className="text-[#A0C4C7] text-[14px] font-bold">
              No Location Found
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
