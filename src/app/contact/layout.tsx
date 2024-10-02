import { type PropsWithChildren } from 'react'

import PageHeader from '@/components/PageHeader'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <PageHeader
        subTitle="contact"
        mainTitle={{
          normal: 'get in',
          strong: 'touch',
        }}
      />
      {children}
    </div>
  )
}

export default layout
