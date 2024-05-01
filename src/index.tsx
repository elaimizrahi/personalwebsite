import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Route";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import backgroundImage from "./images/background1.png";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <img
        src={backgroundImage}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: -1,
        }}></img>

      <main className="dark text-foreground">
        <MantineProvider>
          <Route />
        </MantineProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
