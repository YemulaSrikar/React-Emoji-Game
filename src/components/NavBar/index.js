// Write your code here.

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {score, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="image-score-container">
        <p className="scores">Score: {score}</p>
        <p className="scores">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-container">
        <div className="image-score-container">
          <div className="image-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="emoji-game-img"
              alt="emoji logo"
            />
            <h1 className="emoji-name">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}
export default NavBar
