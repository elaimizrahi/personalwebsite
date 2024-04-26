import "./App.css";
import profile from "./images/IMG_5423.png";
import secodaLogo from "./images/secoda.png";
import { Group, Stack, Box, List, Text } from "@mantine/core";
import commandPalette from "./images/commandPalette.png";
import CardItem from "./components/CardItem";
import Jira from "./images/Jira.png";
import mssql from "./images/mssql.png";
import powerbi from "./images/powerbi.png";
import uw from "./images/uw.png";
import goose from "./images/goose.png";
import spotify from "./images/spotify.png";
import map from "./images/map.png";
import mail from "./images/mail.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";

function App() {
  const [page, setPage] = useState("home"); // State to manage the current page

  const mailto = "mailto:elai.mizrahi@gmail.com";

  // Function to handle page navigation
  const navigateToPage = (pageName: string) => {
    setPage(pageName);
  };

  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
            <div style={{ position: "fixed", top: 25, zIndex: 999 }}>
              <Tabs
                color={"default"}
                aria-label="Tabs colors"
                radius="full"
                size="lg"
                variant="solid"
                style={{ color: "white", padding: "10px" }}>
                <Tab key="about" title="About Me" style={{ margin: "3px" }} />
                <Tab key="experience" title="Experience" />
                <Tab key="projects" title="Projects" />
                <Tab key="skills" title="Skills" />
                <Tab
                  key="contact"
                  title="Contact Me"
                  style={{ margin: "3px" }}
                />
              </Tabs>
            </div>
            <Stack
              style={{ paddingTop: "75px", width: "70%", justify: "center" }}>
              <Group style={{ paddingBottom: "50px" }}>
                <img
                  src={profile}
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    border: "2px solid",
                  }}
                  alt="Profile"></img>
                <Stack ml={25}>
                  <Text fw={500} fz={55} mr="auto">
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
                      fontSize: "50px",
                      fontWeight: "bold",
                      marginRight: "auto",
                    }}
                    repeat={Infinity}
                  />
                  <Group style={{ marginRight: "auto", marginTop: "10px" }}>
                    <Button style={{ backgroundColor: "#7828C8" }}>
                      <InsertDriveFileIcon />
                      Resume
                    </Button>
                    <Button
                      style={{
                        marginRight: "auto",
                        backgroundColor: "#004493",
                      }}>
                      <LinkedInIcon />
                      Linkedin
                    </Button>
                    <Button
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
              <Card>
                <CardBody>
                  <section id="about">ABOUT</section>
                  <div>
                    {" "}
                    19 y/o software engineer, student, and aspiring founder
                  </div>
                  <div
                    style={{
                      paddingTop: "20px",
                      textAlign: "center",
                      display: "flex",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, sans-serif",
                    }}>
                    I am currently entering my second year of studying Software
                    Engineering at the University of Waterloo. Most recently, I
                    completed a co-op term at Secoda, a YC S21 company,
                    developing fullstack features for the engineering team. I am
                    now looking for a Winter 2024 co-op position in software
                    engineering or a related field. You can reach me at
                    emizrahi@uwaterloo.ca, or click any of the links at the
                    bottom of the page.
                  </div>
                </CardBody>
              </Card>{" "}
              <section id="projects">PROJECTS</section>
              <h2 style={{ textAlign: "left", marginBottom: 0 }}>
                👨‍💻 Experience{" "}
              </h2>
              <Box
                ta="center"
                p="xl"
                style={{ borderRadius: "md" }}
                fz="xl"
                mt={0}>
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
                    <h3 style={{ marginBottom: 0 }}>Secoda (YC S21)</h3>
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
                <Group style={{ width: "1000px" }}>
                  <CardItem
                    title="Command Palette"
                    type="feature"
                    description="With the command palette feature, users are able to quickly search through their workspace, create new resources, and navigate through Secoda."
                    image={commandPalette}
                    link={
                      "https://docs.secoda.co/secoda-change-log#august-2-2023-release-7.4.7"
                    }
                    buttonLabel="View in Changelog"
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
                </Group>
                <Group style={{ width: "1000px" }}>
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
                      "https://docs.secoda.co/integrations/databases/microsoft-sql-server7"
                    }
                    buttonLabel="View in Documentation"
                  />
                </Group>
              </Box>
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
                <div>
                  <h4 style={{ marginBottom: 0 }}>
                    UWaterloo EcoCar Design Team
                  </h4>
                  <h6
                    style={{
                      marginTop: 0,
                      textAlign: "left",
                      color: "lightgray",
                    }}>
                    Software Team
                  </h6>
                </div>
                <List
                  size="md"
                  style={{
                    color: "white",
                    textAlign: "left",
                    paddingLeft: 100,
                  }}>
                  <List.Item>
                    Researched methods of creating 3D model of automotive
                    interiors using Blender and Python
                  </List.Item>
                  <List.Item>
                    Worked in software team, completing tasks in a timely manner
                    to prepare design team for upcoming integration with
                    Cadillac Lyric
                  </List.Item>
                  <List.Item>
                    Used Git and Github tooling to ensure high quality code
                    production and reviews in an agile development environment
                  </List.Item>
                </List>
              </Group>
              <h2 style={{ textAlign: "left" }}>🛠️ Projects </h2>
            </Stack>
            <Group style={{ width: 1500, justifyContent: "center" }}>
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
              />{" "}
              <CardItem
                title="MemoryMap (WIP)"
                description="Developed web app to create a ”Memory Map” for users using a React and Typescript front end and a MongoDB and Python
                  back‑end"
                type="Personal Project"
                link="https://github.com/elaimizrahi/spotify"
                buttonLabel="Github"
                image={map}
              />{" "}
            </Group>{" "}
            <Group w={1000} style={{ justifyContent: "space-around" }}></Group>
            <Stack style={{ paddingTop: "0px", width: "50%" }}>
              <h2 style={{ textAlign: "left" }}>🪐 Skills </h2>
              <Box color="darkGray" ta="left" p="md" pt={0} fz="xl">
                <Stack gap={0}>
                  <h4 style={{ alignSelf: "left", paddingTop: 0 }}>
                    Languages:
                  </h4>
                  <div style={{ fontStyle: "italic", fontSize: "18px" }}>
                    TypeScript, Python, C++, Java, C, Javascript, HTML, CSS,
                    SQL, MSSQL, VHDL
                  </div>
                  <h4 style={{ alignSelf: "left", padding: 0 }}>
                    Tools and Frameworks:
                  </h4>
                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: "18px",
                      padding: 0,
                    }}>
                    React, MongoDB, Django, Firebase, Tensorflow, Node.js, Vite,
                    Postgres, Docker, Tensorflow, REST API's, and more!
                  </div>
                </Stack>
              </Box>
              <section id="contact">CONTACT ME</section>

              <h2 style={{ textAlign: "left" }}>📞 Contact Me </h2>
              <Group style={{ justifyContent: "space-around" }}>
                <a href={mailto}>
                  <img src={mail} height={50} width={75} />
                </a>
                <a href={"https://github.com/elaimizrahi"}>
                  <img src={github} height={60} width={60} />
                </a>
                <a href={"https://linkedin.com/in/elai-mizrahi"}>
                  <img src={linkedin} height={60} width={60} />
                </a>
                <a href={"tel:2269882795"}>
                  <PhoneIcon
                    style={{ color: "white", width: 65, height: 65 }}
                  />
                </a>
              </Group>
            </Stack>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
