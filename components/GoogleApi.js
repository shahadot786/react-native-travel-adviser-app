import { View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleApi = ({ bl_latData, bl_lngData, tr_latData, tr_lngData }) => {
  return (
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-md border-[1px] border-stone-200 mt-4">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: 'geometry' }}
        placeholder="Search places.."
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          //console.log(details?.geometry?.viewport);
          bl_latData(details?.geometry?.viewport?.southwest?.lat);
          bl_lngData(details?.geometry?.viewport?.southwest?.lng);
          tr_latData(details?.geometry?.viewport?.northeast?.lat);
          tr_lngData(details?.geometry?.viewport?.northeast?.lng);
        }}
        query={{
          key: 'AIzaSyCwm-xzHMtBj1LH8j7fl6vNPUy_C5l_YKw',
          language: 'en',
        }}
      />
    </View>
  );
};

export default GoogleApi;
