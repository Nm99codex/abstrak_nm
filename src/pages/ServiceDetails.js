import React from 'react'
import NavBarSecond from "../components/NavBar/NavBarSecond";
import NavBarMob from "../components/NavBar/NavBarMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobSecond from "../components/NavBar/NavBarMobSecond";
import { LandingComp } from "../components/ServicesTwo/landingComp";
import VideoProduction from '../components/Services_Details/VideoProduction';
import Process from '../components/Services_Details/Process/Process';
import ProcessMob from '../components/Services_Details/Process/ProcessMob';
import WorkTogether from '../components/WorkTogether';
import { Footer } from '../components/Footer';


function Tabview({ isTop }) {
    return (
        <>
            <div className=" shadow-md sticky top-0 bg-white">
                {isTop ? <NavBarSecond /> : <NavBar />}
            </div>
            {/* <LandingComp /> */}
            <VideoProduction/>
            <Process/>
            <WorkTogether/>
            <Footer/>
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
            <VideoProduction/>
            <ProcessMob/>
            <WorkTogether/>
            <Footer/>

        </>
    );
}


function ServiceDetails() {
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
};

export default ServiceDetails