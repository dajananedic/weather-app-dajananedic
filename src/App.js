import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dajana's Weather App</h1>
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Dajana Nedic{" "}
          <span>
            <a
              href="https://github.com/dajananedic/weather-app-dajananedic"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
