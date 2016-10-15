import fetchRating from './fetchRating'
import addRating from './addRating'

const gamesSelector = '.cellGridGameStandard'
const titleSelector = '.cellTitle'

function getGameTitle (game) {
  return game.querySelector(titleSelector).innerHTML
}

function fetchGames (games) {
  return games.map(game => {
    const gameTitle = getGameTitle(game)
    if (gameTitle) {
      fetchRating(gameTitle)
        .then(score => addRating(game, score[0]))
        .catch()
    }
  })
}

function waitTheDOM () {
  setTimeout(() => {
    const games = document.querySelectorAll(gamesSelector)
    if (games.length) {
      fetchGames([...games])
    }
  }, 3000)
}

waitTheDOM()

window.onhashchange = waitTheDOM
