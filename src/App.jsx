import React from 'react'
import MainRouter from './Components/NavRoutes/MainRouter'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='w-full min-h-full overflow-hidden'>
      <Toaster position="top-center" reverseOrder={false} />
      <MainRouter/>
    </div>
  )
}

export default App