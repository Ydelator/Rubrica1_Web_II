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
    <div className='navbar'>
        <button onClick={modoOver}><span></span>Overview</button>
        <button onClick={modoContent}><span></span>Content</button>
        <button onClick={modoCreate}><span></span>Create</button>
    </div>
  )
}

export default Navbar