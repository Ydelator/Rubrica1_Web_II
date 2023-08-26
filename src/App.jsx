import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Datos} from './contexto/Contexto'
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
      </div>
    </Datos>
  )
}

export default App
