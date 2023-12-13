import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import publicRoutes from './app/routes/public'
import Loading from './app/shared/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={`${path}`} element={<Component />} />
        })}
      </Routes>
    </Suspense>
  )
}

export default App
