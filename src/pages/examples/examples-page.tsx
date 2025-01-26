import React from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'

import { TabLink } from '@/components/ui/tabs/tab-link'
import { Tabs } from '@/components/ui/tabs/tabs'
import { PageLayout } from '@/layouts/page-layout'

// TODO - Implement the examples pages

const ExamplesPage: React.FC = () => {
  const { pathname } = useLocation()

  const getActiveTab = () => {
    if (pathname.includes('/examples/button')) {
      return '/examples/button'
    }
    return pathname
  }

  const currentTab = getActiveTab()

  return (
    <PageLayout>
      <Tabs value={currentTab} variant="scrollable" scrollButtons="auto">
        <TabLink to="/examples" value={'/examples'} label={'Home'} />
        <TabLink
          to="/examples/dropzone"
          value={'/examples/dropzone'}
          label={'Dropzone'}
        />
        <TabLink to="/examples/tabs" value={'/examples/tabs'} label={'Tabs'} />
        <TabLink
          to="/examples/button"
          value={'/examples/button'}
          label={'Button'}
        />
        <TabLink
          to="/examples/select-inputs"
          value={'/examples/select-inputs'}
          label={'Select Inputs'}
        />
      </Tabs>

      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/dropzone" element={<>Dropzone</>} />
        <Route path="/tabs" element={<>Tabs</>} />
        <Route path="/button/*" element={<>Button With sub routes</>} />
        <Route path="/select-inputs" element={<>Select Inputs</>} />
      </Routes>
    </PageLayout>
  )
}

export default ExamplesPage
