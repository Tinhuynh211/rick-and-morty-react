
import React from "react";
import CharacterItem from "./CharacterItem";

const characters = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
];

const CharacterList: React.FC = () => {
  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <CharacterItem key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
