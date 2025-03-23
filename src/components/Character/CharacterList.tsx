// src/components/CharacterList.tsx
import React, { useEffect, useState } from "react";
import { fetchCharacters, RickAndMorty, RickAndMortyApiResponse } from "../../api/rickandmortyAPI";
import CharacterItem from "./CharacterItem";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<RickAndMorty[]>([]);
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data: RickAndMortyApiResponse = await fetchCharacters(page);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage); 
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
