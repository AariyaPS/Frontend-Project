import Navbar from "../../components/Navbar/index.jsx";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard/index.jsx";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {getMoviesBySearch} from '../../utils/getMoviesBySearch.jsx';


const Home = () => {

    const dispatch = useDispatch();

    const  {movies, searchValue, genre, rating}  = useSelector(state => state.movies);

    
    const filteredMovies = getMoviesBySearch(movies, searchValue).filter(movie => {
        const genres = movie.genre.split(",").map(g => g.trim());

        const matchGenre = !genre || genres.includes(genre);
        const matchRating = !rating || movie.imdb_rating >= Number(rating);

        return matchGenre && matchRating
    });
    

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

                return (
                <>
                <Navbar />
                <Box sx={{flexGrow:1, p:3, marginTop: 2}}>
                    <Grid container spacing={3} alignItems="stretch" sx={{display: "flex",}}>
                    {
                        filteredMovies?.length > 0 && filteredMovies.map(movie =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}  sx={{ display: "flex", alignItems: "stretch" }}>
                             <MovieCard movie={movie}  />                       
                        </Grid>
                        )
                    }
                    
                    </Grid>
                </Box>
                </>
            );
        
}

export default Home;