import styled from "styled-components"

export const BlogWrapper  =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e3e6e9;
    border-bottom: 1px solid #e3e6e9;
    border-right: 1px solid #e3e6e9;

    padding: 2.5rem 1.25rem 2.5rem 0;
    transition: all 0.3s ease-in-out;

  &:hover{
        border-top: 1px solid #5956e9;
    cursor: pointer;
    }

`
export const BlogWrapper2  =  styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e3e6e9;
    border-bottom: 1px solid #e3e6e9;
    padding: 2.5rem 0 2.5rem 1.25rem;
    transition: all 0.3s ease-in-out;
  

  &:hover{
    border-top: 1px solid #5956e9;
    cursor: pointer;
    }

`

export const BlogWrapperMob  =  styled.div`
  display: flex;
    justify-content: center;

    align-items: center;
    border-top: 1px solid #e3e6e9;
    border-bottom: 1px solid #e3e6e9;
    border-bottom: 1px solid #e3e6e9;

    padding: 1.25rem 0 1.25rem 0;
    transition: all 0.3s ease-in-out;

  &:hover{
    border-top: 1px solid #5956e9;
    cursor: pointer;
    }

`

