import fetchRating from './fetchRating'
import addRating from './addRating'

const titleSelector = '.grid-cell__title'

function fetchGames (games) {
  return games.map(game => {
    const gameTitle = game.innerHTML
    if (gameTitle) {
      fetchRating(gameTitle)
        .then(score => {
          addRating(game, score[0])
        })
        .catch(() => {})
    }
  })
}

function waitTheDOM () {
  const isGameLoaded = setInterval(() => {
    const games = document.querySelectorAll(titleSelector)
    if (games.length) {
      fetchGames([...games])
      clearInterval(isGameLoaded)
    }
  }, 3000)
}

waitTheDOM()

window.onhashchange = waitTheDOM
