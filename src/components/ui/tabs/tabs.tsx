import React from 'react'

import { Tabs as TabsMui, TabsProps as TabsPropsMui } from '@mui/material'

interface TabsProps extends TabsPropsMui {}

export const Tabs: React.FC<TabsProps> = ({ ...props }) => {
  return (
    <>
      <TabsMui {...props} />
    </>
  )
}
