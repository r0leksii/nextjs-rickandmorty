import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
import { Header } from '../Header/Header'
import styled from 'styled-components'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
const Main = styled.div`
  width: 100%;
  padding-bottom: 0.1rem; /* 10/100 */
  overflow: hidden;
`
