import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, ButtonProps } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['solid', 'outlined', 'ghost', 'link'],
    },
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isLeftLoading: {
      control: {
        type: 'boolean',
      },
    },
    asChild: {
      control: {
        disable: true,
        type: 'boolean',
      },
    },
  },
  args: { onClick: fn() },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultProps = {
  children: 'Button',
  asChild: false,
}

export const Default: Story = {
  args: {
    ...defaultProps,
  },
}

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
}

export const IsLoading: Story = {
  args: {
    ...defaultProps,
    isLoading: true,
  },
}

const AsChildTemplate = ({ asChild, ...props }: ButtonProps) => {
  return (
    <Button asChild={asChild} {...props}>
      <a
        href={'https://github.com/rafael-angonese'}
        target="_blank"
        rel="noreferrer"
      >
        Button as children component link
      </a>
    </Button>
  )
}

export const AsChild: Story = {
  render: () => <AsChildTemplate />,
  args: {
    ...defaultProps,
    asChild: true,
  },
}

export const CustomWithClassName: Story = {
  args: {
    ...defaultProps,
    className:
      'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg',
  },
}
