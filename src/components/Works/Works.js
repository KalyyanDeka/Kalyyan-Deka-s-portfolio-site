import React from "react"
import { Link } from "gatsby"

import "./Works.scss"

const works = () => {
  const projects = [
    {
      href: "https://burger-builder-bykalyyan.netlify.app/",
      class: "project__picture project__picture--1",
      stack: "REACT : REDUX : FIREBASE",
      name: "Burger App",
      details:
        "A burger application build with react where a user can dynamically build a burger, add ingredients to it and then in the end also purchase it.",
    },
    {
      href: "https://documenter.getpostman.com/view/11332625/T1LMhmoy?version=latest",
      class: "project__picture project__picture--2",
      stack: "NODE : EXPRESS : MONGODB : MONGOOSE",
      name: "DevCamper API",
      details:
        "Backend API for a bootcamp directory application to manage bootcamps, courses, reviews, users and authentication. You can view the docs I have published from postman.",
    },
  ]

  const cards = projects.map(p => {
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
    <div className="works">
      <h1 className="works--heading">LATEST WORKS !</h1>
      <div className="works--cards">{cards}</div>
      <div className="works--view-more">
        <Link to="/projects" class="more-projects-btn">
          View all&rarr;
        </Link>
      </div>
    </div>
  )
}

export default works
