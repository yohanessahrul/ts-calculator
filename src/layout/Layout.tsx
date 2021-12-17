import React, { Component } from 'react'
import Button from '../components/button/Button'
import classes from './Layout.module.scss'
import Input from '../components/input/Input'

interface LayoutProps {
  value1?: number;
  value2?: number;
  value3?: number;
  numbers?: [any];
}

export default class layout extends Component<LayoutProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      value1: 10,
      value2: 2,
      value3: 5,
      numbers: [
        { label: 'value1', num: 0 },
        { label: 'value2', num: 0 },
        { label: 'value3', num: 0 }
      ]
    }
  }

  onChangeHandler (e: any) {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log('e', e.target.value)
    // console.log('e', e.target.name)
  }

  onCheckedHandler (name: string, num: number) {
    console.log('push to array', name, num)
    // console.log(`--->`, this.state)
  }

  render() {
    const { value1, value2, value3 } = this.props;
    return (
      <div className={classes.Wrapper}>
        <div className={classes.InputGroup}>
          <div className='Input'>
            <Input
              name="value1"
              value={value1}
              onChangeHandler={(e:any) => this.onChangeHandler(e)}
              onCheckedHandler={(name: string, num: number) => this.onCheckedHandler(name, num)}/>
          </div>
          <div className='Input'>
            <Input
              name="value2"
              value={value2}
              onChangeHandler={(e:any) => this.onChangeHandler(e)}
              onCheckedHandler={(name: string, num: number) => this.onCheckedHandler(name, num)}/>
          </div>
          <div className='Input'>
            <Input
              name="value3"
              value={value3}
              onChangeHandler={(e:any) => this.onChangeHandler(e)}
              onCheckedHandler={(name: string, num: number) => this.onCheckedHandler(name, num)}/>
          </div>
        </div>
        <div className={classes.BtnGroup}>
          <Button clicked={() => alert('tambah')}>+</Button>
          <Button clicked={() => alert('kurang')}>-</Button>
          <Button clicked={() => alert('kali')}>x</Button>
          <Button clicked={() => alert('bagi')}>/</Button>
        </div>
        <div className={classes.Result}>
          <h3>Hasil</h3>
          <h2>2</h2>
        </div>
      </div>
    )
  }
}
