import { View } from 'react-native';
import React from 'react';
import ItemCardContainer from './ItemCardContainer';

const ItemCards = () => {
  return (
    <View className="px-4 mt-8 flex-row justify-center items-center">
      <ItemCardContainer
        key={'102'}
        imageUrl={
          'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        title={'Something One'}
        location={'Dhaka'}
      />
      <ItemCardContainer
        key={'101'}
        imageUrl={
          'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        title={'Something two'}
        location={'Dhaka Bangladesh'}
      />
    </View>
  );
};

export default ItemCards;
