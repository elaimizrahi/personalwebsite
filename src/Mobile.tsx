import "./App.css";
import profile from "./images/IMG_5423.png";
import secodaLogo from "./images/secoda.png";
import { Group, Stack, Box, Text } from "@mantine/core";
import commandPalette from "./images/commandPalette.png";
import MobileCardItem from "./components/MobileCardItem";
import Jira from "./images/Jira.png";
import mssql from "./images/mssql.png";
import powerbi from "./images/powerbi.png";
import uw from "./images/uw.png";
import goose from "./images/goose.png";
import spotify from "./images/spotify.png";
import map from "./images/map.png";
import uwaft from "./images/uwaft.jpeg";
import avante from "./images/avante.jpeg";
import gotchi from "./images/gotchi.png";
import django from "./images/django.png";
import consiliinfra from "./images/consiliinfra.png";
import operations from "./images/operations.png";
import synthesis from "./images/synthesis.png";
import mail from "./images/mail.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubCalendar from "react-github-calendar";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React, {   useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, Code } from "@nextui-org/react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiGo,
  SiTerraform,
  SiSwift,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMongodb,
  SiDjango,
  SiAmazonaws,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTensorflow,
  SiFirebase,
  SiCelery,
  SiElasticsearch,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiTrello,
  SiPytest,
  SiJira,
  SiPowerbi,
  SiLinear,
  SiGithubactions,
  SiGooglecolab,
  SiFigma,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BiLogoVuejs } from "react-icons/bi";
import { isMobile } from "react-device-detect";
import runql from "./images/runQL-logo.png";
import snowflakedatabricks from "./images/snowflakedatabricks.png";
import opensearch from "./images/opensearch.png";
import ec2 from "./images/ec2.png";
import aichart from "./images/aichart.png";

