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
      className=" bg-white w-[full]"
    >
      <View className="mx-6 mb-4  ">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-52 rounded-t-md object-cover"
        />
        {title ? (
          <View className="border border-gray-300 border-t-0 rounded-b-md ">
            <Text className="text-[#15c55d] text-[16px] font-bold pl-2 my-1">
              {title?.length > 40 ? `${title.slice(0, 40)}..` : title}
            </Text>
            <View className="pl-2 pb-2 flex-row items-center space-x-1">
              <FontAwesome
                className="pl-2"
                name="map-marker"
                size={20}
                color="#A0C4C7"
              />
              <Text className="text-[#A0C4C7] text-[12px] font-bold">
                {location?.length > 40
                  ? `${location.slice(0, 40)}..`
                  : location}
              </Text>
            </View>
          </View>
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
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
