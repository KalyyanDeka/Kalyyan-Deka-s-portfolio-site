import React, { useState } from "react"

import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "../UI/Backdrop"

const Layout = (props) => {
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
			<main style={{ marginTop: "56px" }}>{props.children}</main>
		</div>
	)
}

export default Layout
