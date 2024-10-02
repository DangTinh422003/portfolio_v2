import { type PropsWithChildren } from 'react'

import PageHeader from '@/components/PageHeader'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PageHeader
        subTitle="resume"
        mainTitle={{
          normal: 'about',
          strong: 'me',
        }}
      />
      {children}
    </div>
  )
}

export default layout
