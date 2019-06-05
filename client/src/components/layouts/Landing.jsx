import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            <i className="fas fa-home hometitle" />{" "}
            <span className="hometitle">Aluga Barreiras</span>
          </h1>
          <p className="lead">
            Alugue casas, apartamentos, galpões e qualquer outro tipo de imóvel
            na região Oeste da Bahia
          </p>
          <div className="grid-container">
            <div className="card">
              <div className="bg-img">
                <Link to="/">
                  <img
                    src="https://jcconcursos.uol.com.br/media/_versions/noticia/foto-barreiras-ba_widelg.jpg"
                    alt="cidade barreiras"
                    className="image"
                  />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="bg-img">
                <Link to="/">
                  <img
                    src="https://jcconcursos.uol.com.br/media/_versions/noticia/foto-barreiras-ba_widelg.jpg"
                    alt="cidade barreiras"
                    className="image"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
