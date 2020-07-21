import React from "react"
import "./About.scss"

const aboutme = () => {
  return (
    <div id="about" className="about">
      <h1 className="about__heading">ABOUT ME</h1>
      <div className="about__paragraph">
        <p className="about__paragraph--1">
          Well you might already know my name, I am a Fullstack developer
          specialized in Javascript with great experience in using technologies
          such as React, Node.js, Express, Sass, Redux, GraphQL, GatsbyJS,
          Next.js, MongoDB, postgreSQL and more.
        </p>

        <p className="about__paragraph--2">
          Seeking more knowledge in tech industry and my curiosity for new
          subjects and problem represent my passion. I love being able to think
          of a creative idea and making it come to life by programming it on the
          screen.
        </p>
        <p className="about__paragraph--3">
          Since technology is changing at a rapid rate, I have been keeping
          myself up to date with what is happening with current events and where
          technology will take us 5-10 years down line. What I really love about
          technology is that it is always changing, and that means that there is
          always an opportunity to learn something new. I love learning new
          programming languages and frameworks, along with design principles and
          applying them.
        </p>
      </div>
    </div>
  )
}

export default aboutme
