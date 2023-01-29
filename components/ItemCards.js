import React from 'react';
import ItemCardContainer from './ItemCardContainer';

const ItemCards = ({ cardData }) => {
  //console.log(cardData);
  return (
    <>
      {cardData.map((data, index) => {
        return (
          <ItemCardContainer
            key={index}
            imageUrl={
              data?.photo?.images?.medium?.url
                ? data?.photo?.images?.medium?.url
                : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg'
            }
            title={data?.name}
            location={data?.location_string}
            data ={data}
          />
        );
      })}
    </>
  );
};

export default ItemCards;
