import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MenuContainer from './MenuContainer';
import { Attractions, Hotels, Restaurants } from '../assets';

const Menu = ({ type, setType }) => {
  return (
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
  );
};

export default Menu;
