import React, {useState} from 'react'

const Overview = () => {
  
  const [favorito1, setFav1] = useState(false)
  const [favorito2, setFav2] = useState(false)
  const [favorito3, setFav3] = useState(false)
  const [favorito4, setFav4] = useState(false)

  React.useEffect(()=>{
    try {
      leer()
    } catch (error) {
      console.error(error)
    }
  },[])

  const leer = () =>{
    console.log(".."+ localStorage.getItem("fav1"))
    if (localStorage.getItem("fav1")==null) {
      setFav1(false)
    } else {
      const valor1 = JSON.parse(localStorage.getItem("fav1"))
      setFav1(valor1)
      console.log(JSON.parse((localStorage.getItem("fav1"))))
    }

    if (localStorage.getItem("fav2")==null) {
      setFav2(false)
    } else {
      const valor2 = JSON.parse(localStorage.getItem("fav2"))
      setFav2(valor2)
      console.log(JSON.parse(localStorage.getItem("fav2")))
    }

    if (localStorage.getItem("fav3")==null) {
      setFav3(false)
    } else {
      const valor3 = JSON.parse(localStorage.getItem("fav3"))
      setFav3(valor3)
      console.log(JSON.parse(localStorage.getItem("fav3")))
    }

    if (localStorage.getItem("fav4")==null) {
      setFav4(false)
    } else {
      const valor4 = JSON.parse(localStorage.getItem("fav4"))
      setFav4(valor4)
      console.log(JSON.parse(localStorage.getItem("fav4")))
    }
  }

  const guardar1 = () =>{
    console.log("->"+ JSON.parse(!favorito1))
    setFav1(!favorito1)
    localStorage.setItem("fav1",!favorito1)
    //console.log(localStorage.getItem("fav1"))
  }
  const guardar2 = () =>{
    setFav2(!favorito2)
    localStorage.setItem("fav2",!favorito2)

  }
  const guardar3 = () =>{
    setFav3(!favorito3)
    localStorage.setItem("fav3",!favorito3)

  }
  const guardar4 = () =>{
    setFav4(!favorito4)
    localStorage.setItem("fav4",!favorito4)

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