// src/rickandmortyAPI.ts
import instance from "./api";

// Định nghĩa enum cho trạng thái của nhân vật
export enum RickAndMortyStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

// Định nghĩa interface cho nhân vật
export interface RickAndMorty {
  id: number;
  name: string;
  status: RickAndMortyStatus;
  species: string;
  image: string;
}

// Định nghĩa interface cho dữ liệu API trả về
export interface RickAndMortyApiResponse {
  info: {
    count: number; 
    pages: number; 
    next: string | null; 
    prev: string | null; 
  };
  results: RickAndMorty[];
}

// Hàm lấy dữ liệu từ API với phân trang
export const fetchCharacters = async (page: number = 1): Promise<RickAndMortyApiResponse> => {
  try {
    const response = await instance.get("/character", {
      params: { page }, 
    });
    const data = response.data.results.map((character: any) => {
      let status: RickAndMortyStatus;
      switch (character.status) {
        case "Alive":
          status = RickAndMortyStatus.ALIVE;
          break;
        case "Dead":
          status = RickAndMortyStatus.DEAD;
          break;
        default:
          status = RickAndMortyStatus.UNKNOWN;
      }

      return {
        ...character,
        status, 
      };
    });
    
    return {
      info: response.data.info,
      results: data,
    };
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Error fetching characters");
  }
};
