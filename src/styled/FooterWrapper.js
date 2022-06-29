import styled from "styled-components";


// ${({isTablet})=>(isTablet?"90%":"100%")}
export const FooterWrapper =styled.div`
    ${'' /* height: 100%; */}
    width: ${({ isTablet,isMobile }) => (isMobile ? "95%": "87%")};
    font-family: "DM Sans", sans-serif;
    padding:  ${({ isTablet,isMobile }) => (isMobile ? "4% 0px": "4% 2%")};
    display:flex;
    flex-direction:column;
    ${'' /* align-self: center; */}
    ${'' /* position: absolute; */}
    margin-left: ${({ isTablet,isMobile }) => (isMobile ? "0.9375rem": "2em")};
    ${'' /* align-items:center; */}
  
    .contentfooter{
        margin-bottom: 4em;
        ${'' /* align-self: center; */}
    }

    .iconbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${'' /* margin: 3vw; */}
        margin: ${({ isTablet,isMobile }) => (isMobile ? "3vw 0px": isTablet ? "3vw 5em" : "3vw")};
    } 

    .footerdivs{
        display: flex;
        flex-direction: ${({ isTablet,isMobile }) => (isTablet ? "column" : "row")}; 
    }

    h2{
        margin-top: 3%;
        font-size:  ${({ isTablet,isMobile }) => (isMobile ? "2.2em" : "3.4em")};
        color: #292930;
    }

    .getintouch{
        padding: ${({ isTablet,isMobile }) => (isMobile ? "0px" : "0px 1em")} ;
        padding-right: ${({ isTablet,isMobile }) => (isTablet ? "0px" : "5em")};
        width: ${({ isTablet,isMobile }) => (isTablet ? "90%" : "45%")};;
        border-right: ${({ isTablet,isMobile }) => (isTablet ? "none" : "solid #c7c7d5 0.5px")};
        margin-right: ${({ isTablet,isMobile }) => (isTablet ? "-2.5em" : "2.5em")};
        margin-bottom:${({isTablet})=>(isTablet?"5em":"10px")};
        justify-content: center;
        align-self:${({isTablet})=>(isTablet?"center":"auto")};
    }

    .otherlinks{
        padding-left: 3vw;
        display: flex;
        flex-direction: ${({isMobile}) => (isMobile ? "column" : "row")};
        margin-right: 0px;
        justify-Content:space-between;
        width: ${({ isTablet,isMobile }) => (isTablet ? "90%" : "48%")};;
        ${'' /* align-self:center; */}
        ${'' /* width:100%; */}
    }

    .textpara{
        font-size: 100%;
        font-family: 'Poppins', sans-serif;
        color: #525260;

    }

    .emailinput{ 
        display: flex;
        width: ${({ isTablet,isMobile }) => (isTablet ? "90%" : "100%")};
        flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
        margin-top: 2em;
        padding:1%;
        box-shadow:${({ isMobile }) => (isMobile ? "none" : "0px 0px 5vh 0px rgba(0, 0, 0, 0.164)")};
        border-radius:1rem;
    }

    .inputbox{
        display:flex;
        width:100%;
        border:${({isMobile }) => (isMobile ? "solid #ecf2f6 1px" : "none")};
        margin-bottom:${({isMobile }) => (isMobile ? "0.7em" : "0px")};
    }

    .subscribebtn{
        border: none;
        background-color: #5956e9;
        color: #fff;
        padding: 2.7% 5%;
        border-radius: 13px;
        font-size: 1em;
    }

    .subscribebtn:hover{
        background-color: #2522ba;
    }

    .headingService{
        font-size: x-large;
        font-weight: bold;
        margin-bottom: 1.3em;
    }

    .headingResources{
        font-size: x-large;
        font-weight: bold;
        margin-bottom: 1.3em;
    }

    .fa-brands{
        color: #999ab8;
    }

    .fa-brands:hover{
        color: #2522ba;
    }

    .headingSupport{
        font-size: x-large;
        font-weight: bold;
        margin-bottom: 1.3em;
    }
 
    .img_mail{
        height:1.5em;
        margin:2%;
    }

    a{
        font-family: 'Poppins', sans-serif;
        color: #525260;
        font-size: 1em;
        font-weight: 400;
        text-decoration: none;
    }

    a:hover{
        color: #5956e9;
    }


    .servicesdiv{ 
        padding: 0px 1em;
        margin-right: 3em;
    }

    .resourcesdiv{
        padding: 0px 1em;
        margin-top:${({ isTablet,isMobile }) => (isMobile ? "2em" : "0em")};
    }


    .supportdiv{
        padding: 0px 1em;
        margin-top:${({ isTablet,isMobile }) => (isMobile ? "2em" : "0em")};
    }

    hr{
        margin: 0px 0px 2vh 0px;
    }

    .copyright{
        display: flex;
        color: #757589;

    }

    .copyright a{
        color: #757589;
        margin-left: 1px;
    }
 
    ul{
        display: flex;
    }

    li{
        /* padding-left: 2em; */
        margin-left: 2em;
    }

    .footerbottom{
        display: flex;
        flex-direction:${({ isTablet,isMobile }) => (isTablet ? "column" : "row")};
        ${'' /* justify-content: ${({ isTablet,isMobile }) => (isTablet ? "center" : "space-between")};
        align-items: baseline; */}
        justify-content: space-between;
        align-items: center;
        font-size:0.8em
    }
`