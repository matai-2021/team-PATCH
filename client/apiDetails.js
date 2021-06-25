import request from 'superagent'

// const pokeUrl = 'https://pokeapi.glitch.me/v1/pokemon/'
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

function getPokeDetailById(pokemonId) {
const pokeIdUrl = `${pokeUrl}${pokemonId}`

 return request (pokeIdUrl)
 .set('Accept', 'application/json')
   .then(response => response.body)
   .catch(err => {
     console.error(err)
   })
}

export default getPokeDetailById
