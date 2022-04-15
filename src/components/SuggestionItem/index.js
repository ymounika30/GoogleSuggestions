import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickGoogle = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="app-container">
      <p className="para">{suggestion}</p>
      <button className="button" type="button" onClick={onClickGoogle}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
