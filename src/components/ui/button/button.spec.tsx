import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button', () => {
  it('should render without crashing', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('should apply different variants and colors correctly', () => {
    const { rerender } = render(
      <Button variant="solid" color="primary">
        Solid Primary
      </Button>,
    )
    expect(screen.getByText('Solid Primary')).toHaveClass('bg-primary')

    rerender(
      <Button variant="outlined" color="secondary">
        Outlined Secondary
      </Button>,
    )
    expect(screen.getByText('Outlined Secondary')).toHaveClass('text-secondary')

    rerender(
      <Button variant="ghost" color="success">
        Ghost Success
      </Button>,
    )
    expect(screen.getByText('Ghost Success')).toHaveClass('text-success')
  })

  it('should handle asChild prop', () => {
    render(
      <Button asChild>
        <a href="https://github.com/rafael-angonese">Child Button</a>
      </Button>,
    )
    expect(screen.getByText('Child Button').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/rafael-angonese',
    )
  })

  it('should pass additional props correctly', () => {
    render(<Button data-testid="custom-button">Custom Button</Button>)
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })
})
