import React, { Component } from 'react'
import classes from './Header.module.scss'

export default class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <img className={classes.Logo} src={'./images/aruna-logo.png'} />
        <img className={classes.Slogan} src={'./images/aruna-slogan.png'} />
      </div>
    )
  }
}
