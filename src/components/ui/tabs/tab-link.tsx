import React from 'react'

import { Tab as TabMui, TabProps as TabPropsMui } from '@mui/material'

import { Link, LinkProps } from '@/components/ui/link/link'

type TabLinkProps = Omit<LinkProps, 'to'> &
  TabPropsMui & { to?: LinkProps['to'] }

export const TabLink: React.FC<TabLinkProps> = ({ to, value, ...props }) => {
  return (
    <>
      <TabMui
        sx={{ textTransform: 'none' }}
        to={to ?? value}
        value={value}
        component={Link}
        {...props}
      />
    </>
  )
}
