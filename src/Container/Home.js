import React, { useState, Suspense, lazy } from "react";
import Fallback from "../components/Fallback";

const HeroSection = lazy(() => import("../components/HeroSection"));
const Topbar = lazy(() => import("../components/Topbar"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const DropdownMenu = lazy(() => import("../components/DropdownMenu"));
const Intro = lazy(() => import("../components/Intro"));

const renderLoader = () => <Fallback />;

const Home = () => {
  const [close, setClose] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Intro close={close} setClose={setClose} />
        <Topbar close={close} navOpen={navOpen} setNavOpen={setNavOpen} />
        <DropdownMenu navOpen={navOpen} setNavOpen={setNavOpen} />
        <HeroSection close={close} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Skills close={close} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Projects close={close} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Contact close={close} />
      </Suspense>
    </>
  );
};

export default Home;
