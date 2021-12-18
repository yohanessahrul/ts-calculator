import React, { Component } from 'react'
import classes from './Alert.module.scss'

interface AlertProps {
  isError?: boolean;
}

export default class Alert extends Component<AlertProps> {
  render() {
    const { isError } = this.props
    return (
      <React.Fragment>
        {isError &&
          <div className={classes.Alert} data-testid="alert">
            Untuk pengoperasian kalkulator, minimal memilih 2 angka.
          </div>
        }
      </React.Fragment>
    )
  }
}
