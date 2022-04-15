import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeGoogle = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.includes(searchInput),
    )
    return (
      <div className="container">
        <div className="card-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search-input"
                type="search"
                onChange={this.onChangeGoogle}
                placeholder="Search Google"
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachList => (
                <SuggestionItem
                  suggestionDetails={eachList}
                  key={eachList.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
