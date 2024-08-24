import React, { useState, useEffect } from "react";
import DataController from "../controllers/DataController";
import DataItem from "./DataItem";

const DataList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await DataController.fetchData();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

 

  return (
    <>
      
      <div className="headerText">
        <h1>Series</h1>
        <p>See all</p>
      </div>
      <div className="movie-list">
        {movies.slice(7,13).map((movie) => (
          <DataItem data={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default DataList;
