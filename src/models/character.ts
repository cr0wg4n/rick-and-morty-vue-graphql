export interface CharacterBase {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  created: string
} 

export interface Character extends Partial<CharacterBase> {}


