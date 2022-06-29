import { Typography } from "@mui/material";

export const LandingComp = () => {
  return (
    <div className="h-70vh flex flex-col md:flex-row pl-[4%] md:pl-[10%] lg:pl-[20%] bg-bgprimary overflow-hidden">
      <div className="mt-44 mb-12 md:my-44">
        <Typography variant="h2" className="lg:w-[80%]" fontWeight="500">
          Best solutions for your business
        </Typography>
        <p className="mt-12 lg:w-[35vh]">
          Give your business a unique logo to stand out from crowd. We'll create
          logo specifically for your company.
        </p>
      </div>
      <figure className=" mt-12 md:mt-44">
          <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/banner-thumb-4.png" alt="Designer artwork" className="w-full md:bottom-0" />
      </figure>
    </div>
  );
};