function App() {
    const [page, setPage] = useState('about')
  const mailto = "mailto:emizrahi@uwaterloo.ca";

  const scrollToSection = (sectionKey: string) => {
    const element = document.getElementById(`${sectionKey}`); // Your target element
    const headerOffset = 75;
    setPage(sectionKey)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                justifyContent: "center",
                zIndex: 999,
              }}>
              <Navbar isBordered style={{ marginLeft: "auto" }}>
                <NavbarContent
                  className=" sm:flex gap-4"
                  justify="center"
                  style={{ margin: "auto" }}>
                  <NavbarItem style={{ margin: "auto" }}>
                    <Link
                      color={page === 'about' ? "primary" : "foreground"}
                      style={{ margin: "auto", fontWeight: page === 'about' ? "bold" : 'normal'}}
                      onClick={() => scrollToSection("about")}>
                      About
                    </Link>
                  </NavbarItem>
                  <NavbarItem isActive>
                    <Link
                      color={page === 'experience' ? "primary" : "foreground"}
                      style={{ margin: "auto", fontWeight: page === 'experience' ? "bold" : 'normal'}}
                      onClick={() => scrollToSection("experience")}>
                      Experience
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link
                      color={page === 'projects' ? "primary" : "foreground"}
                      style={{ margin: "auto", fontWeight: page === 'projects' ? "bold" : 'normal'}}
                      onClick={() => scrollToSection("projects")}>
                      Projects
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link
                      color={page === 'skills' ? "primary" : "foreground"}
                      style={{ margin: "auto", fontWeight: page === 'skills' ? "bold" : 'normal'}}
                      onClick={() => scrollToSection("skills")}>
                      Skills
                    </Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Link
                      color={page === 'contact' ? "primary" : "foreground"}
                      style={{ margin: "auto", fontWeight: page === 'contact' ? "bold" : 'normal'}}
                      onClick={() => scrollToSection("contact")}>
                      Contact
                    </Link>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </div>
            <section id="about" />

            <Stack
              style={{
                paddingTop: "75px",
                width: "85%",
                justify: "center",
                alignContent: "center",
              }}>
              <Group style={{ paddingBottom: "50px" }}>
              <img
                  src={profile}
                  style={{
                    width: '80%',
                    height: '80%',
                    borderRadius: "5%", 
                    border: "5px solid white",
                    margin: "0 auto",
                    display: "block"
                  }}
                  alt="Profile"></img>
                <Stack ml={25}>
                  <Text fw={500} fz={"1.7rem"} mr="auto">
                    Hello, I'm{" "}
                  </Text>
                  <TypeAnimation
                    sequence={[
                      "Elai Mizrahi 👋",
                      1000,
                      "a Software Engineer 💻",
                      1000,
                      "an AI Developer 🧠",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={70}
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: "bold",
                      marginRight: "auto",
                    }}
                    repeat={Infinity}
                  />
                  <Group style={{ marginRight: "auto", marginTop: "10px" }}>
                    <a href="./Elai_Mizrahi_Resume.pdf" target="_blank">
                      <Button style={{ backgroundColor: "#7828C8" }}>
                        <InsertDriveFileIcon />
                        Resume
                      </Button>
                    </a>
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/elai-mizrahi/",
                          "_blank"
                        )
                      }
                      style={{
                        marginRight: "auto",
                        backgroundColor: "#004493",
                      }}>
                      <LinkedInIcon />
                      Linkedin
                    </Button>
                    <Button
                      onClick={() =>
                        window.open("https://github.com/elaimizrahi", "_blank")
                      }
                      style={{
                        marginRight: "auto",
                        backgroundColor: "#18181B",
                      }}>
                      <GitHubIcon />
                      Github
                    </Button>
                  </Group>
                </Stack>
              </Group>
              <p style={{ fontWeight: "bold" }}>
                Software engineer, Student, and Aspiring founder
              </p>
              <div>
                I am in my third year of{" "}
                <span style={{ fontWeight: "bold" }}>Software Engineering</span>{" "}
                at the University of Waterloo with a specialization in
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Artificial Intelligence
                </span>
                . I have completed co-op terms at <a href="https://runql.com" target="_blank" style={{ fontWeight: "bold", textDecoration: "underline" }} rel="noreferrer">RunQL</a>,{" "}
                <a href="https://avante.io" target="_blank" style={{ fontWeight: "bold", textDecoration: "underline", whiteSpace: "nowrap" }} rel="noreferrer">Avante IO</a>, and{" "}
                <a href="https://secoda.co" target="_blank" style={{ fontWeight: "bold", textDecoration: "underline" }} rel="noreferrer">Secoda</a>
                {' '}where I developed full-stack features. I am now looking for a{" "}
                <span style={{ fontWeight: "bold" }}>
                  Summer 2025 Software Engineering co-op{" "}
                </span>
                position. You can reach me at{" "}
                <a
                  href="mailto:emizrahi@uwaterloo.ca"
                  style={{ textDecoration: "underline", fontWeight: "bold" }}>
                  emizrahi@uwaterloo.ca
                </a>
                !
              </div>

              <section id="experience" />
              <Card
                style={{
                  textAlign: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  height: "40%",
                  borderRadius: "24px",
                  padding: "8px",
                }}
                isBlurred>
                <h2
                  style={{
                    textAlign: "left",
                    marginBottom: 0,
                    width: "20%",
                    fontWeight: 1000,
                  }}>
                  👨‍💻 Experience{" "}
                </h2>
                <div >
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md", justifyItems: "center" }}
                        mt={0}>
                        <Card
                          style={{
                            textAlign: "center",
                            height: "40%",
                            marginRight: "auto",
                            borderRadius: "24px",
                            padding: "8px",
                            alignContent: "center",
                            justifyItems: "center",
                          }}
                          isBlurred>
                          <Group>
                          <img src={runql} alt="RunQL Logo" style={{
                              width: 300,
                              height: 100,
                              margin: '1%',
                            }} />
                            <div>
                              <h4
                                style={{
                                  marginBottom: 0,
                                  textAlign: "left",
                                  fontWeight: 1000,
                                }}>
                                RunQL
                              </h4>
                              <h6
                                style={{
                                  marginTop: 0,
                                  textAlign: "left",
                                  color: "lightgray",
                                }}>
                                Software Engineer Intern
                              </h6>
                            </div>
                          </Group>

                          <Group
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            
                          <Stack>
                            <MobileCardItem
                              title="Data Integration"
                              type="feature"
                              description="Enabled two-way Snowflake and Databricks data integration, persisting data using React and Typescript"
                              image={snowflakedatabricks}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <MobileCardItem
                              title="AI Charts"
                              type="feature"
                              description="Implemented real-time AI-generated charts from query data, processing 10000+ rows while ensuring data privacy"
                              image={aichart}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <MobileCardItem
                              title="Search Optimization"
                              type="feature"
                              description="Extracted query metadata using AI Models to enable faceted Opensearch filters, reducing search time by 50%"
                              image={opensearch}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <MobileCardItem
                              title="Staging Environment"
                              type="feature"
                              description="Introduced staging environment using AWS, Typescript, and Docker, reducing production bugs by 75%"
                              image={ec2}
                              link={""}
                              buttonLabel="View Feature"
                            />
                          </Stack>
                          </Group>
                        </Card>
                      </Box>
                </div>
                <div>
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md", justifyItems: "center" }}
                        mt={0}>
                        <Card
                          style={{
                            textAlign: "center",
                            height: "40%",
                            marginRight: "auto",
                            borderRadius: "24px",
                            padding: "8px",
                            alignContent: "center",
                            justifyItems: "center",
                          }}
                          isBlurred>
                          <Group>
                            <img
                              src={avante}
                              alt=""
                              style={{
                                width: 75,
                                height: 75,
                                borderRadius: "50%",
                              }}
                            />
                            <div>
                              <h4
                                style={{
                                  marginBottom: 0,
                                  textAlign: "left",
                                  fontWeight: 1000,
                                }}>
                                Avante.io
                              </h4>
                              <h6
                                style={{
                                  marginTop: 0,
                                  textAlign: "left",
                                  color: "lightgray",
                                }}>
                                Software Engineer Intern
                              </h6>
                            </div>
                          </Group>

                          <Group
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <MobileCardItem
                              title="Consili.io"
                              type="feature"
                              description="Directed Consili product to generate summarized news articles with React, Django, Terraform, and AWS, curating personalized news timelines"
                              image={synthesis}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                            <MobileCardItem
                              title="News Analysis"
                              type="feature"
                              description="Levaraged and trained AI Models to summarize and analyze articles, delivering their contents and rationales to
                              users with interests in the same topics by using OpenAI, Python, Django modelling, SQL, and AWS S3"
                              image={operations}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                            <MobileCardItem
                              title="Infrastructure"
                              type="feature"
                              description="Implemented an AWS, Terraform, and Django backend to provide enhanced infrastructure for Consili's deployment and architecture"
                              image={consiliinfra}
                              link={
                                "https://www.figma.com/file/ny2U5bNhX776yaN3kvi7of/Consili?type=whiteboard&node-id=975%3A1045&t=9IdyMAXetDv1o7GJ-1"
                              }
                              buttonLabel="View infrastructure"
                            />
                            <MobileCardItem
                              title="Django Database"
                              type="feature"
                              description="Conceptualized and created Django database to efficiently query, analyze, and store articles crawled by Consili "
                              image={django}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                          </Group>
                        </Card>
                      </Box>
                </div>
                <Group></Group>
                <div>
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md", justifyItems: "center" }}
                        mt={0}>
                        <Card
                          style={{
                            textAlign: "center",
                            marginRight: "auto",
                            height: "40%",
                            borderRadius: "24px",
                            padding: "8px",
                          }}
                          isBlurred>
                          <Group>
                            <img
                              src={secodaLogo}
                              alt=""
                              style={{
                                width: 75,
                                height: 75,
                                borderRadius: "25%",
                              }}
                            />
                            <div>
                              <h4
                                style={{
                                  marginBottom: 0,
                                  textAlign: "left",
                                  fontWeight: 1000,
                                }}>
                                Secoda (YC S21)
                              </h4>
                              <h6
                                style={{
                                  marginTop: 0,
                                  textAlign: "left",
                                  color: "lightgray",
                                }}>
                                Software Engineer Intern
                              </h6>
                            </div>
                          </Group>

                          <Group style={{ alignContent: "center" }}>
                            <MobileCardItem
                              title="Command Palette"
                              type="feature"
                              description="With the command palette feature, users are able to quickly search through their workspace, create new resources, and navigate through Secoda."
                              image={commandPalette}
                              link={"https://docs.secoda.co/features/search"}
                              buttonLabel="View in Documentation"
                            />
                            <MobileCardItem
                              title="Jira Integration"
                              type="feature"
                              description="Secoda's Jira integration allows for users to pull their Jira issues into Secoda as questions, allowing for a seamless connection between the two workspaces"
                              image={Jira}
                              link={
                                "https://docs.secoda.co/integrations/productivity-tools/jira#h_448e650cba"
                              }
                              buttonLabel="View in Documentation"
                            />
                            <MobileCardItem
                              title="Power BI Authentication"
                              type="improvement"
                              description="Developed new Power BI Authentication to enable non-admin users to extract reports, datasets, and workflows, importing them into Secoda"
                              image={powerbi}
                              link={
                                "https://docs.secoda.co/integrations/data-visualization-tools/power-bi"
                              }
                              buttonLabel="View in Documentation"
                            />
                            <MobileCardItem
                              title="MS SQL Stored Procedures"
                              type="feature"
                              description="Developed new MS SQL Stored Procedures to extract lineage MS SQL table's lineage, assigning  responsible queries to their respective lineages"
                              image={mssql}
                              link={
                                "https://docs.secoda.co/integrations/databases/microsoft-sql-server/"
                              }
                              buttonLabel="View in Documentation"
                            />
                          </Group>
                        </Card>
                      </Box>
                </div>
                <Group>
                  <div >
                        <Box
                          ta="center"
                          p="xl"
                          style={{ borderRadius: "md" }}
                          mt={0}>
                          <Card
                            style={{
                              textAlign: "center",
                              marginRight: "auto",
                              height: "40%",
                              borderRadius: "24px",
                              padding: "8px",
                            }}
                            isBlurred>
                            <Group>
                              <img
                                src={uw}
                                alt=""
                                style={{
                                  width: 75,
                                  height: 75,
                                  borderRadius: "25%",
                                }}
                              />
                              <Stack>
                                <h4
                                  style={{ marginBottom: 0, fontWeight: 1000 }}>
                                  UWaterloo EcoCar Design Team
                                </h4>
                                <h6
                                  style={{
                                    marginTop: 0,
                                    textAlign: "left",
                                    color: "lightgray",
                                  }}>
                                  Software Developer
                                </h6>
                              </Stack>
                            </Group>

                            <MobileCardItem
                              title="Software Developer"
                              type="feature"
                              description="Researched methods of creating 3D models of automotive
                    interiors using Blender and Python, learning to work in a team environment"
                              image={uwaft}
                              link={"https://www.uwaft.ca/"}
                              buttonLabel="View Design Team"
                            />
                          </Card>
                        </Box>
                  </div>
                </Group>
              </Card>

              <section id="projects" />
              <Card
                style={{
                  textAlign: "center",
                  marginRight: "auto",
                  height: "40%",
                  borderRadius: "24px",
                  padding: "8px",
                }}
                isBlurred>
                <h2 style={{ textAlign: "left", fontWeight: 1000 }}>
                  🛠️ Projects{" "}
                </h2>
                <Group style={{ width: "100%", justifyContent: "center" }}>
                  <MobileCardItem
                    title="Gotchi.ai"
                    description="gotchi.ai functions as a virtual pet assistant, allowing users to interact with and care for a digital pet through activities like feeding and monitoring its well-being. In addition, it also provides features that support educational study aids like a Pomodoro timer, an interactive voice-activated AI chat, an AI-powered text summarizer, memo pads, and more.                "
                    type="UofTHacks 11"
                    link="https://devpost.com/software/gotchi-ai"
                    buttonLabel="View Devpost"
                    image={gotchi}
                  />
                  <MobileCardItem
                    title="Self Driving RC Car"
                    description="Connected a Raspberry Pi Zero to the Raspberry Pi OS, TensorFlow, and Python, detecting objects using their location to control
