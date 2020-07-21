import React from "react"
import { Link } from "gatsby"

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__spacer" />
      <div className="toolbar__navigation--items">
        <ul>
          <li>
            <Link
              className="toolbar__navigation--items--links"
              to="/"
              activeClassName="active-link"
            >
              <span>
                <strong>01: </strong>
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="toolbar__navigation--items--links"
              to="/projects"
              activeClassName="active-link"
            >
              <span>
                <strong>02: </strong>
              </span>
              Works
            </Link>
          </li>
          <li>
            <Link
              className="toolbar__navigation--items--links"
              to="/contact"
              activeClassName="active-link"
            >
              <span>
                <strong>03: </strong>
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
)

export default toolbar
