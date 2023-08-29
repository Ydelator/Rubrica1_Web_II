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
    setFav1(!favorito1)
    localStorage.setItem("fav1",!favorito1)
    //console.log(localStorage.getItem("fav1"))
    localStorage.setItem("fav1",!favorito1)
    console.log(localStorage.getItem("fav1"))
  }
  const guardar2 = () =>{
    setFav2(!favorito2)
    localStorage.setItem("fav2",!favorito2)

    localStorage.setItem("fav2",!favorito2)

  }
  const guardar3 = () =>{
    setFav3(!favorito3)
    localStorage.setItem("fav3",!favorito3)

    localStorage.setItem("fav3",!favorito3)

  }
  const guardar4 = () =>{
    setFav4(!favorito4)
    localStorage.setItem("fav4",!favorito4)

    localStorage.setItem("fav4",!favorito4)

  }
  return (
    <div className='container-over'>
      <div className="card-over">
        <img src="https://cdn-icons-png.flaticon.com/512/2495/2495007.png" alt="imagen" />
        <h2>Noticias</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar1}>
            {
              favorito1 ? <i id='relleno' className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>              
            }
          </button>
        </div>
      </div>
      <div className="card-over">
        <img src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-movie-premiere-show-or-cinema-with-camera-picture-image_7834097.png" alt="imagen" />
        <h2>Cartelera</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar2}>
            {
              favorito2 ? <i id='relleno' className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
      <div className="card-over">
        <img src="https://www.laizquierdadiario.cl/IMG/arton5354.png?1414631299" alt="imagen" />
        <h2>Estrenos proximos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar3}>
            {
              favorito3 ? <i id='relleno' className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
      <div className="card-over">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png" alt="imagen" />
        <h2>Reseñas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.</p>
        <div className="cont-favorite">
          <button onClick={guardar4}>
            {
              favorito4 ? <i id='relleno' className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Overview
