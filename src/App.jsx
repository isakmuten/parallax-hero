import {} from 'react'
import '../src/main'

import Global from './styles/core/Global';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Global />
      <Navbar />
      <Home />    
    </>
  )
}

export default App
