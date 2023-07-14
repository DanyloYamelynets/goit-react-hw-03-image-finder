import React, { Component } from 'react';

export default class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img
            src={this.props?.modalData?.largeImageURL}
            alt={this.props?.modalData?.tags}
          />
        </div>
      </div>
    );
  }
}
