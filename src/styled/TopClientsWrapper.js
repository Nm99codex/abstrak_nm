import styled from "styled-components";
import topclients from '../Assets2/topclients.svg'

export const TopClientsWrapper=styled.div`
    width:100%;
    height: 102vh;
    padding: 5%;
    font-family: "DM Sans";
    background-image:url(${topclients});
    background-position:top; 
    background-size: cover;
    background-repeat:no-repeat; 
    background-color:#27272e;
    ${'' /* position: absolute;  */}

    .content{
        padding: 0px 2em;
    } 

    .heading_desc{
        display: flex;
        flex-direction:column;
        align-item: center;
        justify-content:center;
        margin:${({ isTablet,isMobile }) => (isMobile ? "0px" : "0px 0px 4.5em")};
        ${'' /* padding-left: 4% */}
    }

    .secondheadingdiv{
        padding:${({ isTablet,isMobile }) => (isMobile ? "0px" : "0px  5%")};
    }

    .topclientsheading{
        margin: 0px 0px 0.9em;
        color:#c75c6f;
        font-size: 1em;
        font-weight:bold;
    }

    .headingsolutions{
        color:#fff;
        font-size:${({ isTablet,isMobile }) => (isMobile ? "2.2em" : "2.7em")};
        font-weight:${({ isTablet,isMobile }) => (isMobile ? "500" : "500")};
        margin:0px 0px 0.5em;
    }

    .description{
        font-family:'Poppins', sans-serif;
        font-size: 1.17em;
        ${'' /* color: #ffffff */}
        color:rgba(255, 255, 255, 0.548);
    }

    .brandsrow1{
        display: flex;
        ${'' /* justify-content: space-evenly; */}
        flex-direction: ${({ isTablet,isMobile }) => (isTablet ? "column" : "row")};
        ${'' /* margin: 4em 5em; */}
        align-self:center;
    }

    .brandsrow2{
        display: flex;
        ${'' /* justify-content: space-evenly; */}
        flex-direction: ${({ isTablet,isMobile }) => (isTablet ? "column" : "row")};
        ${'' /* margin: 4em 5em; */}
        align-self:center;
    }

    .brands{
        display: flex;
        flex-direction:column;
        ${'' /* justify-content: space-evenly; */}
        margin: 2em 0px 0px;
        ${'' /* transition: 1s ease-in; */}
        align-self: ${({ isTablet,isMobile }) => (isTablet ? "center" : "auto")};
    }

    .brandsgrpof2{
        display: flex;
        justify-content: "space-evenly";
    }

    img{ 
        opacity: 0.4;
        width:115.27%;
    }
    img:hover{
        opacity:1;
    }

    ${'' /* width: ${({ isTablet,isMobile }) => (isTablet ? "195%" : "135%")}; */}

`