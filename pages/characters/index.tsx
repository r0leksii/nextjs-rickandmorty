import { API } from 'assets/api/api'
import { CharacterType, ResponseType } from 'assets/api/rick-and-morty-api'
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import dynamic from 'next/dynamic'

const CharacterCard = dynamic(() =>
  import('components/Card/CharacterCard/CharacterCard').then(module => module.CharacterCard)
)

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()

  return {
    props: {
      characters,
    },
    // revalidate: 60,
  }
}

type PropsType = {
  characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {
  const { characters } = props

  const characterList = characters.results.map(characters => (
    <CharacterCard character={characters} key={characters.id} />
  ))

  return <PageWrapper>{characterList}</PageWrapper>
}

Characters.getLayout = getLayout
export default Characters
