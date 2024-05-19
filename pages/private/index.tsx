import { getLayout } from 'components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'

import { LoginNavigate } from '../../hoc/LoginNavigate'

const Private = () => {
  return (
    <LoginNavigate>
      <PageWrapper>Private Page</PageWrapper>
    </LoginNavigate>
  )
}

Private.getLayout = getLayout
export default Private
