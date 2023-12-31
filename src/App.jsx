import './App.css'
import Header from './components/header & footer/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/header & footer/Footer'

function App() {

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
