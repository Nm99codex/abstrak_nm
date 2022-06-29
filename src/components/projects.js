import { Typography } from "@mui/material";
import { useState } from "react";
import { finestWorks, finestWorksb, finestWorksm } from "../data/projects";

export function Projects() {
  const [active, setActive] = useState("all");

  const finalArray = active === "all" ? finestWorks : active === "branding" ? finestWorksb : finestWorksm ;

  return (

    <section className=" bg-light py-[6%] px-[15%]">

      <p className="text-rose my-[1rem] font-medium capitalize">Our project</p>

      <h2 className="text-3xl md:text-5xl font-[500]">
        Some of our
        <br className=" hidden md:block" /> finest work.
      </h2>

      <ul className="flex flex-row gap-[2rem] mt-[4rem]">
        <button className="" onClick={() => setActive("all")}>
          <span
            className={
              active === "all"
                ? "capitalize underline underline-offset-[1rem] decoration-primary decoration-2"
                : "capitalize"
            }
          >
            All works
          </span>
        </button>
        <button className="" onClick={() => setActive("branding")}>
          <span
            className={
              active === "branding"
                ? "capitalize underline underline-offset-[1rem] decoration-primary decoration-2"
                : "capitalize"
            }
          >
            Branding
          </span>
        </button>
        <button className="" onClick={() => setActive("mobile")}>
          <span
            className={
              active === "mobile"
                ? "capitalize underline underline-offset-[1rem] decoration-primary decoration-2"
                : "capitalize"
            }
          >
            Mobile
          </span>
        </button>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 justify-center transition-all duration-500">

        {finalArray.map((work) => (
            
          <div
            key={work}
            className="rounded-[1.5rem] bg-[#FFFFFF] max-w-xl lg:max-w-7xl mx-auto lg:mx-12 group overflow-hidden "
          >

            <div className="overflow-hidden">
              <img
                src={work.imageUrl}
                alt={work.heading}
                className=" bg-cover rounded-t-[1.5rem] group-hover:scale-125 transition-all duration-700 "
              />
            </div>

            <div className="my-8 ml-8 ">
              <Typography variant="h5">{work.heading}</Typography>
              <a href="##" className="text-xs md:text-base mt-2 text-slate-500 hover:text-primary">{work.caption}</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
