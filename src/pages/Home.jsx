import line from "../assets/Line 1.png";
import line1 from "../assets/Line 3.png";
import profile from "../assets/profile.png";
import profile1 from "../assets/Adrine5.PNG";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import Contact from "../components/HomeComponents/Contact";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    await axios
      .get("https://mybrand-production.up.railway.app/blogs")
      .then(async (res) => {
        setBlogs(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getdatePublished = (datePublished) => {
    let date = new Date(datePublished);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <div>
      <div className="content-container">
        <div className="social-links">
          <a
            href="https://github.com/AdrineUWERA"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="i" />
          </a>
          <a
            href="https://www.linkedin.com/in/adrine-uwera-5742b3206/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="i" />
          </a>
          <a
            href="https://www.instagram.com/_.a.d.r.i.n.e._/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="i" />
          </a>
          <a
            href="https://twitter.com/UweraAdrine"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="i" />
          </a>
          <a
            href="https://codepen.io/Adrine-UWERA"
            target="_blank"
            rel="noreferrer"
          >
            <FaCodepen className="i" />
          </a>
          <img className="line1" src={line} alt="" />
        </div>
        <div className="main-content">
          <div className="scrollable-content">
            <section id="home">
              <p id="hi">Hi, my name is</p>
              <p id="name">Adrine UWERA.</p>
              <p id="whatIDo">I build tech solutions.</p>
              <p id="summary">
                I’m a software engineer specializing in building (and
                occasionally designing) appealing and functional softwares.
                Currently, I’m focused on upskilling my software development
                with{" "}
                <a href="https://andela.com/" target="_blank" rel="noreferrer">
                  Andela
                </a>
                .
              </p>
              <a className="checkout-my-work" href="#work">
                Checkout my work
              </a>
            </section>
            <section id="about">
              <div className="section-title">
                <span className="numbering">01. </span>
                <span className="title">About Me</span>
                <div>
                  <img src={line1} alt="" />
                </div>
              </div>
              <div className="section-content">
                <div className="left-content">
                  <p id="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet. consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. <br />
                    <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p id="hobbies-title">
                    Offline, when I am not coding I enjoy:
                  </p>
                  <div className="hobbies">
                    <ul className="hobbies-list">
                      <li>
                        <span>▹</span> Drawing
                      </li>
                      <li>
                        <span>▹</span> Listening to music
                      </li>
                      <li>
                        <span>▹</span> Family time
                      </li>
                    </ul>
                    <ul className="hobbies-list">
                      <li>
                        <span>▹</span> Watching movies
                      </li>
                      <li>
                        <span>▹</span> Going out with friends
                      </li>
                      <li>
                        <span>▹</span> Trying new recipes
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right-content">
                  <div className="flip-card-container">
                    <div className="flip-card">
                      <div className="flip-front">
                        <img src={profile} alt="front image" />
                      </div>
                      <div className="flip-back">
                        <img src={profile1} alt="back image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="skills">
              <div className="section-title">
                <span className="numbering">02. </span>
                <span className="title"> Skills</span>
                <div>
                  <img src={line1} alt="" />
                </div>
              </div>
              <div className="left-content">
                <p id="learning-journey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Lorem ipsum
                  dolor sit amet. consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="section-content">
                <div className="center-content">
                  <div className="skill_bar">
                    <div className="info">
                      <p>HTML</p>
                      <p>80%</p>
                    </div>
                    <div className="bar">
                      <span className="html"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>CSS</p>
                      <p>65%</p>
                    </div>
                    <div className="bar">
                      <span className="css"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>JavaScript</p>
                      <p>60%</p>
                    </div>
                    <div className="bar">
                      <span className="js"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>SQL</p>
                      <p>80%</p>
                    </div>
                    <div className="bar">
                      <span className="sql"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>Python</p>
                      <p>70%</p>
                    </div>
                    <div className="bar">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
                <div className="right-content">
                  <div className="skill_bar">
                    <div className="info">
                      <p>Java</p>
                      <p>50%</p>
                    </div>
                    <div className="bar">
                      <span className="java"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>React js</p>
                      <p>60%</p>
                    </div>
                    <div className="bar">
                      <span className="react"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>Next js</p>
                      <p>60%</p>
                    </div>
                    <div className="bar">
                      <span className="next"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>GraphQL</p>
                      <p>75%</p>
                    </div>
                    <div className="bar">
                      <span className="graphql"></span>
                    </div>
                  </div>
                  <div className="skill_bar">
                    <div className="info">
                      <p>Mongo DB</p>
                      <p>70%</p>
                    </div>
                    <div className="bar">
                      <span className="mongo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="learning">
                <p>Learning by doing is the only way I know how to learn.</p>
              </div>
            </section>
            <section id="work">
              <div className="section-title">
                <span className="numbering">03. </span>
                <span className="title">Work</span>
                <div>
                  <img src={line1} alt="" />
                </div>
              </div>
              <div className="section-content">
                <div className="cards">
                  <div className="card-content">
                    <div className="card-icons">
                      <i className="fa-regular fa-folder"></i>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                    <div className="project-details">
                      <h4>E-commerce</h4>
                      <p>
                        A web application for buyers and seller who want to buy
                        and sell online. A web application for buyers and seller
                        who want to buy and sell online.
                      </p>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>Next js</li>
                        <li>Tailwind Css</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-icons">
                      <i className="fa-regular fa-folder"></i>
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                    <div className="project-details">
                      <h4>E-commerce</h4>
                      <p>
                        A web application for buyers and seller who want to buy
                        and sell online. A web application for buyers and seller
                        who want to buy and sell online.
                      </p>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>Next js</li>
                        <li>Tailwind css</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-icons">
                      <i className="fa-regular fa-folder"></i>
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                    <div className="project-details">
                      <h4>E-commerce</h4>
                      <p>
                        A web application for buyers and seller who want to buy
                        and sell online. A web application for buyers and seller
                        who want to buy and sell online.
                      </p>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>Next js</li>
                        <li>Tailwind css</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-icons">
                      <i className="fa-regular fa-folder"></i>
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                    <div className="project-details">
                      <h4>E-commerce</h4>
                      <p>
                        A web application for buyers and seller who want to buy
                        and sell online. A web application for buyers and seller
                        who want to buy and sell online.
                      </p>
                    </div>
                    <div className="tech-used">
                      <ul>
                        <li>Next js</li>
                        <li>Tailwind css</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {blogs && (
              <section id="blogs">
                <>
                  <div className="section-title">
                    <span className="numbering">04. </span>
                    <span className="title">Blogs</span>
                    <div>
                      <img src={line1} alt="" />
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="blogs-list" id="blogs-list">
                      {blogs.map((blog) => {
                        return <div className="blog-summary">
                          <a className="blog-link" href="blog-page.html">
                            <h4>{blog.title}</h4>
                          </a>
                          <p>
                            {getdatePublished(blog.datePublished)} |
                            {blog.category.toUpperCase()}
                          </p>
                          <p className="short-description">
                            {blog.content.length > 100
                              ? blog.content.split(" ").slice(0, 100).join(" ") +
                                " ..."
                              : blog.content}
                          </p>
                        </div>;
                      })}
                    </div>
                  </div>
                </>
              </section>
            )}
            <section id="contact">
              <Contact/>
            </section>
            <section id="footer">
              <p>Built by Adrine UWERA</p>
            </section>
          </div>
        </div>
        <div className="email-address">
          <a href="mailto:a.uwera@alustudent.com">
            <p>a.uwera@alustudent.com</p>
          </a>
          <img className="line1" src={line} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
