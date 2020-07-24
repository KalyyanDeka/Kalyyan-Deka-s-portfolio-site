import React, { useState } from "react"

import Layout from "../components/Layout"

import Head from "../components/head"

const Projects = () => {
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

  const project = [
    {
      href: "https://burger-builder-bykalyyan.netlify.app/",
      class: "project__picture project__picture--1",
      stack: "REACT : REDUX : FIREBASE",
      name: "Burger Builder",
      details:
        "A burger application where a user can dynamically build a burger add ingredients and then in the end also purchase it.",
    },
    {
      href: "https://smartbrain-kalyyan.netlify.app/",
      class: "project__picture project__picture--2",
      stack: "REACT : NODE : POSTGRESQL : HEROKU",
      name: "Smart Brain",
      details:
        "It is a webapp where you can submit image URLs and it will detect where the faces are in the given photo.",
    },
    {
      href: "https://natours-by-kalyyan.netlify.app/",
      class: "project__picture project__picture--3",
      stack: "HTML : SASS",
      name: "Natours",
      details:
        "A landing page for a frictional travel company, designed with newest css properties, animations and advanced responsive design.",
    },
    {
      href: "/",
      class: "project__picture project__picture--4",
      stack: "GATSBY : SASS",
      name: "My Portfolio",
      details:
        "The website you are on right now! It is created from scratch using GatsbyJS which is a React-based static site generator.",
    },
  ]

  const cards = project.map(p => {
    return (
      <div className="project">
        <a href={p.href} target="_blank" rel="noopener noreferrer">
          <div className={p.class}></div>
        </a>
        <div className="project__stack">{p.stack}</div>
        <h4 className="project__heading">{p.name}</h4>

        <div className="project__details">{p.details}</div>
        <div className="project__button">
          <a
            href={p.href}
            className="project__button--a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Have a look &rarr;
          </a>
        </div>
      </div>
    )
  })

  return (
    <Layout>
      <Head />
      <div className="works">
        <h1 className="works--heading">ALL PROJECTS!</h1>
        <div className="works--cards">{cards}</div>
      </div>
    </Layout>
  )
}

export default Projects
