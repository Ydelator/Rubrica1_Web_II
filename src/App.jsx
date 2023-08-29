import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Datos} from './contexto/Contexto'
import Overview from './pages/Overview'
import Content from './pages/Content'
import Create from './pages/Create'

function App() {
  const [over, setOver] = useState(true)
  const [content, setContent] = useState(false)
  const [create, setCreate] = useState(false)

  return (
    <Datos>
      <div>
        <header>
          <Navbar setOver ={setOver} setContent={setContent} setCreate={setCreate}></Navbar>
        </header>
        {
          over ? <Overview/> : <></>
        }
        {
          content ? <Content/> : <></>
        }
        {
          create ? <Create setOver={setOver} setContent={setContent} setCreate={setCreate}/> : <></>
        }
        <Footer />
      </div>
    </Datos>
  )
}

export default App
