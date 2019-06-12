import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            <i className="fas fa-home hometitle" />{" "}
            <span className="hometitle">Aluga Brasil</span>
          </h1>
          <p className="lead">
            Alugue casas, apartamentos, galpões e qualquer outro tipo de imóvel
            na região Oeste da Bahia
          </p>
          <div className="grid-container">
            <div className="card">
              <div className="bg-img">
                <a href="/barreiras">
                  <img
                    src="https://i.imgur.com/JMRijwq.jpg"
                    alt="cidade barreiras"
                    className="image"
                  />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="bg-img">
                <a href="/lem">
                  <img
                    src="https://i.imgur.com/aVRLYrP.jpg"
                    alt="cidade LEM"
                    className="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
