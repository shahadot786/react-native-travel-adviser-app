import { View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleApi = () => {
  return (
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg border-[1px] border-stone-200 mt-4">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: 'geometry' }}
        placeholder="Search places.."
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details?.geometry?.viewport);
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
