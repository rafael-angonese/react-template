import React from 'react'

import { Tab as TabMui, TabProps as TabPropsMui } from '@mui/material'

export interface TabProps extends TabPropsMui {}

export const Tab: React.FC<TabProps> = ({ ...props }) => {
  return (
    <>
      <TabMui sx={{ textTransform: 'none' }} {...props} />
    </>
  )
}
