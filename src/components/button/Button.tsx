import React, { Component } from 'react'
import classes from './Button.module.scss'

interface ButtonProps {
  children?: String;
  clicked?: any;

}

export default class Button extends Component<ButtonProps> {
  render() {
    const { children, clicked } = this.props;
    return (
      <div className={classes.Wrapper} onClick={clicked}>
        {children}
      </div>
    )
  }
}
