// Write your code here.
import {Component} from 'react'

import './index.css'

const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLossCard extends Component {
  render() {
    const {isWon, onClickPlayAgain, score} = this.props
    const wonStatus = isWon ? 'You Won' : 'You Lose'
    const winLossImg = isWon ? wonImg : loseImg
    const altText = isWon ? 'win or lose' : 'win or lose'
    const statusLabel = isWon ? 'Best Score' : 'Score'

    return (
      <div className="win-lose-container">
        <div className="win-lose-img-container">
          <div className="win-lose-status-container">
            <h1 className="won-status">{wonStatus}</h1>
            <p className="status-label">{statusLabel}</p>
            <p className="score">{score}/12</p>
            <button
              type="button"
              className="play-again-btn"
              onClick={onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
          <img src={winLossImg} alt={altText} className="win-loss-img" />
        </div>
      </div>
    )
  }
}

export default WinOrLossCard
