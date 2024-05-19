import Image from 'next/image'

import { getLayout } from '../components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from '../components/PageWrapper/PageWrapper'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => (
  <PageWrapper>
    <Image alt={'Next.js Logo'} height={37} priority src={'/next.svg'} width={180} />
  </PageWrapper>
)

Home.getLayout = getLayout

export default Home
