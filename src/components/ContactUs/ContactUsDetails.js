import React from "react";
import { useState, useEffect } from "react";
import useViewport from "../../viewport/useViewport";
import { ContactUsWrapper } from "../../styled/ContactUsWrapper";
import { Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { officeDetails } from "../../data/Office";
import validator from "validator";
import WorkTogether from "../../components/WorkTogether";
import { Footer } from "../../components/Footer";

export const ContactUsDetails = () => {
  const { isTablet, isMobile } = useViewport();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (mail === "" || validator.isEmail(mail)) {
      setEmailError("");
    } else {
      setEmailError("The e-mail address entered is invalid.");
    }
  }, [mail]);

  const disableButtonCondition =
    name === "" ||
    company === "" ||
    mail === "" ||
    message === "" ||
    emailError !== "";

  return (
    <ContactUsWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="headingcomp">
        <div className="container">
          <div className="links">
            <a href="/">Home</a>
            <span className="bullet">.</span>
            <span className="contactbtn">contact</span>
          </div>
          <Typography variant="h2" className="contactHeading">
            Contact
          </Typography>
        </div>
      </div>

      <div className="contactdetails">
        <Paper elevation={4} className="enter_details">
          <Typography
            variant="h4"
            sx={{ fontSize: "2em", fontWeight: 500, marginBottom: "0.7em" }}
          >
            Get a free quote now
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

            <div className="details">Company</div>
            <input
              className="form_details"
              placeholder="Your company"
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <div className="details">How can we help you</div>
            <textarea
              className="form_details"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={10}
              cols={40}
              required
            />
          </div>
          <Button
            variant="contained"
            className="sendbtn"
            disabled={disableButtonCondition}
            sx={{
              "&.Mui-disabled": {
                opacity: 0.3,
                color: "blue",
              },
            }}
          >
            Send message
          </Button>
        </Paper>

        <div className="number_email">
          <Card className="contactno">
            <Typography variant="h4" className="headnumber">
              Phone
            </Typography>
            <div className="cust_care">
              Our customer care is open from Mon-Fri,
              <br /> 10:00 am to 6:00 pm
            </div>
            <Typography className="number" variant="h4">
              <a href="tel:1234567890">(123) 456 7890</a>
            </Typography>
          </Card>

          <Card className="email">
            <Typography variant="h4" className="heademail">
              Email
            </Typography>
            <div className="cust_care">
              Our customer care is open from Mon-Fri,
              <br /> 10:00 am to 6:00 pm
            </div>
            <Typography className="number" variant="h4">
              <a href="mailto:info@example.com">info@example.com</a>
            </Typography>
          </Card>
        </div>
      </div>

      <div className="findcomp">
        <div className="all_comp">
          <div className="officehead">
            <div className="findus">Find us</div>
            <Typography variant="h3" className="ouroffice">
              Our office
            </Typography>
          </div>
          <div className="offices">
            {officeDetails.map((prop) => (
              <>
                <div className="office_name">
                  <img src={prop.img} alt="verginia" />
                  <Typography className="headvirginia" variant="h4">
                    {prop.cityName}
                  </Typography>
                  <div className="desc_virginia">{prop.address}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <WorkTogether />
      <Footer />
    </ContactUsWrapper>
  );
};
