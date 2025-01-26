import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Link } from './link'

describe('Link', () => {
  it('should link render link text', () => {
    const screen = render(
      <BrowserRouter>
        <Link to="/">Home</Link>
      </BrowserRouter>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
