import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useCharacterSearch } from "../../../Providers/CharacterSearch";
import styles from "./CharacterSearch.module.css";

const CHARACTERS_PATHNAME = "/characters";

const CharacterSearch = () => {
  const router = useRouter();
  const { searchValue, setSearchValue } = useCharacterSearch();

  useEffect(() => {
    if (searchValue && router.pathname !== CHARACTERS_PATHNAME) {
      router.push("/characters")
    }
  }, [searchValue]);

  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder={"Character name..."} value={searchValue} onChange={event => setSearchValue(event.target.value)} />
    </div>
  )
};

export default CharacterSearch;