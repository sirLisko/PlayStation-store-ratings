/* globals fetch, Headers */

import ratingAPIkey from '../mashape_apikey'

const ratingAPIurl = 'https://videogamesrating.p.mashape.com/get.php?count=1&game='

const myHeaders = new Headers({
  'Accept': 'application/json',
  'X-Mashape-Key': ratingAPIkey
})

function fetchRating (game) {
  return fetch(ratingAPIurl + encodeURIComponent(game), {
    method: 'get',
    headers: myHeaders
  }).then(function (response) {
    return response.json()
  })
}

export default fetchRating
