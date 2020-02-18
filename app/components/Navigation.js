import React, {Component} from 'react';
import styles from './Navigation.css'
import {Button, IconButton} from 'react-toolbox/lib/button';
import Chip from 'react-toolbox/lib/chip';
import classNames from 'classnames'

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHover: false
    };

    this.enableHover = this.enableHover.bind(this);
    this.disableHover = this.disableHover.bind(this);
  }

  enableHover() {
    const state = this.state;
    this.setState({
      navHover: true
    });
  }

  disableHover() {
    const state = this.state;
    this.setState({
      navHover: false
    });
  }

  render() {
    const { showNavPanel, toggleNavPanel } = this.props;
    const viewClass = showNavPanel ? [styles.openNavPanel] : [styles.closedNavPanel];
    const navClass = classNames(viewClass, { [styles.navigationHover]: this.state.navHover });
    const buttonClass = classNames(styles.navigationOpenButton, { 'md-36': this.state.navHover });
    const buttonHover = classNames({[styles.navButtonHover]: this.state.navHover});
    const chevType = showNavPanel ? "chevron_left" : "chevron_right";
    return (
      <div className={navClass}>
        <div className={buttonClass} onMouseEnter={this.enableHover} onMouseLeave={this.disableHover}>
          <Button icon={chevType} onClick={toggleNavPanel} className={buttonHover} floating ripple mini inverse={this.state.navHover} />
        </div>

        <div className={classNames(styles.navigationTitleChip, { [styles.hidden]: !showNavPanel })}>
          <Chip>Navigation</Chip>
        </div>
      </div>
    );
  }
};
