import * as fs from 'fs/promises'
import * as path from 'path'

import { getLayout } from 'components/Layout/BaseLayout/BaseLayout'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'

export const getStaticProps = async () => {
  const getParsedData = async (): Promise<{ title: string }> => {
    const filePath = path.join(process.cwd(), 'public', 'staticData.json')

    try {
      const jsonData = await fs.readFile(filePath, 'utf-8')

      return JSON.parse(jsonData)
    } catch (error) {
      return { title: 'Error' }
    }
  }

  const { title } = await getParsedData()

  return {
    props: {
      title,
    },
  }
}

type PropsType = {
  title: string
}

const Test = (props: PropsType) => {
  const { title } = props

  return <PageWrapper>{title}</PageWrapper>
}

Test.getLayout = getLayout
export default Test
