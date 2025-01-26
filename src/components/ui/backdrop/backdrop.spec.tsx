import { render } from '@testing-library/react'

import { Backdrop } from './backdrop'

describe('Backdrop', () => {
  it('should render with open prop as false', () => {
    const screen = render(
      <Backdrop open={false}>
        <div>Child Content</div>
      </Backdrop>,
    )
    expect(screen.getByText('Child Content')).not.toBeVisible()
  })

  it('should render with open prop as true', () => {
    const screen = render(
      <Backdrop open={true}>
        <div>Child Content</div>
      </Backdrop>,
    )

    expect(screen.getByText('Child Content')).toBeVisible()
  })

  it('should apply additional class names', () => {
    const screen = render(
      <Backdrop open={true} className="custom-class">
        <div>Child Content</div>
      </Backdrop>,
    )
    expect(screen.container.firstChild).toHaveClass(
      'bg-background -z-10 custom-class',
    )
  })

  it('should render children correctly', () => {
    const { getByText } = render(
      <Backdrop open={true}>
        <div>Child Content</div>
      </Backdrop>,
    )
    expect(getByText('Child Content')).toBeInTheDocument()
  })
})
