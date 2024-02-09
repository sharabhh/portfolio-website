import React, { useState } from "react";
import "./App.css";
import NewLandingPage from "./pages/NewLandingPage";
import Skills from "./pages/Skills";
import Socials from "./pages/Socials";
import Navbar from "./pages/Navbar";

function App() {
  const [mode,setMode] =useState('dark')
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <section className='first' id={mode === 'light' ? '' : 'dark'}>
          <div className="navbar">
            <Navbar mode={mode} setMode={setMode} />
          </div>
          <NewLandingPage mode={mode} />
        </section>
        <section className='second' id={mode === 'light' ? '' : 'dark'}>
          <Skills mode={mode} />
        </section>
        <section className='third' id={mode === 'light' ? '' : 'dark'}>
          <Socials mode={mode} />
        </section>
      </div>
    </div>
  );
}

export default App;
