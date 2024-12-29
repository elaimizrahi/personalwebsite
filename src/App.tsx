import "./App.css";
import profile from "./images/IMG_5423.png";
import secodaLogo from "./images/secoda.png";
import { Group, Stack, Box, Text } from "@mantine/core";
import commandPalette from "./images/commandPalette.png";
import CardItem from "./components/CardItem";
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
import runql from "./images/runQL-logo.png";
import snowflakedatabricks from "./images/snowflakedatabricks.png";
import opensearch from "./images/opensearch.png";
import ec2 from "./images/ec2.png";
import aichart from "./images/aichart.png";
import GitHubCalendar from "react-github-calendar";
import "typeface-roboto-mono";

import React, {  useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Tabs, Tab, Card, Button, Code } from "@nextui-org/react";
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

function App() {
  const mailto = "mailto:emizrahi@uwaterloo.ca";

  const scrollToSection = (sectionKey: React.Key) => {
    const element = document.getElementById(`${sectionKey}`); // Your target element
    const headerOffset = 75;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const secodaref = useRef(null);
  const avanteref = useRef(null);
  const runqlref = useRef(null);
  const uwaftref = useRef(null);

  return (
    <div style={{fontFamily: "Roboto Mono"}}>
      <div>
        <div className="App">
          <header className="App-header">
            <div style={{ 
              position: "fixed", 
              top: 25, 
              zIndex: 999, 
            }}>
              <Tabs
                color={"default"}
                aria-label="Tabs colors"
                radius="full"
                variant="solid"
                style={{
                  color: "white",
                }}
                onSelectionChange={(tab) => scrollToSection(tab)}>
                <Tab key="about" title="About Me" style={{ margin: "10px", fontSize: '25px' }} />
                <Tab key="experience" title="Experience" style={{ margin: "10px", fontSize: '25px' }} />
                <Tab key="projects" title="Projects" style={{ margin: "10px", fontSize: '25px' }} />
                <Tab key="skills" title="Skills" style={{ margin: "10px", fontSize: '25px' }} />
                <Tab
                  key="contact"
                  title="Contact Me"
                  style={{ margin: "10px", fontSize: '25px' }}
                />
              </Tabs>
            </div>
            <section id="about" />

            <Stack
              style={{ paddingTop: "75px", width: "70%", justify: "center" }}>
              <Group style={{ paddingBottom: "50px" }}>
                <img
                  src={profile}
                  style={{
                    width: 400,
                    height: 400,
                    borderRadius: "5%",
                    border: "5px solid white",
                  }}
                  alt="Profile"></img>
                <Stack ml={25}>
                  <Text fw={500} fz={"5rem"} mr="auto">
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
                    speed={20}
                    deletionSpeed={50}
                    style={{
                      fontSize: "5rem",
                      fontWeight: "bold",
                      marginRight: "auto",
                    }}
                    repeat={Infinity}
                  />
                  <Group style={{ marginRight: "auto", marginTop: "10px" }}>
                  <Button 
                    onClick={() => window.open("./Elai_Mizrahi_Resume.pdf", "_blank")}
                    style={{ backgroundColor: "#7828C8", fontSize: "1.5rem", padding: "1.5rem 2rem"}}>
                    <InsertDriveFileIcon style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
                    Resume
                  </Button>

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
                        fontSize: "1.5rem",
                        padding: "1.5rem 2rem"
                      }}>
                      <LinkedInIcon style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
                      Linkedin
                    </Button>
                    <Button
                      onClick={() =>
                        window.open("https://github.com/elaimizrahi", "_blank")
                      }
                      style={{
                        marginRight: "auto",
                        backgroundColor: "#18181B", 
                        fontSize: "1.5rem",
                          padding: "1.5rem 2rem"
                      }}>
                      <GitHubIcon style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
                      Github
                    </Button>
                  </Group>
                </Stack>
              </Group>
              <p style={{ fontWeight: "bold", fontSize: "4rem" }}>
                Software engineer, Student, and Aspiring founder
              </p>
              <p></p>
              <p></p>
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
                  width: "100%",
                  height: "40%",
                }}
                isBlurred>
                <h2
                  style={{
                    textAlign: "left",
                    marginBottom: 0,
                    marginLeft: "2%",
                    fontWeight: 1000,
                    fontSize: "4rem",
                  }}>
                  👨‍💻 Experience{" "}
                </h2>
                <div ref={runqlref}>
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md"}}
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

                          <Stack>
                            <CardItem
                              title="Data Integration"
                              type="feature"
                              description="Enabled two-way Snowflake and Databricks data integration, persisting data using React and Typescript"
                              image={snowflakedatabricks}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <CardItem
                              title="AI Charts"
                              type="feature"
                              description="Implemented real-time AI-generated charts from query data, processing 10000+ rows while ensuring data privacy"
                              image={aichart}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <CardItem
                              title="Search Optimization"
                              type="feature"
                              description="Extracted query metadata using AI Models to enable faceted Opensearch filters, reducing search time by 50%"
                              image={opensearch}
                              link={""}
                              buttonLabel="View Feature"
                            />
                            <CardItem
                              title="Staging Environment"
                              type="feature"
                              description="Introduced staging environment using AWS, Typescript, and Docker, reducing production bugs by 75%"
                              image={ec2}
                              link={""}
                              buttonLabel="View Feature"
                            />
                          </Stack>
                        </Card>
                      </Box>
                </div>
                <div ref={avanteref}>
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md"}}
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
                                width: 125,
                                height: 125,
                                borderRadius: "50%",
                                margin: '1%'
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

                          <Stack
                            >
                            <CardItem
                              title="Consili.io"
                              type="feature"
                              description="Directed Consili product to generate summarized news articles with React, Django, Terraform, and AWS, curating personalized news timelines"
                              image={synthesis}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                            <CardItem
                              title="News Analysis"
                              type="feature"
                              description="Levaraged and trained AI Models to summarize and analyze articles, delivering their contents and rationales to
                              users with interests in the same topics by using OpenAI, Python, Django modelling, SQL, and AWS S3"
                              image={operations}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                            <CardItem
                              title="Infrastructure"
                              type="feature"
                              description="Implemented an AWS, Terraform, and Django backend to provide enhanced infrastructure for Consili's deployment and architecture"
                              image={consiliinfra}
                              link={
                                "https://www.figma.com/file/ny2U5bNhX776yaN3kvi7of/Consili?type=whiteboard&node-id=975%3A1045&t=9IdyMAXetDv1o7GJ-1"
                              }
                              buttonLabel="View infrastructure"
                            />
                            <CardItem
                              title="Django Database"
                              type="feature"
                              description="Conceptualized and created Django database to efficiently query, analyze, and store articles crawled by Consili "
                              image={django}
                              link={"https://consili.io"}
                              buttonLabel="View Consili"
                            />
                          </Stack>
                        </Card>
                      </Box>
                </div>
                
                <Group></Group>
                <div ref={secodaref}>
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
                              width: 125,
                              height: 125,
                              borderRadius: "25%",
                              margin: '1%'
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

                        <Stack>
                          <CardItem
                            title="Command Palette"
                            type="feature"
                            description="With the command palette feature, users are able to quickly search through their workspace, create new resources, and navigate through Secoda."
                            image={commandPalette}
                            link={"https://docs.secoda.co/features/search"}
                            buttonLabel="View in Documentation"
                          />
                          <CardItem
                            title="Jira Integration"
                            type="feature"
                            description="Secoda's Jira integration allows for users to pull their Jira issues into Secoda as questions, allowing for a seamless connection between the two workspaces"
                            image={Jira}
                            link={
                              "https://docs.secoda.co/integrations/productivity-tools/jira#h_448e650cba"
                            }
                            buttonLabel="View in Documentation"
                          />
                          <CardItem
                            title="Power BI Authentication"
                            type="improvement"
                            description="Developed new Power BI Authentication to enable non-admin users to extract reports, datasets, and workflows, importing them into Secoda"
                            image={powerbi}
                            link={
                              "https://docs.secoda.co/integrations/data-visualization-tools/power-bi"
                            }
                            buttonLabel="View in Documentation"
                          />
                          <CardItem
                            title="MS SQL Stored Procedures"
                            type="feature"
                            description="Developed new MS SQL Stored Procedures to extract lineage MS SQL table's lineage, assigning  responsible queries to their respective lineages"
                            image={mssql}
                            link={
                              "https://docs.secoda.co/integrations/databases/microsoft-sql-server/"
                            }
                            buttonLabel="View in Documentation"
                          />
                        </Stack>
                      </Card>
                    </Box>
                </div>
                  <div ref={uwaftref}>
                      <Box
                        ta="center"
                        p="xl"
                        style={{ borderRadius: "md", width: "100%" }}
                        mt={0}>
                        <Card
                        style={{
                          textAlign: "center",
                          width: "100%",
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
                                width: 125,
                                height: 125,
                                borderRadius: "25%",
                                margin: '1%'
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

                          <CardItem
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
                <Stack style={{ width: "100%" }}>
                  <CardItem
                    title="Gotchi.ai"
                    description="gotchi.ai functions as a virtual pet assistant, allowing users to interact with and care for a digital pet through activities like feeding and monitoring its well-being. In addition, it also provides features that support educational study aids like a Pomodoro timer, an interactive voice-activated AI chat, an AI-powered text summarizer, memo pads, and more."
                    type="UofTHacks 11"
                    link="https://devpost.com/software/gotchi-ai"
                    buttonLabel="View Devpost"
                    image={gotchi}
                  />
                  <CardItem
                    title="Self Driving RC Car"
                    description="Connected a Raspberry Pi Zero to the Raspberry Pi OS, TensorFlow, and Python, detecting objects using their location to control
the car's movement"
                    type="Software Engineering 101 Project"
                    link="https://drive.google.com/file/d/1Hg6L83-5mZvX0KASZwBild1oKAhvDJ1o/view"
                    buttonLabel="View Demo"
                    image={goose}
                  />
                  <CardItem
                    title="Encore"
                    description="Developed React application to pull user's current listening data from spotify, allowing the user to then review and save each song. Used the Spotify API, React, and MongoDB."
                    type="Personal Project"
                    link="https://github.com/elaimizrahi/spotify"
                    buttonLabel="Github"
                    image={spotify}
                  />
                  <CardItem
                    title="MemoryMap (WIP)"
                    description={"Developed web app to create a 'Memory Map' for users using a React and Typescript front end and a MongoDB and Python back‑end"}
                    type="Personal Project"
                    link="https://github.com/elaimizrahi/spotify"
                    buttonLabel="Github"
                    image={map}
                  />
                </Stack>
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
                            fontSize: "2rem",
                            fontWeight: 900,
                          }}>
                          Languages:
                        </h4>
                        <div style={{ fontStyle: "italic", width: "100%" }}>
                          <Code
                            style={{ fontStyle: "italic", width: "100%", display: "block" }}>
                            <Group style={{ width: "100%", justifyContent: "space-between" }}>
                              <SiJavascript style={{ width: "7%", height: "auto" }} />
                              <SiPython style={{ width: "7%", height: "auto" }} />
                              <SiCplusplus style={{ width: "7%", height: "auto" }} />
                              <SiTypescript style={{ width: "7%", height: "auto" }} />
                              <SiC style={{ width: "7%", height: "auto" }} />
                              <FaJava style={{ width: "7%", height: "auto" }} />
                              <SiGo style={{ width: "7%", height: "auto" }} />
                              <SiTerraform style={{ width: "7%", height: "auto" }} />
                              <SiSwift style={{ width: "7%", height: "auto" }} />
                              <SiHtml5 style={{ width: "7%", height: "auto" }} />
                              <TbSql style={{ width: "7%", height: "auto" }} />
                              <SiCss3 style={{ width: "7%", height: "auto" }} />
                            </Group>
                          </Code>
                        </div>

                        <h4
                          style={{
                            alignSelf: "left",
                            padding: 0,   
                            fontSize: "2rem",
                            fontWeight: 900,
                          }}>
                          Frameworks:
                        </h4>
                        <div style={{ fontStyle: "italic", width: "100%" }}>
                          <Code
                            style={{ fontStyle: "italic", width: "100%", display: "block" }}>
                            <Group style={{ width: "100%", justifyContent: "space-between" }}>
                              <SiReact style={{ width: "7%", height: "auto" }} />
                              <SiMongodb style={{ width: "7%", height: "auto" }} />
                              <SiDjango style={{ width: "7%", height: "auto" }} />
                              <SiAmazonaws style={{ width: "7%", height: "auto" }} />
                              <SiNodedotjs style={{ width: "7%", height: "auto" }} />
                              <SiPostgresql style={{ width: "7%", height: "auto" }} />
                              <SiDocker style={{ width: "7%", height: "auto" }} />
                              <SiTensorflow style={{ width: "7%", height: "auto" }} />
                              <SiFirebase style={{ width: "7%", height: "auto" }} />
                              <SiCelery style={{ width: "7%", height: "auto" }} />
                              <SiElasticsearch style={{ width: "7%", height: "auto" }} />
                              <BiLogoVuejs style={{ width: "7%", height: "auto" }} />
                            </Group>
                          </Code>
                        </div>
                        <h4
                          style={{
                            alignSelf: "left",
                            padding: 0,
                            fontSize: "2rem",
                            fontWeight: 900,
                          }}>
                          Developer Tools:
                        </h4>
                        <div style={{ fontStyle: "italic", width: "100%" }}>
                          <Code
                            style={{ fontStyle: "italic", width: "100%", display: "block" }}>
                            <Group style={{ width: "100%", justifyContent: "space-between" }}>
                              <SiGit style={{ width: "7%", height: "auto" }} />
                              <SiGithub style={{ width: "7%", height: "auto" }} />
                              <SiVisualstudiocode style={{ width: "7%", height: "auto" }} />
                              <SiTrello style={{ width: "7%", height: "auto" }} />
                              <SiPytest style={{ width: "7%", height: "auto" }} />
                              <SiJira style={{ width: "7%", height: "auto" }} />
                              <SiPowerbi style={{ width: "7%", height: "auto" }} />
                              <SiLinear style={{ width: "7%", height: "auto" }} />
                              <SiGithubactions style={{ width: "7%", height: "auto" }} />
                              <SiGooglecolab style={{ width: "7%", height: "auto" }} />
                              <SiFigma style={{ width: "7%", height: "auto" }} />
                              <SiMicrosoftazure style={{ width: "7%", height: "auto" }} />
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
                        Github History
                      </h4>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://github.com/elaimizrahi",
                            "_blank"
                          )
                        }
                        style={{ 
                          backgroundColor: "#18181B", 
                          fontSize: "2rem",
                          padding: "1rem",
                          height: "auto",
                          width: "auto"
                        }}>
                        <GitHubIcon style={{fontSize: "2rem"}}/>
                        <span style={{marginLeft: "0.5rem"}}>Github</span>
                      </Button>
                    </Group>

                    <Card
                      style={{
                        textAlign: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "100%",
                        borderRadius: "12px",
                        padding: "8px",
                        marginBottom: "10px"
                      }}>
                      <GitHubCalendar
                        username="elaimizrahi"
                        style={{ justifyContent: "center" }}
                        blockSize={20}
                        fontSize={20}
                      />
                    </Card>

                  </Card>
                </Card>
                <section id="contact" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  style={{
                    textAlign: "center",
                    height: "40%",
                    borderRadius: "24px",
                    padding: "8px",
                    width: '50%'
                  }}
                  isBlurred>
                    <Group style={{ justifyContent: "space-around" }}>
                    <h2
                    style={{
                      textAlign: "left",
                      padding: "8px",
                      fontWeight: 1000,
                    }}>
                    📞 Contact Me: {" "}
                  </h2>
                      <a href={mailto}>
                        <img src={mail} alt="" height={50} width={75} />
                      </a>
                      <a href={"https://github.com/elaimizrahi"}>
                        <img src={github} alt="" height={60} width={60} />
                      </a>
                      <a href={"https://linkedin.com/in/elai-mizrahi"}>
                        <img src={linkedin} alt="" height={60} width={60} />
                      </a>
                      <a href={"tel:2269882795"}>
                        <PhoneIcon
                          style={{ color: "white", width: 65, height: 65 }}
                        />
                      </a>
                    </Group>
                    
                </Card>
                </div>
              </Stack>
            </Stack>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
