import { fireEvent, render, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Dropzone } from './dropzone'

describe('Dropzone', () => {
  it('should handle file drop events', async () => {
    const handleDrop = vi.fn()
    const screen = render(
      <Dropzone
        accept={{
          'text/plain': ['.txt'],
        }}
        onDrop={handleDrop}
      />,
    )

    const input = await screen.findByTestId('file-upload')

    const file = new File(['file content'], 'test-file.txt')

    fireEvent.drop(input, {
      target: {
        files: [file],
      },
    })

    await waitFor(() => {
      expect(handleDrop).toHaveBeenCalled()
    })
  })
})
