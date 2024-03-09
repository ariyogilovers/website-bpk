import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ama Star",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "NFT",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Daras",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Squid Game",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "New world",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Tecnologey Are Games",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Orbital Voyager",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Digital world",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Cripto",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Bitcoin",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Neon Design",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "Sniker",
      description: "Design & Development",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyek</h2>
                <p>Dapatkan inspirasi dari karya jutaan desainer terbaik di dunia</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Situs ini memberikan inspirasi pada desainer baik pemula maupun profesional di bidang UI/UX. Di UX Matters terdapat artikel tentang topik-topik penting seputar dunia UX, bagaimana mendesain UX yang baik, dan beragam pembahasan lainnya.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
