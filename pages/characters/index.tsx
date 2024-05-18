import { API } from '../../assets/api/api'
import { CharacterType, ResponseType } from '../../assets/api/rick-and-morty-api'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { Header } from '../../components/Header/Header'
import { CharacterCard } from '../../components/Card/CharacterCard/CharacterCard'

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

  return (
    <PageWrapper>
      <Header />
      {characterList}
    </PageWrapper>
  )
}

export default Characters
