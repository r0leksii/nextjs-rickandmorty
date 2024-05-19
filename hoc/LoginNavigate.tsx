import { FC, PropsWithChildren } from 'react'

import { useRouter } from 'next/router'

export const LoginNavigate: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const isAuth = true

  if (!isAuth) {
    router.push('/test').catch(console.error)
  }

  return <div>{children}</div>
}
