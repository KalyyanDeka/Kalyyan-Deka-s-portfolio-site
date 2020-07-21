import React from "react"
import { Link } from "gatsby"

import "./Works.scss"

const works = () => {
  const projects = [
    {
      href: "https://burger-builder-bykalyyan.netlify.app/",
      class: "project__picture project__picture--1",
      stack: "REACT : SASS : FIREBASE",
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
