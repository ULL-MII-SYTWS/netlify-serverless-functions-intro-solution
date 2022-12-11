import fetch from 'node-fetch'
const POKE_API = 'https://pokeapi.co/api/v2/'

export const handler = async (event, context) => {
  const result = await fetch(POKE_API + '/pokemon?limit=3&offset=0')
  const data = await result.json()
  console.log(data)
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
