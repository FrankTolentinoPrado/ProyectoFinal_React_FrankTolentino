import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div>
           <footer className="footer">
                <div className="footer-content">
                  <h3>Flexvyne Web</h3>
                  <p>
                    Bienvenidos a todos los fans del anime y coleccionistas. Soy Frank Piero Tolentino Prado, dueño de Flexvyne Web. Aquí podrás encontrar: peluches, ropa y figuras de anime, además de Funkos. Te invito a explorar nuestra tienda y unirte a la familia Flexvyne Web. Juntos, creamos momentos especiales mientras alimentamos nuestra pasión por el anime y más.
                  </p>
                  <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                  <div className="footer-bottom">
                    <p>copyright &copy;2023 Flexvyne. designed by Frank Tolentino Prado <span></span></p>
                  </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;