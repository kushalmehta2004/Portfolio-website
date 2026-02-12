import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";
import React from 'react';
import './index.css';
import ChatWidget from './components/ChatWidget';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  /* Minimal static mesh gradient */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
      radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.02) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Professional noise texture */
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.02;
    pointer-events: none;
    z-index: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 100px;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Research />
                <Education />
              </Wrapper>
              <Footer />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
              <ChatWidget />
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
