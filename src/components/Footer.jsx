import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4 m-b-30"
                  style={{ borderRight: "1px solid" }}
                >
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    WEBSITE LINKS
                  </div>

                  <div className="footer-links">
                    <a href="#">Mapa de sitio</a>
                    <a href="#">Termino y Condiciones de uso del sitio</a>
                    <a href="#">Aviso de Privacidad</a>
                    <a href="#">Politica de Privacidad</a>
                    <a href="#">Sobre Garnier</a>
                  </div>
                </div>

                <div
                  className="col-md-4 m-b-30"
                  style={{ borderRight: "1px solid" }}
                >
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    SIGUENOS
                  </div>

                  <div>
                    <img
                      style={{ width: "40px", margin: "1rem" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
                    />
                    <img
                      style={{ width: "40px", margin: "1rem" }}
                      src="https://www.facebook.com/images/fb_icon_325x325.png"
                    />
                    <img
                      style={{ width: "40px", margin: "1rem" }}
                      src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
                    />
                    <div className="footer-links">
                        Desarroladores
                    <a href="https://github.com/Marito1210" target="_blank">Maroly Vanessa Velasquez Padilla</a>
                    <a href="https://github.com/Ydelator" target="_blank">Yan Sebastian de la Torre Truyol</a>
                    <a href="https://github.com/aldopuello" target="_blank">Aldo Puello Ramirez</a>
                  </div>
                  </div>
                </div>

                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    SERVICIO AL CLIENTE
                  </div>
                  <p className="white-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500 text of the
                    printing.
                  </p>
                </div>
              </div>
            </div>
          </footer>
          <div className="footer-bottom">
            Copyright © 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer