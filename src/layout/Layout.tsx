import React, { Component } from 'react'
import Button from '../components/button/Button'
import classes from './Layout.module.scss'
import Input from '../components/input/Input'
import { runningCalculator } from '../helper/global'
import Alert from '../components/alert/Alert'
import Header from '../components/header/Header'

interface ArrayNumber {
  label?: string;
  value?: number;
}

interface Layoutinterface {
  value1?: number;
  value2?: number;
  value3?: number;
  numbers?: ArrayNumber[];
  operation?: string;
  result?: number;
  isError?: boolean;
}

export default class layout extends Component<{}, Layoutinterface> {
  constructor(props: any) {
    super(props)
    this.state = {
      value1: 10,
      value2: 2,
      value3: 5,
      numbers: [],
      operation: '',
      result: 0,
      isError: false
    }
  }

  onSetOperationHandler (operator: string) {
    if (this.state.numbers && this.state.numbers.length < 2) {
      this.setState({isError: true})
    } else {
      this.setState({
        operation: operator,
        isError: false,
        result: runningCalculator(this.state.numbers, operator)
      })
    }
  }

  onChangeHandler(e: any, numbers: any) {
    this.setState({
      [e.target.name]: e.target.value
    })

    let numbersCp = [...numbers]
    for (const key in numbersCp) {
      if (numbersCp[key].label === e.target.name) {
        numbersCp[key].value = e.target.value
      }
    }

    this.setState({ numbers: numbersCp, operation: '' })
  }

  onCheckedHandler (name: string, num: number, numbers: any) {
    let numbersCp = [...numbers]
    let isValueExist = numbersCp.findIndex((item) => item.label === name)

    if (isValueExist === -1) {
      let payload = {
        label: name,
        value: num,
      }
      numbersCp.push(payload)
    } else {
      numbersCp.splice(isValueExist, 1)
    }

    this.setState({
      numbers: numbersCp,
      operation: ''
    })
  }

  render() {
    const { value1, value2, value3, numbers, isError } = this.state;
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Calculator}>
          <Header />
          <Alert isError={isError}/>
          <div className={classes.InputGroup}>
            <div className='Input'>
              <Input
                name="value1"
                value={value1}
                numbers={numbers}
                onChangeHandler={(e: any, numbers: any) => this.onChangeHandler(e, numbers)}
                onCheckedHandler={(name: string, num: number, numbers: any) => this.onCheckedHandler(name, num, numbers)}/>
            </div>
            <div className='Input'>
              <Input
                name="value2"
                value={value2}
                numbers={numbers}
                onChangeHandler={(e:any, numbers: any) => this.onChangeHandler(e, numbers)}
                onCheckedHandler={(name: string, num: number, numbers: any) => this.onCheckedHandler(name, num, numbers)}/>
            </div>
            <div className='Input'>
              <Input
                name="value3"
                value={value3}
                numbers={numbers}
                onChangeHandler={(e:any, numbers: any) => this.onChangeHandler(e, numbers)}
                onCheckedHandler={(name: string, num: number, numbers: any) => this.onCheckedHandler(name, num, numbers)}/>
            </div>
          </div>
          <div className={classes.BtnGroup}>
            <Button
              name="addition"
              activeOperator={this.state.operation}
              clicked={() => this.onSetOperationHandler('addition')}>+</Button>
            <Button
              name="subtraction"
              activeOperator={this.state.operation}
              clicked={() => this.onSetOperationHandler('subtraction')}>-</Button>
            <Button
              name="multiplication"
              activeOperator={this.state.operation}
              clicked={() => this.onSetOperationHandler('multiplication')}>x</Button>
            <Button
              name="division"
              activeOperator={this.state.operation}
              clicked={() => this.onSetOperationHandler('division')}>/</Button>
          </div>
          <div className={classes.Result}>
            <h3>Hasil</h3>
            <h2>{this.state.result}</h2>
          </div>
        </div>
      </div>
    )
  }
}
