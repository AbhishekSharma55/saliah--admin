import React, {  ReactNode, Suspense } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
  <Suspense fallback={<h1>Loading...</h1>}>
    {children}
  </Suspense>
  )
}

export default layout