import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}



*/

// Write your code here.

class EmojiGame extends Component {
  state = {clickedEmojis: [], isGameEnd: false, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderEmojiCard = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <div className="emojis-main-container">
        <ul className="emojis-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmojiCard
              allEmojis={eachEmoji}
              key={eachEmoji.id}
              onClickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderWinOrLoss = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length

    return (
      <div>
        <WinOrLossCard
          isWon={isWon}
          score={clickedEmojis.length}
          onClickPlayAgain={this.restartGame}
        />
      </div>
    )
  }

  render() {
    const {topScore, clickedEmojis, isGameEnd} = this.state
    const currentScore = clickedEmojis.length

    return (
      <div className="bg-container">
        <div>
          <NavBar
            score={currentScore}
            topScore={topScore}
            isGameEnd={isGameEnd}
          />
        </div>
        <div>{isGameEnd ? this.renderWinOrLoss() : this.renderEmojiCard()}</div>
      </div>
    )
  }
}
export default EmojiGame
