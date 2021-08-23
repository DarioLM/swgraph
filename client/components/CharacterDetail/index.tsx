import { CharacterDetailProps } from "./CharacterDetail";
import styles from "./CharacterDetail.module.css";
import Link from "next/link";

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  console.log(character);
  return (
    <div className={styles.detail}>
      <div className={styles.character}>
        <h1>{character.name}</h1>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Birth year:</strong> {character.birthYear}</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Height:</strong> {character.height} cm</p>
        <p><strong>Homeworld:</strong> {character.homeworld.name} ({character.homeworld.climates[0]})</p>
        <div className={styles.button}> <Link href="/characters">Back</Link> </div>
      </div>
      <div className={styles.films}>
        <h1>Films:</h1>
        {character.filmConnection.films.map(film =>
          <div key={film.id} className={styles.film}>
            <p><strong>Title:</strong> {film.title}</p>
            <p><strong>Release date:</strong> {film.releaseDate}</p>
            <p><strong>Director:</strong> {film.director}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterDetail;