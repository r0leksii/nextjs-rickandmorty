import { API } from 'assets/api/api'
import { CharacterType } from 'assets/api/rick-and-morty-api'
import { CharacterCard } from 'components/Card/CharacterCard/CharacterCard'
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters()

  const paths = results.map(character => ({
    params: {
      id: character.id.toString(),
    },
  }))

  return {
    fallback: true,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}

  const character = await API.rickAndMorty.getCharacter(id as string)

  if (!character) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      character,
    },
  }
}

type PropsType = {
  character: CharacterType
}

const Character = (props: PropsType) => {
  const { character } = props

  const router = useRouter()

  if (router.isFallback) {
    return <PageWrapper>Loading...</PageWrapper>
  }

  const characterId = router.query.id

  const onBackCharacter = () => router.push('/characters')

  const onBackCharacters = () => router.back()

  return (
    <PageWrapper>
      <Wrapper>
        <IdText>ID: {characterId}</IdText>
        <CharacterCard character={character} key={character.id} />
        {/*<button onClick={onBackCharacters}>Back</button>*/}
        <Button onClick={onBackCharacter}>Back</Button>
        <Link href={{ pathname: '/characters' }}>Back to characters</Link>
      </Wrapper>
    </PageWrapper>
  )
}

Character.getLayout = getLayout
export default Character

const IdText = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`
