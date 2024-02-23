import {API_KEY} from '@env';
import axios from 'axios';

const apiBaseURL = 'https://api.themoviedb.org/3';
const trendingMoviesAPI = `${apiBaseURL}/trending/movie/day?language=en-US?api_key=${API_KEY}`;
const upcomingMoviesAPI = `${apiBaseURL}/movie/upcoming?api_key=${API_KEY}`;
const topratedMoviesAPI = `${apiBaseURL}/movie/top_rated?api_key=${API_KEY}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesAPI);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesAPI);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topratedMoviesAPI);
};
