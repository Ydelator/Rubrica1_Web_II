import React from 'react'
import { Contexto } from '../contexto/Contexto'

const Overview = () => {
  const [favorito1, setFav1] = React.useState(false)
  const [favorito2, setFav2] = React.useState(false)
  const [favorito3, setFav3] = React.useState(false)
  const [favorito4, setFav4] = React.useState(false)

  React.useEffect(()=>{
    try {
      const valor1 = localStorage.getItem("fav1")
      const valor2 = localStorage.getItem("fav2")
      const valor3 = localStorage.getItem("fav3")
      const valor4 = localStorage.getItem("fav4")
      setFav1(valor1)
      setFav2(valor2)
      setFav3(valor3)
      setFav4(valor4)
      console.log(valor1)
      console.log(valor2)
      console.log(valor3)
      console.log(valor4)
    } catch (error) {
      console.error(error)
    }
  },[])

  const guardar1 = () =>{
    setFav1(!favorito1)
    localStorage.setItem("fav1",favorito1)
    console.log(localStorage.getItem("fav1"))
  }
  const guardar2 = () =>{
    setFav2(!favorito2)
    localStorage.setItem("fav2",favorito2)
  }
  const guardar3 = () =>{
    setFav3(!favorito3)
    localStorage.setItem("fav3",favorito3)
  }
  const guardar4 = () =>{
    setFav4(!favorito4)
    localStorage.setItem("fav4",favorito4)
  }
  return (
    <div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Data_loss_of_image_file.JPG/200px-Data_loss_of_image_file.JPG" alt="imagen" />
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar1}>
            {
              favorito1 ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Data_loss_of_image_file.JPG/200px-Data_loss_of_image_file.JPG" alt="imagen" />
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar2}>
            {
              favorito2 ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Data_loss_of_image_file.JPG/200px-Data_loss_of_image_file.JPG" alt="imagen" />
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar3}>
            {
              favorito3 ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Data_loss_of_image_file.JPG/200px-Data_loss_of_image_file.JPG" alt="imagen" />
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar4}>
            {
              favorito4 ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview