import { render } from '@testing-library/react'
import GeneralCardDetail from '../GeneralCardDetail'

it('GeneralCardDetailCheck', () => {
  const { getByTestId, getAllByTitle } = render(<GeneralCardDetail />)
  const box = getByTestId('box-wrapper')
  const list = getAllByTitle('list-details')
  expect(box).toBeTruthy()
  expect(list).toBeTruthy()
})