import React from "react";
import "../styles/header-bar.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav-bar";
import NavBar from "./Nav-bar";
import "animate.css";
import Di from "../image/DI4.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HeaderBar = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="header">
          <img className="header-img animate__backInUp" src={Di} alt="" />
          <h1 className="line animate__bounceInLeft">
            Bersiap untuk industri digital 4.0
          </h1>
          <div className="subtitle-box animate__fadeInUp">
            <p className="header-subtitle">
              Untuk menghadapi era Revolusi Industri 4.0 yang masih tergolong
              baru ini, diperlukan persiapan khusus yang mendukung terutama jika
              Anda adalah pelaku industri UKM dan bisnis rumahan lainnya. Salah
              satunya adalah pengiklanan bisnis dan produk anda untuk kebutuhan
              standar era kekinian.
            </p>
          </div>
        </div>
        <div className="scroll-down"></div>
      </div>
    </div>

    // <div className="container-fluid ">
    //   <NavBar />
    //   <div className="row align-items-center">
    //     <div className="col-8 left-box">
    //       <p className="h2 title-text">Bersiap untuk Industri Digital 4.0</p>
    //     </div>
    //     <div className="col right-box">
    //       <p className="h2 title-text">Kanan</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeaderBar;
