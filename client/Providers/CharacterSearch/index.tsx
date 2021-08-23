import { useState, useEffect, useContext, createContext } from "react";

interface CharacterSearchProps {
  searchValue: string
  setSearchValue(data: string): void
}

const CharacterSearchContext = createContext<CharacterSearchProps>({} as CharacterSearchProps)

const CharacterSearch: React.FC = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <CharacterSearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </CharacterSearchContext.Provider>
  )
};

export default CharacterSearch;

export const useCharacterSearch = () => {
  const context = useContext(CharacterSearchContext)
  return context
}