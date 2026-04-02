//import axios from 'axios';
import {setMovies} from '../slice/movieSlice.jsx';
import moviesData from '../data/moviesData.jsx';

//We are using Thunk

export const getMovies = () => async dispatch => {
    //const url ='';
    try{
        //const {data} = await axios.get(url);
        dispatch(setMovies(moviesData));
        return moviesData;
        //This data will go to action.payload in movieSlice
    }catch(err){
        return err
    }
}


export const getMoviesBySearch = (movies, searchValue) => {
  if (!searchValue) return movies;

  const value = searchValue.toLowerCase();

  return movies.filter((movie) =>
    movie.name.toLowerCase().includes(value) ||
    movie.director_name.toLowerCase().includes(value) ||
    movie.cast_name.toLowerCase().includes(value) ||
    movie.genre.toLowerCase().includes(value)
  );
};