export interface Character {
  name: string
  gender: string,
  homeworld: {
    name: string
  }
}

export interface Characters {
  characters: {
    allPeople: {
      people: Character[]
      pageInfo: {
        hasNextPage: boolean
        endCursor: string
      }
    }
  }
  onLoadMore: any
}
