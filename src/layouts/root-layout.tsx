import React from 'react'

interface RootLayoutProps extends React.ComponentProps<'div'> {}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-background text-foreground antialiased">
        {children}
      </div>
    </>
  )
}