the car's movement"
                    type="Software Engineering 101 Project"
                    link="https://drive.google.com/file/d/1Hg6L83-5mZvX0KASZwBild1oKAhvDJ1o/view"
                    buttonLabel="View Demo"
                    image={goose}
                  />
                  <MobileCardItem
                    title="Encore"
                    description="Developed React application to pull user's current listening data from spotify, allowing the user to then review and save each song. Used the Spotify API, React, and MongoDB."
                    type="Personal Project"
                    link="https://github.com/elaimizrahi/spotify"
                    buttonLabel="Github"
                    image={spotify}
                  />{" "}
                  <MobileCardItem
                    title="MemoryMap (WIP)"
                    description="Developed web app to create a ”Memory Map” for users using a React and Typescript front end and a MongoDB and Python
                  back‑end"
                    type="Personal Project"
                    link="https://github.com/elaimizrahi/spotify"
                    buttonLabel="Github"
                    image={map}
                  />{" "}
                </Group>{" "}
              </Card>

              <Stack style={{ paddingTop: "0px", width: "100%" }}>
                <section id="skills" />
                <Card
                  style={{
                    textAlign: "center",
                    marginRight: "auto",
                    height: "40%",
                    borderRadius: "24px",
                    padding: "8px",
                  }}
                  isBlurred>
                  <h2 style={{ textAlign: "left", fontWeight: 1000 }}>
                    🪐 Skills{" "}
                  </h2>
                </Card>
                <Card
                  style={{
                    alignContent: "center",
                    height: "40%",
                    borderRadius: "24px",
                    padding: "8px",
                  }}
                  isBlurred>
                  <Box
                    color="darkGray"
                    ta="left"
                    p="md"
                    pt={0}
                    fz="xl"
                    fw={700}>
                    <Card
                      style={{
                        textAlign: "left",
                        height: "40%",
                        borderRadius: "24px",
                        padding: "8px",
                      }}
                      isBlurred>
                      <Stack gap={0}>
                        <h4
                          style={{
                            alignSelf: "left",
                            paddingTop: 0,
                            fontWeight: 900,
                          }}>
                          Languages:
                        </h4>
                        <div style={{ fontStyle: "italic", fontSize: "30px" }}>
                          <Code
                            style={{ fontStyle: "italic", fontSize: "30px" }}>
                            <Group>
                              <SiJavascript />
                              <SiPython />
                              <SiCplusplus />
                              <SiTypescript />
                              <SiC />
                              <FaJava />
                              <SiGo />
                              <SiTerraform />
                              <SiSwift />
                              <SiHtml5 />
                              <TbSql />
                              <SiCss3 />
                            </Group>
                          </Code>
                        </div>

                        <h4
                          style={{
                            alignSelf: "left",
                            padding: 0,
                            fontWeight: 900,
                          }}>
                          Frameworks:
                        </h4>
                        <div style={{ fontStyle: "italic", fontSize: "30px" }}>
                          <Code
                            style={{ fontStyle: "italic", fontSize: "30px" }}>
                            <Group>
                              <SiReact />
                              <SiMongodb />
                              <SiDjango />
                              <SiAmazonaws />
                              <SiNodedotjs />
                              <SiPostgresql />
                              <SiDocker />
                              <SiTensorflow />
                              <SiFirebase />
                              <SiCelery />
                              <SiElasticsearch />
                              <BiLogoVuejs />
                            </Group>
                          </Code>
                        </div>
                        <h4
                          style={{
                            alignSelf: "left",
                            padding: 0,
                            fontWeight: 900,
                          }}>
                          Developer Tools:
                        </h4>
                        <div style={{ fontStyle: "italic", fontSize: "30px" }}>
                          <Code
                            style={{ fontStyle: "italic", fontSize: "30px" }}>
                            <Group>
                              <SiGit />
                              <SiGithub />
                              <SiVisualstudiocode />
                              <SiTrello />
                              <SiPytest />
                              <SiJira />
                              <SiPowerbi />
                              <SiLinear />
                              <SiGithubactions />
                              <SiGooglecolab />
                              <SiFigma />
                              <SiMicrosoftazure />
                            </Group>
                          </Code>
                        </div>
                      </Stack>
                    </Card>
                  </Box>
                  <Card
                    style={{
                      textAlign: "center",
                      height: "40%",
                      borderRadius: "24px",
                      padding: "8px",
                    }}
                    isBlurred>
                    <Group
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      mb={10}>
                      <h4
                        style={{
                          alignSelf: "left",
                          padding: 0,
                          fontWeight: 900,
                        }}>
                        My Github History
                      </h4>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://github.com/elaimizrahi",
                            "_blank"
                          )
                        }
                        style={{ backgroundColor: "#18181B" }}>
                        <GitHubIcon />
                        Github
                      </Button>
                    </Group>

                    <Card
                      style={{
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "40%",
                        borderRadius: "12px",
                        padding: "8px",
                        marginBottom: "10px",
                        width: "100%",
                      }}>
                      <GitHubCalendar
                        username="elaimizrahi"
                        style={{ justifyContent: "center" }}
                      />
                    </Card>
                  </Card>
                </Card>
                <section id="contact" />
                <Card
                  style={{
                    textAlign: "center",
                    height: "40%",
                    borderRadius: "24px",
                    padding: "8px",
                  }}
                  isBlurred>
                  <h2
                    style={{
                      textAlign: "left",
                      padding: "8px",
                      fontWeight: 1000,
                    }}>
                    📞 Contact Me!{" "}
                  </h2>
                  <Card
                    style={{
                      textAlign: "center",
                      height: "40%",
                      borderRadius: "24px",
                      padding: "16px",
                    }}
                    isBlurred>
                    <Group style={{ justifyContent: "space-around" }}>
                      <a href={mailto}>
                        <img src={mail} alt="" height={40} width={60} />
                      </a>
                      <a href={"https://github.com/elaimizrahi"}>
                        <img src={github} alt="" height={45} width={45} />
                      </a>
                      <a href={"https://linkedin.com/in/elai-mizrahi"}>
                        <img src={linkedin} alt="" height={45} width={45} />
                      </a>
                      <a href={"tel:2269882795"}>
                        <PhoneIcon
                          style={{ color: "white", width: 50, height: 50 }}
                        />
                      </a>
                    </Group>
                  </Card>
                </Card>
                {isMobile && <div style={{ marginBottom: "40%" }} />}
              </Stack>
            </Stack>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
