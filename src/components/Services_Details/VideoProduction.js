import { Button, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ServiceDetailsWrapper } from "../../styled/ServiceDetailsWrapper";
import validator from "validator";
import { phone } from "phone";
import useViewport from "../../viewport/useViewport";

export const ServiceDetails = () => {
  const { isTablet, isMobile } = useViewport();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  //   const [phoneNo, setPhoneNo]= useState();
  const [emailError, setEmailError] = useState("");
  //   const [phoneError, setPhoneError]= useState();

  useEffect(() => {
    if (mail === "" || validator.isEmail(mail)) {
      setEmailError("");
    } else {
      setEmailError("The e-mail address entered is invalid.");
    }
  }, [mail]);

  const disableButtonCondition =
    name === "" || mail === "" || emailError !== "";

  return (
    <ServiceDetailsWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="h-70vh flex flex-col md:flex-row pl-[4%] md:pl-[10%] lg:pl-[15%] bg-bgprimary overflow-hidden">
        <div className="mt-44 mb-12 md:my-44">
          <Typography variant="h2" className=" text-[#000248]" fontWeight="400">
            Service Details
          </Typography>
          <p className="mt-12 lg:w-[35vh]">
            Give your business a unique logo to stand out from crowd. We'll
            create logo specifically for your company.
          </p>
        </div>
        <figure className=" mt-12 md:mt-44">
          <img
            src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/banner-thumb-4.png"
            alt="Designer artwork"
            className="w-full md:bottom-0"
          />
        </figure>
      </div>
      <div className="videoproduction_card">
        <div className="videoProduction">
          <div className="videoProdHead">Video Production</div>
          <div className="whyBrandHead">Why branding matters?</div>
          <div className="parabrand">
            Ut condimentum enim nec diam convallis mollis. Sed felis quam,
            semper dapibus purus sed, rhoncus ullamcorper lacus.
          </div>

          <div className="whyChooseUs border-0 ">
            <div id="accordion-62ddde8" className="accordion">
              <div className="elementor-repeater-item-1f2889d border-b-[3px] border-b-#999fae">
                <div className="accordion-header" id="headingOne-0">
                  <button
                    className="dropdownbtn flex border-0 w-[100%] justify-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-0"
                    aria-expanded="true"
                    aria-controls="collapse-0"
                  >
                    <div className=" flex items-center">
                      <i class="fa-solid fa-compress"></i>
                      <span className=" pl-[0.625rem]">Strategy</span>
                    </div>
                  </button>
                </div>
                <div
                  id="collapse-0"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne-0"
                  data-bs-parent="#accordion-62ddde8"
                >
                  <div className="accordion-body pt-0 pl-0 pr-0 pb-4 font-poppins">
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </div>
                </div>
              </div>

              <div className="elementor-repeater-item-7b09480 border-b-[3px] border-b-#999fae">
                <div className="accordion-header" id="headingOne-1">
                  <button
                    className="dropdownbtn collapsed flex border-0 w-[100%] justify-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="false"
                    aria-controls="collapse-1"
                  >
                    <div className=" flex items-center">
                      <i class="fa-solid fa-code"></i>
                      <span className=" pl-[0.8rem]">Design</span>
                    </div>
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne-1"
                  data-bs-parent="#accordion-62ddde8"
                >
                  <div className="accordion-body pt-0 pl-0 pr-0 pb-4 font-poppins">
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </div>
                </div>
              </div>

              <div className="elementor-repeater-item-fa1dd93 border-b-[3px] border-b-#999fae">
                <div className="accordion-header" id="headingOne-2">
                  <button
                    className="dropdownbtn collapsed flex border-0 w-[100%] justify-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    <div className=" flex items-center">
                      <i class="fa-solid fa-compress"></i>
                      <span className=" pl-[0.625rem]">Development</span>
                    </div>
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne-2"
                  data-bs-parent="#accordion-62ddde8"
                >
                  <div className="accordion-body pt-0 pl-0 pr-0 pb-4 font-poppins">
                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at
                    enim gravida pellentesque.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Details_form">
          <Paper elevation={4} className="enter_details">
            <Typography
              variant="h4"
              sx={{ fontSize: "2em", fontWeight: 500, marginBottom: "0.7em" }}
            >
              Get a free axil-
              <br />
              elements quote now
            </Typography>
            <div className="form_contact">
              <div className="details">Name</div>
              <input
                className="form_details"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                required
              />

              <div className="details">Email</div>
              <input
                type="email"
                className="form_details"
                placeholder="Your email"
                onChange={(e) => setMail(e.target.value)}
                required
              />
              <span
                style={{
                  fontSize: "0.8em",
                  fontWeight: "200",
                  color: "#dc3232",
                }}
              >
                {emailError}
              </span>

              <div className="details">Phone</div>
              <input className="form_details" placeholder="Your Phone" />
            </div>
            <Button
              variant="contained"
              className="pricingbtn"
              disabled={disableButtonCondition}
              sx={{
                "&.Mui-disabled": {
                  opacity: 0.3,
                  color: "blue",
                },
              }}
            >
              Get Pricing now
            </Button>
          </Paper>
        </div>
      </div>
    </ServiceDetailsWrapper>
  );
};

export default ServiceDetails;
