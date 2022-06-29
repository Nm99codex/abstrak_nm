import { Typography } from "@mui/material";
import { ServicesComp } from "./servicesComp";
import { indexServicesData } from "../data/indexServices";

export function Services() {
  return (
    <section className="m-[1rem] px-8 md:px-[15%] my-8 md:my-24">
      <p className="text-rose my-[1rem] font-medium capitalize">
        What we can we do for you
      </p>
      <Typography variant="h3" className="mb-8">
        Services we can <br className="" /> help you with
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:h-[70vh] mt-8 lg:mt-0">
        {indexServicesData.map((element) => (
          <ServicesComp
            heading={element.heading}
            icon={element.icon}
            marginTop={element.marginTop}
            description={element.description}
            url={element.url}
            key={element}
          />
        ))}
      </div>
    </section>
  );
}
