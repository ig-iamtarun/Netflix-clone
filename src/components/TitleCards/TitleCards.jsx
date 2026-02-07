import React, { useRef, useEffect, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWM3Mjc2NmQwNGE2YzE0NTdmMzdhOTEyOGRlOTYxZiIsIm5iZiI6MTc3MDM2MDAzNS42ODgsInN1YiI6IjY5ODU4Y2UzZGIxMTBhMWI0ODM0NTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJMWTU-FOivknicMssarB1aTZCiT5rWe7vYujAgQ9ng",
    },
  };
 
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt={card.title}
              />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;