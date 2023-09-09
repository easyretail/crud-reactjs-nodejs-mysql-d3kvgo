import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

export default function MovieList() {
  const [movieReviewList, setMovieReviewList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then(response => {
      console.log(response.data);
      setMovieReviewList(response.data);
    });
  }, []);

  /**il faut une route différente, cf route du back */
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review
    }).then(() => {
      alert("successful insert!");
      console.log("hello from submit button");
    });
  };

  return (
    <div>
     hello from movielist
      {movieReviewList.map(val => {
        return (
          <h1>
            Movie Name: {val.movieName} | Movie Review: {val.movieReview}
          </h1>
        );
      })}
    </div>
  );
}
