import { useQuery } from "@apollo/client";
import QUERY_CHARACTER from "../../../graphql/character.graphql";
import QUERY_ALL_CHARACTERS from "../../../graphql/allCharactersPaginated.graphql";
import ApolloClient from "../../../graphql/ApolloClient";


const CharacterDetailPage = ({ character }) => {
  return <div>Detail: {character.name}</div>
}

export async function getStaticPaths() {
  const { data } = await ApolloClient.query({
    query: QUERY_ALL_CHARACTERS
  });
  // Get the paths we want to pre-render based on characters
  const paths = data.allPeople.people.map(({ id }) => ({
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