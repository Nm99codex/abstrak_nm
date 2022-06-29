import styled from "styled-components";

export const ServiceDetailsWrapper = styled.div`
  font-family: "DM Sans", sans-serif;

  .videoproduction_card {
    display: flex;
    margin: ${({ isMobile }) => (isMobile ? "10% 2%" : "10% 9%")} ;
    flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
    ${'' /* justify-content: space-evenly; */} 
  }
 
  .videoProduction {
    width:100%;
  }
 
  .videoProdHead {
    color: #c75c6f;
    font-size:1.3em;
    font-weight: 500;
    margin-bottom:0.73em;
  }

  .whyBrandHead {
    font-size:  ${({ isMobile }) => (isMobile ? "1.9em" : "2.6em")};
    font-weight: 500;
    margin-bottom:0.6em;
    color:#212529;
  }

  .parabrand{
    font-family: Poppins sans-serif;
    width:100%;
    font-size: 1.13em;
    color:#525260;
    margin-bottom:2.2em;
  }

  .dropdownbtn{
      font-size:1.5em;
      color:#5956e9;
      text-transform:capitalize;
      padding:0.8em 0px;
      font-weight: 400;
  }

  .dropdownbtn.collapsed{
    color:#525260;
    text-decoration:none;
  }

  .accordion-body{
    color:#525260;
  }

  .Details_form{
    width: 100%;
    flex-wrap:wrap;
    padding-left:6.4em;
    margin-top: ${({ isTablet }) => (isTablet ? "8%" : "0px")};
  }

  .enter_details {
    border-radius: 30px;
    align-self: center;
    padding: 10%;
    margin-bottom:2em;
  }

  .form_contact {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
  }

  .form_contact .details {
    margin-top: 3%;
    color: #27272e;
    font-size: 14px;
    font-family: Poppins;
    font-weight: 500;
  }

  .form_contact .form_details {
    color: #292930;
    padding: 0.95em 1.25em;
    font-size: 0.95em;
    border-radius: 16px;
    border: solid #ced4da 1px;
    margin: 0.5em 0.2em 0.7em 0.2em;
    font-family: inherit;
    ${'' /* text-transform: capitalize; */}

    &:focus {
      outline: none;
      border: none;
      box-shadow: 4px 4px 4px rgba(94, 94, 94, 0.17);
    }
  }

  .pricingbtn {
    width: 100%;
    border-radius: 15px;
    ${"" /* margin-top:2em; */}
    padding: 0.9em;
    margin-bottom:3%;
    background-color: #fff;
    color: #292930;
    text-transform: capitalize;
    border: 1px solid #99a1aa;
    &:hover {
      background-color: #5956e9;
      border: none;
      color: #fff;
    }
  }
`;
