
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
