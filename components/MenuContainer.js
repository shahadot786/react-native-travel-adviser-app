import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imageUrl, type, setType }) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? 'bg-[#e5e9e7]' : ''
        }`}
      >
        <Image source={imageUrl} className="w-full h-full object-contain" />
      </View>
      <Text
        className={`text-lg font-semibold ${
          type === title.toLowerCase() ? 'text-[#15c55d]' : 'text-[#454645]'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
