import React, { Component } from 'react';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="modal-header">
          <h1 class="logo">
            <img class="logo-icon" src={logo} />Kalyan Kumar
          </h1>
        </div>
        <div class="modal-content">
          <p>Simple Navigation for social media platforms</p>
        </div>
        <div class="modal-icons">
          <div class="flex-container">
            <div class="flex">
              <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" title="linkedIn">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" title="instagram">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" title="twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" title="facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" title="github">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
