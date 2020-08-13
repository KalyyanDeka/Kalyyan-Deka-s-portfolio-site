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
          <Link
            className="side-drawer__links"
            to="/"
            activeClassName="active-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="side-drawer__links"
            to="/projects"
            activeClassName="active-link"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="side-drawer__links"
            to="/contact"
            activeClassName="active-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default sideDrawer
