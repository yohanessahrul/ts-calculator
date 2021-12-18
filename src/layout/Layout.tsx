import React, { Component, useEffect } from 'react'
import Button from '../components/button/Button'
import classes from './Layout.module.scss'
import Input from '../components/input/Input'

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
}

export default class layout extends Component<{}, Layoutinterface> {
  constructor(props: any) {
    super(props)
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      numbers: [],
      operation: ''
    }
  }
  
  componentDidUpdate() {
    if (this.state.operation) {
      console.log(`this.state.operation`, this.state.operation)
    }
  }

  onSetOperationHandler (operator: string) {
    this.setState({operation: operator})
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

    this.setState({ numbers: numbersCp })
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
      numbers: numbersCp
    })
  }

  render() {
    const { value1, value2, value3, numbers } = this.state;
    return (
      <div className={classes.Wrapper}>
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
          <Button clicked={() => this.onSetOperationHandler('addition')}>+</Button>
          <Button clicked={() => this.onSetOperationHandler('subtraction')}>-</Button>
          <Button clicked={() => this.onSetOperationHandler('multiplication')}>x</Button>
          <Button clicked={() => this.onSetOperationHandler('division')}>/</Button>
        </div>
        <div className={classes.Result}>
          <h3>Hasil</h3>
          <h2>2</h2>
        </div>
      </div>
    )
  }
}
