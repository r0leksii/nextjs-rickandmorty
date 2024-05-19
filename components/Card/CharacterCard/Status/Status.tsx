import { CharacterStatusType } from 'assets/api/rick-and-morty-api'
import Image, { StaticImageData } from 'next/image'

type PropsType = {
  src: StaticImageData
  status: CharacterStatusType
}

export const Status = (props: PropsType) => {
  const { src, status } = props

  return (
    <>
      <Image alt={status} height={20} src={src} width={20} />
    </>
  )
}
