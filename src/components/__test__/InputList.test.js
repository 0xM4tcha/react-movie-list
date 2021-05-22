import { render, fireEvent } from '@testing-library/react'
import InputList from '../InputList'

it('inputListCheck', () => {
  const { getByTestId } = render(<InputList />)
  const input = getByTestId('input-list')
  expect(input).toBeTruthy()
})

describe('onChangeInputList', () => {
  it('onChange', () => {
    const { getByTestId } = render(<InputList />)
    const input = getByTestId('input-list')
    fireEvent.change(input, { target: {value:'batman'}})
    expect(input.value).toBe('batman')
  })
})