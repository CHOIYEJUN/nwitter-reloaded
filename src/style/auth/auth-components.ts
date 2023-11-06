import {styled} from "styled-components";

export const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 500px;
  height: 600px;
  padding: 30px 30px;
  border-radius: 20px;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  opacity: 0.8;

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

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  opacity: 1;
  pointer-events: none;
  
`;

export const ChackPasswoadSpan = styled.span`
  color: red;
`;