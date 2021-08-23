import QUERY_CHARACTER from "../../../graphql/character.graphql";
import QUERY_ALL_CHARACTERS from "../../../graphql/allCharactersPaginated.graphql";
import ApolloClient from "../../../graphql/ApolloClient";
import CharacterDetail from "../../../components/CharacterDetail"
import { CharacterDetailProps } from "../../../components/CharacterDetail.d.ts";

const CharacterDetailPage = ({ character }: CharacterDetailProps) => <CharacterDetail character={character} />

export async function getStaticPaths() {
  const { data } = await ApolloClient.query({
    query: QUERY_ALL_CHARACTERS
  });
  // Get the paths we want to pre-render based on characters
  const paths = data.allPeople.people.map(({ id }: any) => ({
    params: { id },
  }))
  // // We'll pre-render only these paths at build time.
  // // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { data } = await ApolloClient.query({
    query: QUERY_CHARACTER,
    variables: { id: params.id }
  })
  return {
    props: {
      character: data.person,
    },
  };
}

export default CharacterDetailPage;