import React, { useState } from "react"
import "./contact.scss"

import Toolbar from "../components/Toolbar/Toolbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../UI/Backdrop"

const Contact = () => {
  const [sideDrawerOpen, onSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    onSideDrawerOpen(!sideDrawerOpen)
  }

  const backDropClickedHandler = () => {
    onSideDrawerOpen(false)
  }

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropClickedHandler} />
  }
  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "56px" }}>
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
              <a href="https://github.com/kalyyandeka">Kalyyan Deka</a>
            </div>
            <div className="contact__details--detail">
              <strong>LinkedIn :</strong>{" "}
              <a href="https://www.linkedin.com/in/kalyyan-deka-17774a1a0/">
                Kalyyan Deka
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
