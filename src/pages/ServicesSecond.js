import React from "react";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import NavBarMob from "../components/NavBar/NavBarMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobSecond from "../components/NavBar/NavBarMobSecond";
import { LandingComp } from "../components/ServicesTwo/landingComp";
import ExpertsInField from "../components/ServicesSecond/ExpertsInField";
import ExpertsInFieldMob from "../components/ServicesSecond/ExpertsInFieldMob";
import OurValues from "../components/AboutUs/OurValues/OurValues";
import OurValuesMob from "../components/AboutUs/OurValues/OurValuesMob";
import { Footer } from "../components/Footer";
import WorkTogether from "../components/WorkTogether";




import { bodyData } from "../data/servicesTwo";
import { Typography } from "@mui/material";
import { ServicesComp } from "../components/ServicesTwo/servicesComp";
import ServicesWecanhelp from "../components/ServicesSecond/ServicesWecanhelp";




function Tabview({ isTop }) {
    console.log(isTop)
    return (
        <>
            <div className=" shadow-md sticky top-0 bg-white">
                {isTop ? <NavBarSecond /> : <NavBar />}
            </div>
            <LandingComp />
            <ExpertsInField />
            <ServicesWecanhelp/>

            <OurValues />
            <WorkTogether />
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
            <LandingComp />
            <ExpertsInFieldMob />
            <ServicesWecanhelp/>
            <OurValuesMob />
            <WorkTogether />

            <Footer />


        </>
    );
}

function ServicesSecond() {
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
            <div className="hidden lg:block home">
                <Tabview isTop={isTop} />
            </div>
            <div className="hidden mob:block home">
                <MobView isTop={isTop} />
            </div>
        </>
    );
}

export default ServicesSecond;