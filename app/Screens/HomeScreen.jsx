/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {styles} from '../theme';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mb-3">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeScreenStyles.paddingBottom}>
          {/* Trending movies carousel */}
          <TrendingMovies data={trending} />
          {/* Upcoming movies list*/}
          <MovieList title="Upcoming" data={upcoming} />
          {/* Top rated movies list*/}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

const homeScreenStyles = {paddingBottom: 10};

export default HomeScreen;
