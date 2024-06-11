import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          <p>
            This project was coded by {""}
            <a
              href="https://github.com/Danielafsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniela Pereira
            </a>
            , open-sourced on {""}
            <a
              href="https://github.com/Danielafsp/final-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            , and hosted on{" "}
            <a
              href="https://stellar-malabi-4e825e.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
