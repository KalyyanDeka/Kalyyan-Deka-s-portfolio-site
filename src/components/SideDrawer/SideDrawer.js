import React from "react"
import { Link } from "gatsby"

import "./SideDrawer.scss"

const sideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link className="side-drawer__links" to="/">
            <span>
              <strong>01: </strong>
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link className="side-drawer__links" to="/projects">
            <span>
              <strong>02: </strong>
            </span>
            Works
          </Link>
        </li>
        {/* <li>
          <Link className="side-drawer__links" to="#about">
            <span>
              <strong>03: </strong>
            </span>
            About
          </Link>
        </li> */}
        <li>
          <Link className="side-drawer__links" to="/">
            <span>
              <strong>03: </strong>
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default sideDrawer
