import { render } from '@testing-library/react'

import { FormErrorMessage } from './form-error-message'

describe('FormErrorMessage', () => {
  it('should render without crashing', () => {
    const screen = render(
      <FormErrorMessage>Test Error Message</FormErrorMessage>,
    )
    expect(screen.getByText('Test Error Message')).toBeInTheDocument()
    expect(screen.getByText('Test Error Message')).toBeVisible()
  })

  it('should apply error prop correctly', () => {
    const screen = render(
      <FormErrorMessage error>Test Error Message</FormErrorMessage>,
    )
    expect(screen.getByText('Test Error Message')).toHaveClass('Mui-error')
  })

  it('should pass additional props correctly', () => {
    const screen = render(
      <FormErrorMessage data-testid="error-message">
        Test Error Message
      </FormErrorMessage>,
    )
    expect(screen.getByTestId('error-message')).toBeInTheDocument()
  })
})
