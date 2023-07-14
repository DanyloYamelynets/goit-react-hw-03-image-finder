import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.trim() === '') return;
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  handleInputChange = e => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.onSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={this.state.searchValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
