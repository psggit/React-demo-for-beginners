import React from "react";
import Logo from "./logo.svg"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="App-logo" src={Logo} />
        <h1 className="App-title">Welcome to react</h1>
      </header>
    </div>
  )
}

export default Home