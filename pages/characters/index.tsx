import { API } from '../../assets/api/api'
import { CharacterType, ResponseType } from '../../assets/api/rick-and-morty-api'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { CharacterCard } from '../../components/Card/CharacterCard/CharacterCard'
import { getLayout } from '../../components/Layout/BaseLayout/BaseLayout'

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
    <CharacterCard key={characters.id} character={characters} />
  ))

  return <PageWrapper>{characterList}</PageWrapper>
}

Characters.getLayout = getLayout
export default Characters
