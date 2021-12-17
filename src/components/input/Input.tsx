import React, { FC, InputHTMLAttributes, useState } from 'react'
import classes from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: number;
  onChangeHandler?: any;
  onCheckedHandler?: any;
}

const Input: FC<InputProps> = ({ name, value, onChangeHandler, onCheckedHandler}) => {
  const [number, setNumber] = useState(0)
  const [isChecked, setIsChecked] = useState(false)

  const onUpdateHandler = (e: any) => {
    if (e.target.value !== '') {
      setNumber(e.target.value)
      onChangeHandler(e)
      setIsChecked(true)
    } else {
      setNumber(0)
      setIsChecked(false)
    }
  }

  console.log('value', value)

  return (
    <div className={classes.Wrapper}>
      <input
        type="number"
        name={name}
        defaultValue={value || ""}
        onChange={(e) => onUpdateHandler(e)}></input>
      <input
        className={classes.Checkbox}
        type="checkbox"
        name={name}
        disabled={!isChecked}
        onChange={() => onCheckedHandler(name, number)}></input>
    </div>
  )
}

export default Input;
