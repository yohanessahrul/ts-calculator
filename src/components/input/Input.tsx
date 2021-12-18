import React, { FC, InputHTMLAttributes, useState } from 'react'
import classes from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: number;
  numbers?: any;
  onChangeHandler?: any;
  onCheckedHandler?: any;
}

const Input: FC<InputProps> = ({ name, value, numbers, onChangeHandler, onCheckedHandler}) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = (e: any, numbers: any) => {
    if (e.target.value !== '') {
      onChangeHandler(e, numbers)
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }

  console.log(`numbers`, numbers)

  return (
    <div className={classes.Wrapper}>
      <input
        type="number"
        min={0}
        name={name}
        defaultValue={value}
        onChange={(e) => onChange(e, numbers)}></input>
      
      <input
        id="checkbox"
        className={classes.Checkbox}
        type="checkbox"
        name={name}
        disabled={value && !isChecked ? false : true}
        onChange={() => onCheckedHandler(name, value, numbers)}></input>
    </div>
  )
}

export default Input;
