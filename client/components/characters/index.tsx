import React, { useEffect, useState } from "react";
import { useCharacterSearch } from "../../Providers/CharacterSearch";
import QUERY_ALL_CHARACTERS from "../../graphql/allCharactersPaginated.graphql";
import { filterCharacterSearch } from "./characters.helpers";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Characters as ICharacters, Character } from "./characters";
import styles from "./characters.module.css";

const PAGINATION_LIMIT = 20;

const Characters = () => {
  const { searchValue } = useCharacterSearch();
  const { data, loading, error, fetchMore } = useQuery(QUERY_ALL_CHARACTERS, { variables: { limit: searchValue ? null : PAGINATION_LIMIT, after: "" } });
  const [characters, setCharacters] = useState({ list: [], nextCursor: "" });
  const [charactersFiltered, setCharactersFiltered] = useState();
  useEffect(() => setCharacters({ list: data?.allPeople?.people, nextCursor: data?.allPeople?.pageInfo?.endCursor }), [data]);
  useEffect(() => setCharactersFiltered(searchValue ? characters?.list?.filter(filterCharacterSearch(searchValue)) : null), [searchValue, data]);
  if (loading) return <div>Loading</div>
  if (error) return <div> Error </div>
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Characters</h1>
        {characters.nextCursor &&
          <div
            className={styles.button}
            onClick={() => fetchMore({ variables: { after: characters.nextCursor } })
              .then(({ data }) => setCharacters(characters => ({ list: [...characters.list, ...data.allPeople.people], nextCursor: data.allPeople.pageInfo.hasNextPage ? data.allPeople.pageInfo.endCursor : "" })))}
          >
            Load more
          </div>
        }
      </div>
      {searchValue && (charactersFiltered || []).length === 0 &&
        <div>
          No characters found for <strong>'{searchValue}'</strong>
        </div>
      }
      <div className={styles.list}>{(charactersFiltered || characters?.list || []).map(character =>
        <Link key={character.id} href={`/characters/${character.id}/${character.name}`}>
          <div key={character.id}>
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Homeworld:</strong> {character?.homeworld.name}</p>
          </div>
        </Link>)}
      </div>
    </div>
  )
};

export default Characters;