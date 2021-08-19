import React, { useEffect, useState } from "react";
import QUERY_ALL_CHARACTERS from "./characters.graphql";
import { useQuery } from "@apollo/client";
import { Characters as ICharacters, Character } from "./characters";
import styles from "./characters.module.css";


const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(QUERY_ALL_CHARACTERS, { variables: { limit: 10, after: "" } });
  const [characters, setCharacters] = useState({ list: [], nextCursor: "" });
  useEffect(() => setCharacters({ list: data?.allPeople?.people, nextCursor: data?.allPeople?.pageInfo?.endCursor }), [data]);
  if (loading) return <div>Loading</div>
  if (error) return <div> Error </div>
  return (
    <div className={styles.main}>
      <h1>Characters</h1>
      <div className={styles.list}>{characters?.list?.map(character =>
        <div>
          <p><strong>Name:</strong> {character.name}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Homeworld:</strong> {character?.homeworld.name}</p>
        </div>)}</div>
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
  )
};

export default Characters;