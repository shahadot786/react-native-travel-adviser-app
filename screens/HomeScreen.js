import { View, Text, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';
import Button from '../components/Button';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8 bg-white relative">
      <View className="ml-6 flex-row items-center">
        <Text className="p-3 bg-[#1b1b1d] text-[#15c55d] font-bold rounded-full text-lg">
          Tap
        </Text>
        <Text className="ml-2 text-xl font-semibold text-[#1b1b1d]">
          Travel
        </Text>
      </View>
      <View className="ml-6 mt-6 overflow-hidden">
        <Text className="text-3xl text-[#1b1b1d]">Enjoy the trip with</Text>
        <Text className="mt-2 text-[#15c55d] text-2xl font-bold">
          Good Moments
        </Text>
        <Text className="mt-2 text-[#1b1b1d] text-base">
          Feel free to search your destination and book your favourite places.
        </Text>
      </View>
      {/* circel section */}
      <View className="w-[300px] h-[300px] bg-[#15c55d] rounded-full absolute bottom-[150px] -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#cf385e] rounded-full absolute -bottom-28 -left-36"></View>
      {/* image section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          duration={1000}
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <Button onPress={() => navigation.navigate('Discover')}>Tap</Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
