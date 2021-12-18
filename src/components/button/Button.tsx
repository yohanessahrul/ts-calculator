import React, { Component } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children?: String;
  clicked?: any;
  name?: string;
  activeOperator?: string;
  dataTestId?: string;
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { children, clicked, name, activeOperator, dataTestId } = this.props;
    return (
      <div data-testid={dataTestId} className={(name === activeOperator) ? [classes.Wrapper, classes.Active].join(' '): classes.Wrapper} onClick={clicked}>
        {children}
      </div>
    )
  }
}
