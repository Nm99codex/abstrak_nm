import React from "react";
import { ServicesComp } from "../components/ServicesTwo/servicesComp";
import { LandingComp } from "../components/ServicesTwo/landingComp";
import { servicesNav } from "../data/servicesTwo";
import { bodyData } from "../data/servicesTwo";
import { Typography } from "@mui/material";
import WorkTogether from "../components/WorkTogether";
import { Footer } from "../components/Footer";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import NavBarMob from "../components/NavBar/NavBarMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobSecond from "../components/NavBar/NavBarMobSecond";

export const ServicesTwo = () => {
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
    <div className="">
      <div className="hidden lg:block home">
        <div className=" shadow-md sticky top-0 bg-white">
          {isTop ? <NavBarSecond /> : <NavBar />}
        </div>
      </div>
      <div className="hidden mob:block home">
        <div className=" shadow-md sticky top-0 bg-white">
          {isTop ? <NavBarMobSecond /> : <NavBarMob />}
        </div>      </div>
        <LandingComp />
      <ul className="space-x-6 lg:space-x-12 flex flex-wrap justify-center mb-8 border-b-[0.2px]  border-slate-200 sticky top-0 pt-8 bg-white w-full">
        {servicesNav.map((nav) => (
          <a className="text-lg hover:underline underline-offset-[1.3rem] lg:underline-offset-[2.3rem] decoration-primary hover:text-primary decoration-2 pb-8 transition-all duration-1000 ease-linear" href={nav.url}>{nav.name}</a>
        ))}
      </ul>
      {bodyData.map((element) => (
        <section id={element.id} key={element} className={`px-4 md:px-24 lg:px-[30vh] py-4 md:py-24 ${element.background}`}>
          <p className="text-rose my-[1rem] font-medium capitalize antialiased text-xl">
            {element.category}
          </p>
          <Typography variant="h2" className="mb-8">
            {element.heading}
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
            {element.components.map((comp) => (
              <ServicesComp
                heading={comp.heading}
                icon={comp.icon}
                description={comp.description}
                url={comp.url}
                key={comp}
                compBgWhite={element.compBgWhite}
              />
            ))}
          </div>
        </section>
      ))}
      <WorkTogether />
      <Footer />
    </div>
  );
};
