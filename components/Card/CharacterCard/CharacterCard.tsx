import { CharacterType } from 'assets/api/rick-and-morty-api'
import Image from 'next/image'
import Link from 'next/link'
import aliveStatus from 'public/statuses/alive.png'
import deadStatus from 'public/statuses/dead.png'
import unknownStatus from 'public/statuses/unknown.png'
import styled from 'styled-components'

import { Card } from '../Card'
import { Status } from './Status/Status'

const statusImages = {
  Alive: aliveStatus,
  Dead: deadStatus,
  unknown: unknownStatus,
}

type PropsType = {
  character: CharacterType
}

export const CharacterCard = (props: PropsType) => {
  const { id, image, name, status } = props.character

  return (
    <Card name={name}>
      <Status src={statusImages[status]} status={status} />
      <Link href={`/characters/${id}`}>
        <ImageBlock alt={name} height={300} priority src={image} width={300} />
      </Link>
    </Card>
  )
}

const ImageBlock = styled(Image)`
  object-fit: cover;
`
