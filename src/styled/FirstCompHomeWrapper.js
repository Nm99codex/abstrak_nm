import styled from "@emotion/styled";
import homebanner from '../Assets2/home.png'

export const FirstCompHomeWrapper = styled.div`

    .maindiv{
        background-color: #2522ba;
        background-image: url(${homebanner});
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat;
        border-radius: 25px;
        font-family:"DM Sans", sans-serif; 
        border: none;
    }
 
    .type{ 
        padding: 10% 0% 0% 8vw;
        ${'' /* font-size: ${({ isTablet,isMobile }) => (isTablet ? "1em" : "4em")}; */}
        display: flex;
        ${'' /* align-items: flex-start; */}
        color: #fff;
        font-weight: bold;
    }
 
    .viewbtn{
        background-color:#fff;
        color:#5956e9; 
        padding:1.5% 3%;
        margin:3% 0% 20% 8%;
        border-radius:1em;
        font-size:1em;
        text-transform:capitalize;
        border:none;
        &:hover{
            background-color:#ffdc60;
            color:#fff;
        }
    }
`