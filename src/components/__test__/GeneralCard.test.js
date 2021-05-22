import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import GeneralCard from '../GeneralCard'

it('GeneralCardCheck', () => {
  const { getAllByTestId } = render(<GeneralCard />)
  const card = getAllByTestId('card')
  expect(card).toBeTruthy()
})

describe('click image card', () => {
  const { getByTestId } = render(<GeneralCard />)
  const image = getByTestId('click-image')
  fireEvent.click(image)
}) 