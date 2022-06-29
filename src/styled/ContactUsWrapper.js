import styled from 'styled-components'
import contactBackground from '../Assets2/ContactBackground.svg'

export const ContactUsWrapper =styled.div`
    width:100%;
    font-family: "DM Sans", sans-serif;

    .headingcomp{
        width:100%;
        ${'' /* height:  ${({ isTablet,isMobile }) => (isMobile ?"30em":(isTablet ? "25em" : "30em"))}; */}
        background-image:  url(${contactBackground});
        background-repeat:no-repeat;
        background-size:cover;
        display:flex;
        padding: ${({ isTablet,isMobile }) => (isMobile ?"3em 0px 2.6em":(isTablet ? "8em 0px 5.9em" : "10em 0px 10em"))};
        ${'' /* align-items:center; */}
    }

    .container{
        width:100%;
        margin:${({ isTablet,isMobile }) => (isMobile ? "0px 1% 1em" : "0px 8% 1em")};
        padding:0px 1em;
    }
 
    .links{
        margin-bottom:2em;
        font-weight:500;
    }

    a{
        text-decoration:none;
        color:#999fae;
    }

    .bullet{
        margin:0.5em;
        color:#999fae;
    }    

    .contactbtn{
        color:#5956e9;
    }

    .contactHeading{
        font-size:${({ isTablet,isMobile }) => (isMobile ? "38px" : "3.5em")};
        font-weight:500;
        color:#292930; 
    }

    .contactdetails{
        display:flex;
        flex-direction: ${({ isTablet,isMobile }) => (isTablet ? "column" : "row")};
        justify-Content:space-evenly;
        padding: ${({ isTablet,isMobile }) => (isMobile ?"11% 5%":(isTablet ? "11%" : "9em 2em"))};
        background-color:#fefefe;
        align-items: flex-start;
        align-self:center;
    }

    .enter_details{
        width:${({ isTablet,isMobile }) =>(isMobile ?"100%":(isTablet ? "83%" : "34%"))};
        border-radius: 30px;
        align-self:center;
        padding: 2em 3.5%;
        box-shadow: 0 20px 48px 0 rgb(153 161 170 / 25%);
        ${'' /* box-shadow:10px 10px 10px rgba(94, 94, 94, 0.17); */}
    }

    
    .number_email{
        width:${({ isTablet,isMobile }) =>(isMobile ?"100%":(isTablet ? "83%" : "36%"))};
        align-self:center;
    }

    .form_contact{
        display:flex;
        flex-direction:column;
        justify-Content:center;
    }

    .form_contact .details{
        margin-top:2%;
        color: #27272e;
        font-size:14px;
        font-weight:600;
    }

    .form_contact .form_details{
        color:#292930;
        padding: 0.9em 1.2em;
        font-size: 0.95em;
        border-radius: 16px;
        border: solid #ced4da 1px;
        margin: 0.5em 0.2em 0.7em 0.2em;
        font-family: "DM Sans";

        &:focus{
            outline:none;
            border:none;
            box-shadow: 4px 4px 4px rgba(94, 94, 94, 0.17);
        }
    }

    .sendbtn{
        width: 100%;
        border-radius: 15px;
        margin-top:2em;
        padding: 0.9em;
        background-color: #5956e9;
        text-transform: capitalize;
        &:hover{
            background-color: #2522ba;
        }
    }

    .contactno{
        padding:2em 3em;
        background:#27272e;
        border-radius: 10px;
        margin-top:6.5em; 
    }    

    .email{ 
        padding:2em 3em;
        background:#27272e;
        border-radius: 10px;
        margin-top:8.5em;    
    }
    .headnumber{
        font-weight:500; 
        color:#ffffff;
        margin-bottom:0.8em;
    }

    .heademail{
        font-weight:500;
        color:#ffffff;
        margin-bottom:0.8em;
    }

    .cust_care{
        color:#999fae;
        font-size:16px;
        font-family:Poppins;
        margin:0px 0px 2em;
    }

    .number a{
        color:#fab8c4;
        font-weight:500;
        &:hover {
            color:#fff;
        }
    }

    .contactform{
        box-shadow:100em;
    }

    .findcomp{
        width:100%;
        background-color:#27272e;
        padding:${({ isTablet,isMobile }) => (isMobile ? "6em 1% 7em" : "9em 7% 7em")};
    }

    .all_comp{
        padding:0px 1em;
    } 

    .findus{
        color:#c75c6f;
        font-size:1.4em;
        margin-bottom:1em;
    }

    .ouroffice{
        color:#fff;
        font-weight:500;
        margin-bottom:0.55em;
    }

    .offices{
        display:flex;
        flex-wrap: ${({ isTablet,isMobile }) => (isTablet ? "wrap" : "nowrap")};
        ${'' /* width:80%; */}
    }

    .office_name{
        width: ${({ isTablet,isMobile }) => (isMobile?"100%":(isTablet ? "42%" : "58%"))};
        margin:${({ isTablet,isMobile }) => (isTablet ? "1%" : "1%")};
        margin-bottom:${({ isTablet,isMobile }) => (isMobile?"25%":"4%")};
        height:21em;
    }

    .office_name img{
        width:${({ isTablet,isMobile }) => (isTablet ? "100%" : "97%")};
    }

    .headvirginia{
        font-weight: 500;
        color:#fff;
        margin: 0.5em 0;

    }

    .desc_virginia{
        width:70%;
        color:#999fae;
        margin:0px 0px 2em;
    }
`
