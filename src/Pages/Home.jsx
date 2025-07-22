import React from 'react'
// import Weather from '../Components/Weather';
import { Link } from 'react-router-dom';
import Sampu from '../Components/sampu';
import WeatherApp from '../Components/Weather';
import NewsApp from '../Components/NewsApp';

const Home = () => {
  return (
    <div style={{ flex: 1, background: "#f5f6fa" }}>
      <header style={{
        background: "#222",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Sampada kc</h1>
        <p style={{ margin: "0.5rem 0 0", fontSize: "1.2rem" }}>
          Web Developer | Designer | Programmer
        </p>
      </header>
      <WeatherApp />
      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am a passionate developer with experience in building modern web applications.
            I love solving problems and creating beautiful, user-friendly interfaces.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Project One</strong> – A brief description of your project.
            </li>
            <li>
              <strong>Project Two</strong> – A brief description of your project.
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
        {/* <section id="weather">
          <h2>Weather</h2>
          <Weather />
        </section> */}
        <section id="contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out via <a href="mailto:sampadakc@gmail.com">email</a>!
          </p>
        </section>
        <NewsApp/>
      </main>
      {/* <div>
        <Link to="/users" className="px-3 py-4 rounded-2xl bg-teal-400">
          View Users
        </Link>
      </div> */}
    </div>
  )
}

export default Home