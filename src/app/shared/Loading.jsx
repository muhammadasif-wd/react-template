import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
  return (
    <main className="flex h-screen min-h-full flex-col justify-center">
      <Spinner label="Loading..." color="default" labelColor="foreground" />
    </main>
  )
}

export default Loading
