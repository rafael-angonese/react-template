import { render } from '@testing-library/react'

import { FormControl } from '@/components/ui/form-control/form-control'

import { FormLabel } from './form-label'

describe('FormLabel', () => {
  it('should render children correctly', () => {
    const screen = render(<FormLabel>Label Text</FormLabel>)
    expect(screen.getByText('Label Text')).toBeInTheDocument()
  })

  it('should display required asterisk when required prop is true', () => {
    const screen = render(<FormLabel required>Label Text</FormLabel>)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('should apply additional class names', () => {
    const screen = render(
      <FormLabel className="custom-class">Label Text</FormLabel>,
    )
    expect(screen.getByText('Label Text')).toHaveClass('custom-class')
  })

  it('should apply error class when error state is true', () => {
    const screen = render(
      <FormControl error>
        <FormLabel>Label Text</FormLabel>
      </FormControl>,
    )
    expect(screen.getByText('Label Text')).toHaveClass('text-red-500')
  })

  it('should apply disabled class when disabled state is true', () => {
    const screen = render(
      <FormControl disabled>
        <FormLabel>Label Text</FormLabel>
      </FormControl>,
    )
    expect(screen.getByText('Label Text')).toHaveClass(
      'opacity-50 cursor-not-allowed',
    )
  })
})
