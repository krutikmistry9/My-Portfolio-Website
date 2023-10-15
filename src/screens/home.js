import React from "react";
import "animate.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomeScreen = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: false,
              },
            },
            size: {
              value: 0.5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="firstView">
        <div className="firstLeft animate__animated animate__slideInUp">
          <h1> Krutik Mistry.</h1>
          <p className="pitch">
            Optimistic Web Developer, Growing Data Analyst and Machine Learning Engineer.
            Always keen to learn new things about the technology around the world, and persistent in contributing to society.
          </p>
          <a className="btn-type-one" href="#about">
            Get to know me!
          </a>
        </div>
      </div>

      <footer className="footer">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <a
          href="https://www.linkedin.com/in/krutik-mistry-230b11227/"
          className="fa fa-linkedin"
        >
          {" "}
        </a>
        <a
          href="https://www.instagram.com/krish_.22/"
          className="fa fa-instagram"
        >
          {" "}
        </a>
        <a
          href="https://github.com/krutikmistry9"
          className="fa fa-github"
        >
          {" "}
        </a>
      </footer>
      <div className="navPin"></div>
    </div>
  );
};

export default HomeScreen;
