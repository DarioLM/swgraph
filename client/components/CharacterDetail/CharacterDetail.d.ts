export interface CharacterDetailProps {
  character: {
    __typename: string,
    birthYear: string,
    eyeColor: string,
    filmConnection: any
    gender: string,
    hairColor: string,
    height: number,
    homeworld: { __typename: 'Planet', climates: string[], name: string },
    mass: number,
    name: string,
    skinColor: string
  }
}