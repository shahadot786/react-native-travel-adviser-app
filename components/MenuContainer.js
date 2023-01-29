import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imageUrl, type, setType }) => {
  const handelPress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handelPress}
    >
      <View
        className={`p-2 border-[2px] rounded-md items-center justify-center ${
          type === title.toLowerCase()
            ? 'border-[#15c55d]'
            : 'border-[#ffffff]'
        }`}
      >
        <Image source={imageUrl} className="w-16 h-16 object-contain" />
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
