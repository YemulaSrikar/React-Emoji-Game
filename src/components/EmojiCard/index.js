// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {allEmojis, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = allEmojis

  const onEmojiClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojis-cont">
      <button type="button" className="emoji-button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
