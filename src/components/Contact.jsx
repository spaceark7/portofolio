import React, { Component } from "react";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-wrapper">
        <section className="contact">
          <div className="contact-content">
            <h2 className="contact-title">Hubungi Kami</h2>
            <p className="contact-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ullam magni quibusdam voluptatem necessitatibus quo incidunt
              adipisci facilis dolores, optio aspernatur quam eaque labore error
              suscipit quos. Autem, aperiam pariatur.
            </p>
          </div>
          <div className="contact-container">
            <div className="contact-form">
              <form action="">
                <h2>Join Sekarang!</h2>
                <div className="inputBox">
                  <input
                    type="text"
                    name=""
                    required="required"
                    placeholder="Name Lengkap"
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    name=""
                    required="required"
                    placeholder="Nama Bisnis (Mis. Waroeng Makan)"
                  />
                </div>
                <div className="inputBox">
                  <textarea
                    required="required"
                    placeholder="Masukan Pesan Anda DIsini"
                  />
                </div>
                <div className="inputBox">
                  <input type="submit" name="" value="Kirim" />
                </div>
              </form>
            </div>

            <div className="contact-info">
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="contact-info-text">
                  <h3 className="phone">WhatsApp</h3>
                  <p>0888xxxxxxx</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-info-text">
                  <h3 className="address">Alamat</h3>
                  <p>Hanjawar</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-info-text">
                  <h3 className="email">Email</h3>
                  <p>xxxx@emal.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
