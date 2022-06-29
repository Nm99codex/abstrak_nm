import React from 'react'

import { helpingservices } from "../../data/servicesTwo";
import { Typography } from "@mui/material";
import { ServicesComp } from "../../components/ServicesTwo/servicesComp";

function ServicesWecanhelp() {
    return (
        <div>
            <div>

                <section className={`px-4 md:px-24 lg:px-[30vh] py-4 md:py-24 bg-[#ecf2f6]`}>
                    <p className="text-rose my-[1rem] font-medium capitalize antialiased text-xl mob:text-[1em]">
                        What We Can Do For You
                    </p>
                    <Typography variant="h2" className="mb-8 ">
                        Services we can
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 m">
                        {helpingservices.map((comp) => (
                            <ServicesComp
                                heading={comp.heading}
                                icon={comp.icon}
                                description={comp.description}
                                url={comp.url}
                                key={comp}
                                compBgWhite={true}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServicesWecanhelp