import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#15c55d] rounded-full items-center justify-center"
    >
      <Animatable.View
        animation={'pulse'}
        easing="ease-in-out"
        iterationCount={'infinite'}
        className="w-20 h-20 items-center justify-center rounded-full bg-[#15c55d]"
      >
        <Text className="text-gray-50 text-[36px] font-semibold">
          {children}
        </Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Button;
