import React from "react"
import { Link } from "gatsby"

import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__heading">
        HAVE AN INTERESTING PROJECT?{" "}
        <Link className="footer__heading--strong" to="/contact">
          <strong>LET'S TALK!</strong>
        </Link>
      </h1>
      <h1 className="footer__copyright">&#169;2020 Created by Kalyyan Deka</h1>
    </div>
  )
}

export default Footer
