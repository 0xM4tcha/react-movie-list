import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import GeneralModal from '../GeneralModal'

it('GeneralModalCheck', () => {
  const { queryAllByText } = render(<GeneralModal />)
  const modal = queryAllByText('modal')
  const image = queryAllByText('image')
  const button = queryAllByText('button')
  expect(modal).toBeTruthy()
  expect(image).toBeTruthy()
  expect(button).toBeTruthy()
})

describe('close button modal', () => {
  const { getByTestId } = render(<GeneralModal />)
  const modal = getByTestId('modal')
  const buttonClose = getByTestId('button')
  fireEvent.click(buttonClose)
  expect(modal.className).toBe('modal ')
})