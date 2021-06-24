import request from 'superagent'

export function getPokemonData() {
  return request('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
  .set('Accept', 'application/json')
  .then(res => {
    // console.log(res.body.results)
    return res.body.results
  })
  .catch(err => {
    console.error(err)
  })
}
