import React, { useContext } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {
  const dataMovie = [
    {
      id:1,
      titulo: "La noche del demonio: La puerta roja",
      descripcion:
      "Nueve años después, Josh y Renai se han divorciado, Lorraine ha fallecido y Dalton ha ingresado en la universidad. Allí, los demonios del pasado resurgen para atormentarlo mientras, al mismo tiempo, Josh empieza a tener visiones de su padre.​",
    image:
      "https://mx.web.img2.acsta.net/pictures/23/06/07/21/09/0726541.jpg",
    categoria: "Terror",
    link: "https://www.imdb.com/title/tt13405778/?ref_=nv_sr_srsg_6_tt_8_nm_0_q_insidiu"

  },
  {
      id: 2,
      titulo: "El club de los lectores criminales",
      descripcion:
        "Tras ser cómplices de una broma de disfraces que acaba en un accidente mortal y un pacto de silencio, un grupo de jóvenes se verá amenazado por un escritor anónimo que quiere revelar su oscuro secreto. Su acosador amenaza con publicar en las redes sociales una sangrienta novela de terror basada en ellos. En cada capítulo morirá uno de ellos. Mientras desconfían unos de otros, el grupo iniciará una lucha por la supervivencia en medio del campus universitario. Cualquiera de ellos podría ser la próxima víctima, o el asesino.​ ​",
      image: "https://pics.filmaffinity.com/el_club_de_los_lectores_criminales-659803735-large.jpg",
      categoria: "Terror",
      link: "https://www.imdb.com/title/tt18260564/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_el%2520club%2520de"
    },
  
    {
      id: 3,
      titulo: "Sherpherd",
      descripcion:
        "Eric Black está perdido tras la misteriosa muerte de su adúltera esposa. Huyendo de su pasado hacia un nuevo trabajo como pastor, se encuentra atrapado y solo en una isla majestuosa y erosionada con un secreto que no presagia nada bueno. La locura en ascenso de un hombre se encuentra con una fuerza sobrenatural vengativa. Lo que comienza como una escapada perfecta azotada por el viento se convierte en una carrera para salvar su cordura y su vida.",
      image: "https://m.media-amazon.com/images/M/MV5BODE4NDdiOTctYzU0ZC00YzAwLThiZjUtZjA3ODA0NTY1MDVmXkEyXkFqcGdeQXVyNjE0MDkwOTg@._V1_.jpg",
      categoria: "Terror",
      link: "https://www.imdb.com/title/tt10196620/"
    },
  
    {
      id: 4,
      titulo: "Agente Stone",
      descripcion:
        "Rachel Stone es una agente de inteligencia, la única mujer que se interpone entre su poderosa organización mundial de mantenimiento de la paz y la pérdida de su activo más valioso y peligroso ",
      image:
        "https://pics.filmaffinity.com/Agente_Stone-705761560-large.jpg",
      categoria: "Accion",
      link: "https://www.imdb.com/title/tt13603966/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_agente%2520stone"
    },
  
    {
      id: 5,
      titulo: "Alerta Roja",
      descripcion:
        "n agente de la Interpol, la Organización Internacional de Policía Criminal, tiene como misión encontrar y capturar al ladrón de piezas de arte más buscado del mundo.",
      image:
        "https://es.web.img2.acsta.net/pictures/21/10/21/15/51/3458190.jpg",
      categoria: "Accion",
      link:"https://www.imdb.com/title/tt7991608/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_alerta%2520roja"
    },
  
    {
      id: 6,
      titulo: "Mision Imposible 3",
      descripcion:
        "El agente del FMI Ethan Hunt entra en conflicto con un peligroso y sádico traficante de armas que, en respuesta, amenaza su vida y la de su prometida.",
      image:
        "https://es.web.img3.acsta.net/pictures/14/02/26/10/46/064087.jpg",

      categoria: "Accion",
      link:"https://www.imdb.com/title/tt0317919/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_mision%2520imposible%25203"
    },
  
    {
      id: 7,
      titulo: "Entre la vida y la muerte",
      descripcion:
        "Después de sobrevivir a un accidente automovilístico que le quitó la vida a su novio, una adolescente cree que él está intentando reconectarse con ella desde el más allá.",
      image:
        "https://mx.web.img3.acsta.net/pictures/22/01/13/10/10/2132032.jpg",
    
      categoria: "Romance",
      link:"https://www.imdb.com/title/tt12819094/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_entre%2520la%2520vi"
    },
  
    {
      id: 8,
      titulo: "Hazme el favor",
      descripcion:
        "A punto de perder la casa en la que creció, Maddie descubre un intrigante anuncio clasificado de un trabajo: padres helicóptero millonarios buscan a alguien para poder “salir” con su hijo introvertido de 19 años, Percy, antes de que se vaya a la universidad. Para su sorpresa, Maddie, pronto descubre que el extraño Percy no es una cosa segura.",
      image:
        "https://palomaynacho-1f321.kxcdn.com/wp-content/uploads/2023/03/No-Hard-Feelings-Hazme-el-favor-poster-CinemaCon-con-Jennifer-Lawrence-1.jpg",
    
      categoria: "Romance",
      link:"https://www.imdb.com/title/tt15671028/?ref_=nv_sr_srsg_0_tt_3_nm_5_q_hazme%2520el%2520"
    },
  
    {
      id: 9,
      titulo: "365 días",
      descripcion:
        "Massimo es miembro de la mafia siciliana y Laura es una directora de ventas. Ella no espera que un viaje a Sicilia salve su relación, pero Massimo la secuestrará durante 365 días para que se enamore de él.​ ",
      image:
        "https://images.mymovies.net/images/film/cin/350x522/fid20184.jpg",
    
      categoria: "Romance",
      link:"https://www.imdb.com/title/tt10886166/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_365"
    }
  ]
  return (
    <Contexto.Provider value={{dataMovie}}>
        {children}
    </Contexto.Provider>
  )
}

