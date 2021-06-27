import request from 'superagent'

// const apiBaseURLv1 = 'https://pokeapi.glitch.me/v1/pokemon/'
const apiBaseURL = 'https://pokeapi.co/api/v2/pokemon/'

export function getDetailsByName (pokemonName) {
  const requestURL = `${apiBaseURL}${pokemonName}`
  return request(requestURL)
    .set('Accept', 'application/json')
    .then(response => response.body)
    .catch(err => {
      console.error(err)
    })
}

export function getAllPokemon (offset = 0, limit = 151) {
  const requestURL = `${apiBaseURL}?offset=${offset}&limit=${limit}`
  return request(requestURL)
    .set('Accept', 'application/json')
    .then(res => {
      return res.body.results
    })
    .catch(err => {
      console.error(err)
    })
}
