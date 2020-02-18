import React, { Component } from 'react';
import styles from './Display.css'
import Navigation from './Navigation';
import Editor from './Editor';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.displayContainer}>
        <Navigation toggleNavPanel={this.props.toggleNavPanelState} showNavPanel={this.props.showNavPanel} />
        <Editor />
      </div>
    );
  }
}
