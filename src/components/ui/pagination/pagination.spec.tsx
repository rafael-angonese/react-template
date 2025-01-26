import { render } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { Mock } from 'vitest'

import { Pagination } from './pagination'

let user: UserEvent
let onChangePageCallback: Mock<(value: number) => void>

describe('Pagination', () => {
  beforeEach(() => {
    user = userEvent.setup()
    onChangePageCallback = vi.fn()
  })

  it('should calculate the amount of pages', () => {
    const wrapper = render(
      <Pagination
        page={1}
        count={100}
        onChange={(_, value) => onChangePageCallback(value)}
      />,
    )
    expect(wrapper.getByText('1')).toBeInTheDocument()
    expect(wrapper.getByText('100')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        page={1}
        count={200}
        onChange={(_, value) => onChangePageCallback(value)}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Go to next page',
    })

    await user.click(nextPageButton)

    expect(onChangePageCallback).toHaveBeenCalledWith(2)
  })

  it('should be able to navigate to the previous page', async () => {
    const wrapper = render(
      <Pagination
        page={3}
        count={200}
        onChange={(_, value) => onChangePageCallback(value)}
      />,
    )

    const backPageButton = wrapper.getByRole('button', {
      name: 'Go to previous page',
    })

    await user.click(backPageButton)

    expect(onChangePageCallback).toHaveBeenCalledWith(2)
  })
})
