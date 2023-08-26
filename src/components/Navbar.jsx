import React from 'react'

const Navbar = (props) => {
    const modoOver = () =>{
        props.setOver(true)
        props.setContent(false)
        props.setCreate(false)
    }
    const modoContent = () =>{
        props.setOver(false)
        props.setContent(true)
        props.setCreate(false)
    }
    const modoCreate = () =>{
        props.setOver(false)
        props.setContent(false)
        props.setCreate(true)
    }

  return (
    <div>
        <button onClick={modoOver}>Overview</button>
        <button onClick={modoContent}>Content</button>
        <button onClick={modoCreate}>Create</button>
    </div>
  )
}

export default Navbar