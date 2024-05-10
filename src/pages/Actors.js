
import React from 'react';
import NavBar from "../components/NavBar";
const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Woods"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

const ActorsPage = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor, index) => (
          <li key={index}>
            <strong>{actor.name}</strong>:
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorsPage;
