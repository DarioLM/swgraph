import { Character } from "./characters";

interface Node {
  node: Character[]
}

interface Edge {
  edges: Node[]
}

interface Data {
  allPeople: Edge
}

export const parseCharactersQuery = (charactersQuery: Data) => charactersQuery.allPeople.edges.map(({ node }) => ({ ...node }));