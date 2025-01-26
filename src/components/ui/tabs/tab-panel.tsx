import React, { ComponentProps } from 'react'

import { cnBase } from 'tailwind-variants'

interface TabPanelProps extends ComponentProps<'div'> {
  value: string
  currentTab: string
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  currentTab,
  className,
  ...props
}) => {
  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== currentTab}
        id={`full-width-tabpanel-${value}`}
        aria-labelledby={`full-width-tab-${value}`}
        className={cnBase('', className)}
        {...props}
      >
        {value === currentTab && children}
      </div>
    </>
  )
}
