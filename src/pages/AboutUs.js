import React from "react";
import OurTeam from "../components/AboutUs/OurTeam/OurTeam";
import OurTeamMob from "../components/AboutUs/OurTeam/OurTeamMob";
import WhoWeAre from "../components/AboutUs/WhoWeAre/WhoWeAre";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import NavBarMob from "../components/NavBar/NavBarMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobSecond from "../components/NavBar/NavBarMobSecond";
import WhoWeAreMob from "../components/AboutUs/WhoWeAre/WhoWeAreMob";
import OurValues from "../components/AboutUs/OurValues/OurValues";
import OurValuesMob from "../components/AboutUs/OurValues/OurValuesMob";
import { Footer } from "../components/Footer";

function Tabview({ isTop }) {
  return (
    <>
      <div className=" shadow-md sticky top-0 bg-white">
        {isTop ? <NavBarSecond /> : <NavBar />}
      </div>
      <div className=" py-[12.5rem] pt-[8.125rem] mx-[1.875rem] w-[55%]">
        <div className="text-[3.5rem] text-[#000248] mb-[2.5rem]  font-medium leading-[1.25]">
          One of the fastest growing agency
        </div>
        <div className=" w-[64.37%] text-[1.125rem] text-[#525260]">
          We design and develop web and mobile applications for our clients
          worldwide.
        </div>
      </div>
      <WhoWeAre />
      <OurValues />
      <OurTeam />
      <Footer />
    </>
  );
}

function MobView({ isTop }) {
  return (
    <>
      <div className=" shadow-md sticky top-0 bg-white">
        {isTop ? <NavBarMobSecond /> : <NavBarMob />}
      </div>
      <div className="">
        <div className=" pb-[7.5625rem] pt-[5rem] mx-[0.9375rem]">
          <div className="text-[2.125em] text-[#000248] mb-[2.5rem]  font-medium leading-[1.25]">
            One of the fastest growing agency
          </div>
          <div className=" text-[1em] text-[#525260]">
            We design and develop web and mobile applications for our clients
            worldwide.
          </div>
        </div>
        <WhoWeAreMob />
        <OurValuesMob />
        <OurTeamMob />
        <Footer />
      </div>
    </>
  );
}

function AboutUs() {
  const [isTop, setIsTop] = React.useState(false);
  const changeNav = () => {
    if (window.scrollY >= 10) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <>
      <div className="hidden lgS:block home">
        <Tabview isTop={isTop} />
      </div>
      <div className="hidden mob:block home">
        <MobView isTop={isTop} />
      </div>
    </>
  );
}

export default AboutUs;
