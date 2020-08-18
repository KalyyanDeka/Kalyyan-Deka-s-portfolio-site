import React from "react"
import "./contact.scss"

import Layout from "../components/Layout"



import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head />
      <div className="contact">
        <h1 className="contact__heading">CONTACT ME</h1>
        <h3 className="contact__heading--sub">Reach me through . . .</h3>
        <div className="contact__details">
          <div className="contact__details--detail">
            <strong>EMAIL :</strong> kalyyan.2612@gmail.com
          </div>
          <div className="contact__details--detail">
            <strong>PHONE :</strong> 918723057896
          </div>
          <div className="contact__details--detail">
            <strong>GITHUB :</strong>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kalyyandeka"
            >
              Kalyyan Deka
            </a>
          </div>
          <div className="contact__details--detail">
            <strong>LinkedIn :</strong>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kalyyan-deka-32a3001b2/"
            >
              Kalyyan Deka
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
