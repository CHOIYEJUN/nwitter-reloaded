import {styled} from "styled-components";

export const Wrapper = styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
        align-items: center;
      width: 420px;
      padding: 50px 0px;
    `;

export const Title = styled.h1`
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    `

export const StyleForm = styled.form`
        
        margin-top: 50px;
    `

export const Input = styled.input`
      padding: 10px 20px;
      margin: 5px 0px;
      border-radius: 10px;
      width: 100%;
      &[type="submit"] {
        cursor : pointer;
        &:hover{
          opacity: 0.8;
        }
      }
    `