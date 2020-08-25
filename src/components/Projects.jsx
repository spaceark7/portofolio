import React from "react";
import "../styles/projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="project-header" data-aos="fade-right">
        <h2 className="project-title">Apa yang kami tawarkan?</h2>
        <p id="trigger-content" className="project-description">
          Untuk kemudahan anda menjalankan bisnis anda kami berupaya memberikan
          dukungan yang terbaik dengan menyediakan jasa{" "}
          <strong>Editing, Desain, Branding</strong> untuk setiap produk anda.
          Khusus bagi para pelaku <strong>Usaha Kecil Mikro (UKM) </strong> kami
          memberikan layanan gratis desain untuk produk anda. demi tercapainya
          UKM Go Digital.
        </p>
      </div>
      <section
        className="pSection"
        data-aos-duration="500"
        data-aos="fade-up"
        data-aos-anchor="#trigger-content"
      >
        <div className="slide">
          <div className="content">
            <h2 className="title-text">.Design Iklan Sosmed</h2>
            <p className="content-text">
              Kami menyediakan jasa editing dan design visual untuk produk anda
              sesuai dengan standar industri. Dengan format untuk Story dan Feed
              akun intagram bisnis anda. Agar membuat produk anda lebih menarik
              untuk para followers.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2 className="title-text">.Desain Lainnya?</h2>
            <p className="content-text">
              Tidak hanya itu, kami juga menyediakan berbagai macam format
              desain visual produk untuk media cetak seperti{" "}
              <strong>
                Banner, Billboard, Spanduk dan Media Cetak kecil seperti
                pamplet, brosur dan lainnya
              </strong>
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2 className="title-text">#Branding</h2>
            <p className="content-text">
              Bagi anda yang serius menjalankan bisnis pasti menginginkan produk
              anda memiliki karakteristik dan khas agar cepat dikenali oleh
              masyarakat luas. Maka dari itu kami menyediakan pelayanan Branding
              untuk usaha anda dimulai dari desain{" "}
              <strong>
                Logo, Iklan Sosmed, Kemasan, Banner, hingga desain untuk stand
                tempat anda berjualan.
              </strong>
              kami Tim Explore Creative siap memberikan jasa pelayanan dengan
              harga yang terjangkau.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2 className="title-text">#Video Editing</h2>
            <p className="content-text">
              Bagi anda yang ingin produknya tampil maksimal saat di iklankan,
              kami juga menyediakan layanan untuk pembuatan video produk anda
              dengan format untuk posting di{" "}
              <strong>
                Instagram, Facebook, Youtube dan Platform iklan lainnya.
              </strong>
              Contoh seperti iklan Grab, Gojek pada Youtube dan Platform
              lainnya.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2 className="title-text">#Pengiklanan Digital</h2>
            <p className="content-text">
              Tentunya anda ingin produk anda cepat dikenal di masyarakat luas,
              bukan? Tidak perlu repot - repot! Kami siap membantu anda untuk
              tetap fokus pada proses bisnis anda, Lebih dari 200 juta pengguna
              sosial media di Indonesia. Dengan memanfaatkan sistem
              paid-ads(iklan berbayar) di facebook, Instagram dan Youtube. Anda
              cukup menyisihkan 20 ribu rupiah perhari agar produk anda bisa
              cepat dikenal dan menjangkau calon konsumen,
            </p>
          </div>
        </div>
      </section>
      <div className="project-CTA">
        <h2 className="project-CTA-header">
          Ayo Jadikan Bisnis Anda Go Digital!
        </h2>
        <p className="project-CTA-description">
          Tunggu apalagi? Bersegera adaptasi Industri Digital 4.0 sekarang juga.
          <strong>
            Khusus untuk pelaku bisnis UKM daerah Cipanas - Puncak kami
            memberikan layanan desain iklan gratis untuk 5 produk anda!
          </strong>{" "}
          Mari kita berkembang bersama. #IndonesiaMaju
        </p>
        <div className="project-CTA-button">
          <button>Join Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
