import React from "react";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import NavBarMob from "../components/NavBar/NavBarMob";
import NavBar from "../components/NavBar/NavBar";
import NavBarMobSecond from "../components/NavBar/NavBarMobSecond";

import { ContactUsDetails } from "../components/ContactUs/ContactUsDetails";


function Tabview({isTop}) {
    console.log(isTop)
    return (
        <>
            <div className=" shadow-md sticky top-0 bg-white">
                {isTop ? <NavBarSecond /> : <NavBar />}
            </div>
           <ContactUsDetails/>

        </>
    );
}

function MobView({ isTop }) {
    return (
        <>
            <div className=" shadow-md sticky top-0 bg-white">
                {isTop ? <NavBarMobSecond /> : <NavBarMob />}
            </div>
            <ContactUsDetails/>



        </>
    );
}

function ContactUs() {
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
                <Tabview isTop={isTop}/>
            </div>
            <div className="hidden mob:block home">
                <MobView isTop={isTop} />
            </div>
        </>
    );
}

export default ContactUs;
