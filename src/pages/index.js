import React from "react"
import "./index.scss"

import Layout from "../components/Layout";

import Header from "../components/Header/Header"

import Works from "../components/Works/Works"

import About from "../components/About/About"

import Footer from "../components/Footer/Footer"

import Head from "../components/head"

const App = () => {

  return (
    <Layout>
      
        <Head />
        <Header />
        <Works />
        <About />
        <Footer />
      
    </Layout>
  )
}

export default App
