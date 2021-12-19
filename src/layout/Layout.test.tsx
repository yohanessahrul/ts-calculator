import Layout from './Layout'
import * as ReactDOM from 'react-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('Layout component test', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Layout />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  test('renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input')
    expect(inputs).toHaveLength(6)
    expect(inputs[0].name).toBe('value1')
    expect(inputs[2].name).toBe('value2')
    expect(inputs[4].name).toBe('value3')

    const label = container.querySelector('label')
    expect(label).not.toBeInTheDocument()
  })

  test('renders correctly initial document with data-testid query', () => {
    expect(container.querySelectorAll("[data-testid='input-number']")).toHaveLength(3)
    expect(container.querySelectorAll("[data-testid='check-item']")).toHaveLength(3)
    const input1 = container.querySelectorAll("[data-testid='input-number']")
    expect(input1[0]).toBeInTheDocument()
  })

  test('passing division button', () => {
    // render(<Layout />)
    const inputs = container.querySelectorAll('input');
    const number1 = inputs[0];
    const number2 = inputs[2];
    const number3 = inputs[4];

    const checked1 = inputs[1];
    const checked2 = inputs[3];
    const checked3 = inputs[5];

    const divisionButton: any = container.querySelector("[data-testid='division-btn']")
    fireEvent.change(number1, { target: { value: 100 } });
    fireEvent.change(number2, { target: { value: 25 } });
    fireEvent.change(number3, { target: { value: 2 } });

    fireEvent.click(checked1);
    fireEvent.click(checked2);
    fireEvent.click(checked3);
    fireEvent.click(divisionButton);

    // screen.debug()
    const result = container.querySelector("[data-testid='result'")
    expect(result?.innerHTML).toBe('2')
    expect(result).toBeInTheDocument()
  })
})