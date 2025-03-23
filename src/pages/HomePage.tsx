// src/components/Page.tsx
import React from "react";
import Header from "../components/Header";
import CharacterList from "../components/CharacterList";

const Page: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <CharacterList />
    </div>
  );
};

export default Page;
