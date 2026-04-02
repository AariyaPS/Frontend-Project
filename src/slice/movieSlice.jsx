import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    searchValue: '',
    genre:"",
    rating:""
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue : (state, action) => {
            state.searchValue = action.payload;
        }, 
        setGenre: (state, action) => {
            state.genre = action.payload;
        },
        setRating: (state, action) => {
            state.rating = action.payload;
        }
    }
});
 
export const {setMovies, setSearchValue, setGenre, setRating} = movieSlice.actions;

export default movieSlice.reducer;