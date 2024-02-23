import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {styles, theme} from '../theme';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';

let {width, height} = Dimensions.get('window');

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const movieName = 'Avengers';
  useEffect(() => {
    // movie details api call
  }, [item]);
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      {/* back button and movie */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 mt-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl p-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={require('../assets/images/poster_1.jpg')}
              style={{width: width, height: height * 0.7}}
            />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
              style={{width, height: height * 0.4}}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
      {/* Movie Details */}
      <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* status realease runtime */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Realesed * 2000 * 170 min
        </Text>
      </View>

      {/* Genres */}
      <View className="flex-row justify-center mx-4 space-x-1">
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Action *
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Thriller *
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Comedy
        </Text>
      </View>
      <Text className="text-neutral-400 mx-6 my-2 tracking-wide text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores
        odio minus saepe nostrum a. Neque, veniam. Eum, blanditiis nisi
        consequatur voluptatem incidunt sed sint numquam quaerat praesentium
        dolore exercitationem.
      </Text>

      {/* Cast */}
      <Cast navigation={navigation} cast={cast} />
      {/* Similar Movies */}
      <MovieList
        title="Suggested Movies"
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
}
