import axios from "axios";
import MovieModel from "../model/MovieModel";

class MovieController{

    static async fetchData() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0548366c45084640330e3330440787b3');
            return response.data.results.map(movie => new MovieModel(movie.id, movie.title, movie.poster_path, movie.vote_average, movie.backdrop_path, movie.overview))
        } catch (err) { 
            console.error('Error fetching data:', err);
            return [];
        }
    }
}

export default MovieController;