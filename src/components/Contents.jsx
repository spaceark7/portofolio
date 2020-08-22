import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contents.css";
import image from "../image/DI4.png";

AOS.init({ duration: 2000, delay: 400 });
const Contents = () => {
  // const project1 = document.getElementsByClassName("project1");
  // project1.scrollIntoView({
  //   behavior: "smooth",
  //   block: "end",
  //   inline: "nearest",
  // });
  return (
    <div id="trigger-1" className="container-fluid">
      <h1 data-aos="fade-right" id="Title">
        Kenapa Harus Go Digital?
      </h1>

      <div className="row ">
        <div className="col-7">
          <p data-aos="fade-up-right" className="content-text1">
            Pemasaran secara digital bisa didefinisikan sebagai semua upaya
            pemasaran menggunakan perangkat elektronik/internet dengan beragam
            taktik marketing dan media digital dimana Anda dapat berkomunikasi
            dengan calon konsumen yang menghabiskan waktu di online. Ada beragam
            akses untuk para calon konsumen agar dapat melihat penawaran Anda,
            seperti Website, Blog, Media sosial{" "}
            <strong>(Instagram, Whatsapp, Facebook, dsb).</strong> Dari beberapa
            akses itulah mereka akan berkomunikasi kepada Anda.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#trigger-1"
          data-aos-anchor-placement="top-left"
          className="col-4 project project1"
        ></div>
        <div className="col-1"></div>
      </div>
      <div style={{ height: 150 }}>
        <div id="scroll-1"></div>
      </div>
      <div id="trigger-2"></div>

      <div className="row ">
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-anchor="#trigger-2"
          className="col-6 project project2"
        ></div>
        <div className="col-6">
          <p data-aos="fade-up-left" className="content-text2">
            Selain pandai memperhitungkan rugi dan untung. Sebagai seorang
            pelaku bisnis, anda juga dituntut untuk berfikir secara kreatif agar
            produk-produk anda dapat dilirik oleh masyarakat. Salah satu cara
            untuk memasarkan produk tersebut adalah dengan memasang
            <strong>
              iklan yang menarik dan kekinian untuk postingan feed serta story
              di media sosial anda.
            </strong>{" "}
            Sayangnya sampai saat ini masih banyak pelaku UKM Indonesia yang
            kerap menghindari atau melewatkan iklan begitu saja.
          </p>
        </div>
      </div>
      <div style={{ height: 150 }}>
        <div id="scroll-2"></div>
      </div>

      <div id="trigger-3"></div>
      <div className="row ">
        <div className="col-7">
          <p data-aos="fade-up-right" className="content-text3">
            Untuk Para pelaku bisnis yang bisnisnya sudah berjalan mungkin perlu
            meningkatkan branding produknya dengan menggunakan iklan di
            platform-platform media sosial yang berbayar sehingga jangkauan
            untuk mengiklankan produknya lebih luas sehingga lebih banyak
            konsumen yang dapat terjaring. Jangan Takut menggunakan Fitur{" "}
            <strong>
              iklan berbayar di sosial media (Facebook, Instagram, Youtube, dll)
              untuk menjangkau lebih banyak calon konsumen, Mulai dari Rp.
              20.000/Hari.
            </strong>
          </p>
        </div>
        <div
          id="trigger-4"
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-anchor="#trigger-3"
          className="col-4 project project3"
        ></div>

        <div style={{ height: 150 }}></div>
        <div id="trigger-3"></div>

        <div className="col-1"></div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Contents;
