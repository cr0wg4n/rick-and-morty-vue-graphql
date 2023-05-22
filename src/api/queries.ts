import gql from "graphql-tag"
import { apolloClient } from "./config"
import type { Character } from "@/models/character"

async function query(query: any, variables: object) {
  const { data } = await apolloClient.query({
    query,
    variables
  })
  return data
}

export async function useGetCharacterById(id: number): Promise<Character> {
  const { character } = await query(
    gql`
      query getCharacterById ($id: ID!){
        character(id: $id) {
          id
          name
          status
          species
          type
          gender
          image
          created
        }
      }
    `,
    {
      id: String(id)
    }
  )

  return character
}