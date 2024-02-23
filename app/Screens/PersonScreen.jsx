import {
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {HeartIcon} from 'react-native-heroicons/solid';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('window');

export default function PersonScreen() {
  const [isFavorite, toggleFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 my-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1">
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
          <HeartIcon size="35" color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Person Details */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View className="flex-row justify-center">
            <View
              className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500"
              style={personStyles.shadow}>
              <Image
                source={require('../assets/images/castImage_1.webp')}
                style={{height: height * 0.43, width: width * 0.74}}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Robert Downey Jr.
            </Text>
            <Text className="text-base text-neutral-500 font-bold text-center">
              New York
            </Text>
          </View>
          <View className="mx-4 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1970-04-02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Action movies</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Rating</Text>
              <Text className="text-neutral-300 text-sm">88.2</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              nihil exercitationem vero consequatur illum, temporibus rem
              dignissimos veritatis doloribus est repellat optio. Quidem numquam
              eius dolorum corporis architecto deserunt exercitationem. Ratione
              harum delectus minima quo hic, omnis amet fugit corrupti. Dolore
              quas iure atque voluptatum exercitationem necessitatibus
              veritatis, amet deserunt doloribus porro sit distinctio quod in
              illum error, quo ad! Laborum eveniet aut sint aperiam velit
              voluptate doloremque soluta facere enim, nisi id harum quis esse
              vitae quia omnis eius, ullam pariatur, veritatis tempore. Nemo
              quaerat deserunt illo maxime natus. Maiores dignissimos a tenetur
              temporibus soluta suscipit aperiam iste repudiandae, aut ipsam!
              Dolorem velit fugiat, quas temporibus reprehenderit est
              praesentium nostrum architecto iure quaerat tempore, fuga, ad
              sequi eum quibusdam!
            </Text>
          </View>
          <MovieList
            title="Movies by Actor"
            hideSeeAll={true}
            data={personMovies}
          />
        </View>
      )}
    </ScrollView>
  );
}

const personStyles = StyleSheet.create({
  shadow: {
    background: 'transparent',
    shadowColor: 'white',
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    elevation: 12,
  },
});
