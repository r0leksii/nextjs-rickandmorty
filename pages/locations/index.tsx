import { LocationType, ResponseType } from '../../assets/api/rick-and-morty-api'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { useQuery } from '@tanstack/react-query'
import { dehydrate, QueryClient } from '@tanstack/query-core'
import { Card } from '../../components/Card/Card'
import { getLayout } from '../../components/Layout/BaseLayout/BaseLayout'

const getLocations = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/location`, {
    method: 'GET',
  })
  return await response.json()
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(['locations'], getLocations)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Locations = () => {
  const { data: locations } = useQuery<ResponseType<LocationType>>([`locations`], getLocations)

  if (!locations) return null

  let locationsList = null
  if (locations && locations.results) {
    locationsList = locations.results.map(location => (
      <Card key={location.id} name={location.name} />
    ))
  }

  return <PageWrapper>{locationsList}</PageWrapper>
}

Locations.getLayout = getLayout
export default Locations
