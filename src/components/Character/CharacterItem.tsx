// src/components/CharacterItem.tsx
import React from "react";
import { RickAndMortyStatus } from "../../api/rickandmortyAPI";

interface CharacterItemProps {
  character: {
    name: string;
    status: RickAndMortyStatus;
    species: string;
    image: string;
  };
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const { name, status, species, image } = character;

  const getStatusStyle = (status: RickAndMortyStatus) => {
    switch (status) {
      case RickAndMortyStatus.ALIVE:
        return { color: "green" };
      case RickAndMortyStatus.DEAD:
        return { color: "red" };
      case RickAndMortyStatus.UNKNOWN:
        return { color: "gray" };
      default:
        return {};
    }
  };

  return (
    <div className="character-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p style={getStatusStyle(status)}>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  );
};

export default CharacterItem;
