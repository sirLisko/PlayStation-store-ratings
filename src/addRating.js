function attachRating (game, {score} = {}) {
  if (score) {
    const rating = document.createElement('div')
    rating.classList.add('badge')
    rating.classList.add('pssr__rating')
    rating.innerHTML = score

    game.querySelector('.thumbPane').appendChild(rating)
  }
}

export default attachRating
