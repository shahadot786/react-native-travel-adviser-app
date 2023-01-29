import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ItemDetails = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6 pt-8">
        <View className="relative bg-white">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg',
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate('Discover')}
              className="w-10 h-10 rounded-md items-center justify-center bg-white border-[1px] border-gray-200"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#15c55d" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#15c55d]">
              <FontAwesome5 name="heartbeat" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            {data?.price_level && data?.price ? (
              <>
                <View className="flex-row space-x-2 items-center">
                  <Text className="text-[12px] font-bold text-gray-100 shadow-lg">
                    {data?.price_level}
                  </Text>
                  {data?.price ? (
                    <>
                      <Text className="text-[24px] ml-1 font-bold text-gray-100 shadow-lg">
                        {data?.price}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text className="text-[24px] ml-1 font-bold text-gray-100 shadow-lg">
                        No Data
                      </Text>
                    </>
                  )}
                </View>
              </>
            ) : (
              <></>
            )}
            {data?.open_now_text ? (
              <>
                <View className="px-2 py-1 rounded-md bg-teal-100 justify-center ml-1">
                  <Text className="font-bold text-[#1b1b1d]">
                    {data?.open_now_text}
                  </Text>
                </View>
              </>
            ) : (
              <></>
            )}
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[#15c55d] text-[22px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={24} color="#A0C4C7" />
            <Text className="text-[#A0C4C7] text-[16px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-1">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={20} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}
          {data?.price_level && (
            <View className="flex-row items-center space-x-1">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="dollar" size={20} color="#816b2e" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}
          {data?.bearing && (
            <View className="flex-row items-center space-x-1">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="map-signs" size={20} color="#000" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        {data?.description && (
          <Text className="mt-4 tracking-wide text-[15px] font-semibold text-[#585858]">
            {data?.description?.length > 200
              ? `${data?.description.slice(0, 200)}..`
              : data?.description}
          </Text>
        )}
        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => {
              return (
                <TouchableOpacity
                  key={n.key}
                  className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{n.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <View className="flex-1 mb-[80px]">
          <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
            {data?.phone && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="phone" size={24} color="#428288" />
                <Text className="text-lg">{data?.phone}</Text>
              </View>
            )}
            {data?.email && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="envelope" size={24} color="#428288" />
                <Text className="text-lg">{data?.email}</Text>
              </View>
            )}
            {data?.address && (
              <View className="items-center flex-row space-x-6 mb-4">
                <FontAwesome name="map-pin" size={24} color="#428288" />
                <Text className="text-lg">{data?.address}</Text>
              </View>
            )}
            <TouchableOpacity>
              <View className="px-4 py-2 rounded-lg bg-[#15c55d] items-center justify-center mb-[20px]">
                <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
                  Book Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetails;
