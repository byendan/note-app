import React, { Component } from 'react';
import Navigation from './Navigation';
import Editor from './Editor'

export default class Display extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Editor />
      </div>
    );
  }
}
