import React from "react";

interface CharacterItemProps {
  character: {
    name: string;
    status: string;
    species: string;
    image: string;
  };
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const { name, status, species, image } = character;

  return (
    <div className="character-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  );
};

export default CharacterItem;