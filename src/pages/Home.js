import React from "react";
import { Services } from "../components/services";
import { Projects } from "../components/projects";
import WorkTogether from "../components/WorkTogether";
import Designstartupmovement from "../components/Designstartupmovement/Designstartupmovement";
import DesignstartupmovementMob from "../components/Designstartupmovement/DesignstartupmovementMob";
import FromGettingStarted from "../components/FromGettingStarted/FromGettingStarted";
import FromGettingStartedMob from "../components/FromGettingStarted/FromGettingStartedMob";
import LatestStories from "../components/LatestStories/LatestStories";
import LatestStoriesMob from "../components/LatestStories/LatestStoriesMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMob from "../components/NavBar/NavBarMob";
import { FirstCompHome } from "../components/FirstCompHome"
import { TopClients } from "../components/TopClients"
import { Footer } from "../components/Footer"



function Tabview() {
  return (
    <>
      <NavBar className="" />
      <FirstCompHome/>
      <Services />
      <Projects />
      <LatestStories />
      <Designstartupmovement />
      <FromGettingStarted />
      <TopClients />
      <WorkTogether /> 
      <Footer/>
    </>
  );
}

function MobView() {
  return (
    <>
      <NavBarMob className="" />
      <FirstCompHome/>
      <Services />
      <Projects />
      <LatestStoriesMob />
      <DesignstartupmovementMob />
      <FromGettingStartedMob />
      <TopClients />
      <WorkTogether />
      <Footer />
    </>
  );
}

function Home() {
    return (
        <>
            <div className="hidden lg:block home">
                <Tabview />
            </div>
            <div className="hidden mob:block home">
                <MobView />
            </div>
        </>
    );
}

export default Home;