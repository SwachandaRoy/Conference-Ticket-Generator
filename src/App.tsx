import React from "react";
import "./App.css";
import Logo from "./components/logo";
import patternLines from "./assets/images/pattern-lines.svg";
import patternCircle from "./assets/images/pattern-circle.svg";
import patternSquigglyLineBottom from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineTop from "./assets/images/pattern-squiggly-line-top.svg"
import backgroundDesktop from "./assets/images/background-desktop.png";

function App() {
  return (
    <div className="App">
      <div
        className="app-background"
        style={
          {
            "--pattern-lines": `url(${patternLines})`,
            "--pattern-circle": `url(${patternCircle})`,
            "--pattern-squiggly-line-bottom": `url(${patternSquigglyLineBottom})`,
            "--pattern-squiggly-line-top": `url(${patternSquigglyLineTop})`,
            "--bg-desktop": `url(${backgroundDesktop})`,
          } as React.CSSProperties
        }
      >
        <header className="App-header p-10">
          <Logo />
        </header>
        <h1 className="text-blue-50 text-5xl font-bold">
          Your Journey to Coding Conf <br />
          2025 Starts Here!
        </h1>
        <p className="text-indigo-200 text-xl p-5">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </div>
  );
}

export default App;
