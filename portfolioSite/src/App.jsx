import { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <Sidebar /> {/* <- sidebar shows up here */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Welcome to my Portfolio</h1>
          <p>
            The links on the left will take you through my work as a Software
            Developer
          </p>
        </main>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/henrysheehan/" target="_blank">
          <img src="img/headshot.jpg" className="logo" alt="Vite logo" />
        </a>
        <a href="http://citweb.lanecc.edu:5010/" target="_blank">
          <img
            src="img/shoppingList-icon.png"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
    </>
  );
}

export default App;
