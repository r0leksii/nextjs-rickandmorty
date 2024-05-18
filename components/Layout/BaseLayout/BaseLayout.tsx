import React, { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { Layout } from '../Layout'

export const BaseLayout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
