import { PureComponent } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";
import DataList from "./DataList";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const movies = await MovieController.fetchData();
      this.setState({ movies, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }
    // const backgroundStyle = {
    //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${movies[17].backdrop_path})`, //src={`https://image.tmdb.org/t/p/w500${movies[17].backdrop_path}`}
    //   backgroundSize: "cover", // Ensure the image covers the container
    //   backgroundPosition: "center", // Center the image
    //   filter: "blur(50px)",
      
    //   height: "75vh",
    // };
    // <div className="top" style={backgroundStyle}></div>
    return (
      <main>
        <div className="topPage" style={{ width: "87%"}} >
          <img
            className="imageTop"
            src={`https://image.tmdb.org/t/p/w500${movies[17].backdrop_path}`}
            alt={movies[17].title}
          />
          <div className=" topBluer bluerDiv">
            <h2>{movies[17].title}</h2>
          </div>
        </div>
        <div className="headerText">
          <h1>Movies</h1>
          <p>See all</p>
        </div>
        <div className="movie-list">
          {movies.slice(0, 6).map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
        <DataList />
        <div className="headerText">
          <h1>Movies</h1>
          <p>See all</p>
        </div>
        <div className="movie-list">
          {movies.slice(7, 13).map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
      </main>
    );
  }
}

export default MovieList;
