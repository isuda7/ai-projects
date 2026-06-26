import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

function App() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-background text-primary">Loading...</div>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

export default App
