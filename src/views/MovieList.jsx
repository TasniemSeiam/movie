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
    const backgroundStyle = {
      backgroundImage: `url(https://s3-alpha-sig.figma.com/img/5cc2/2206/646e04a4e67b588bb4403e9de9c16477?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LVf5qRg8KcvZz-7vKksF9mHd0nNDOKCP1faqvYme8LRvxvGFXINFOuXbj~UQGnl~eYuj62YTVRoXNBz00peu6Oj0us8mPBOatjvBpKZquHU2vng8jl6K84Ac~9gdnR2AZX1v2uIFrQfVKDL~pQuJsogPLHGyQJX1iqDBzwpAASFAY6zEJPem4wzJbNaX~2mVMt20H4W36DUfd-A0hraKq0RUm3NVGZGeLOi6ce36-DNDNn8FXiov8HwTxkj0wvI6IMQyC3hFMF8p1tsjFhzQ3WsIcPspZhiljql17JlhBBzAF22PJoW2N~qr3owT0tAb~91ZPSwl53hXnp-PUzKRLQ__)`,//src={`https://image.tmdb.org/t/p/w500${movies[17].backdrop_path}`}
      backgroundSize: "cover", // Ensure the image covers the container
      backgroundPosition: "center", // Center the image
        filter: "blur(50px)",
        position: "relative",
      height: "75vh",
    };
    return (
      <>
        <div className="top" style={backgroundStyle}>
        </div>
        <div className="topPage">
          <img
            className="imageTop"
            src={`https://s3-alpha-sig.figma.com/img/5cc2/2206/646e04a4e67b588bb4403e9de9c16477?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LVf5qRg8KcvZz-7vKksF9mHd0nNDOKCP1faqvYme8LRvxvGFXINFOuXbj~UQGnl~eYuj62YTVRoXNBz00peu6Oj0us8mPBOatjvBpKZquHU2vng8jl6K84Ac~9gdnR2AZX1v2uIFrQfVKDL~pQuJsogPLHGyQJX1iqDBzwpAASFAY6zEJPem4wzJbNaX~2mVMt20H4W36DUfd-A0hraKq0RUm3NVGZGeLOi6ce36-DNDNn8FXiov8HwTxkj0wvI6IMQyC3hFMF8p1tsjFhzQ3WsIcPspZhiljql17JlhBBzAF22PJoW2N~qr3owT0tAb~91ZPSwl53hXnp-PUzKRLQ__`}
            alt={movies[17].title}
          />
          <div className=" topBluer bluerDiv">
            <h2>Black Adam</h2>
            <h3>Action</h3>
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
        <DataList/>
        <div className="headerText">
          <h1>Movies</h1>
          <p>See all</p>
        </div>
        <div className="movie-list">
          {movies.slice(7, 13).map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  }
}

export default MovieList;
