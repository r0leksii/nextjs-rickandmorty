import { API } from 'assets/api/api'
import { CharacterType, ResponseType } from 'assets/api/rick-and-morty-api'
import { CharacterCard } from 'components/Card/CharacterCard/CharacterCard'
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()

  return {
    props: {
      characters,
    },
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
