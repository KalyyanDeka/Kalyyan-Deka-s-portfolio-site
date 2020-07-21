import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"

const NotFound = () => {
  return (
    <div>
      <Head />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </div>
  )
}

export default NotFound
