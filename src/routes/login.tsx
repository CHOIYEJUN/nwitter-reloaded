import React, {useState} from "react";
import {styled} from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../fireBase.ts";
import GithubBtn from "../components/auth/github-btn.tsx";
import GoogleBtn from "../components/auth/google-btn.tsx";
import ReactPlayer from "react-player";
import {Center, HStack} from "@chakra-ui/react";



const Wrapper = styled.div`
  
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      width: 500px;
      height: 600px;
      padding: 60px 60px;
      border-radius: 20px;
      background-color: #000;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      opacity: 0.8;
  
    `;

const Title = styled.h1`
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    `

const StyleForm = styled.form`
        
        margin-top: 50px;
    `

const Input = styled.input`
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
      color: #000;
  
    `
const Switcher = styled.div`
      margin-top: 20px;
        a {
            color: #0095f6;
            margin-left: 5px;
            font-weight: 600;
            text-decoration: none;
        }
`

const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  opacity: 1;
  pointer-events: none;
  
`;

export default function Login() {
    const [isLoading, setLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigate();


    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {target : {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        if (email === "" || password === "" ) {
            alert("모든 입력을 확인해주세요")
            return
        }
        setError("");
        event.preventDefault();
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth ,email, password);
            navigation("/");

        }catch (e : any){
            setError(e.message);
            alert(error);
        } finally {
            setLoading(false);
        }

    };
    return (
        <>
        <Center>

        <BgVideo >
            <ReactPlayer
                url={"https://youtu.be/X-XZx1o_w-A"}
                width="100%"
                height="100vh"
                loop={true}
                playing={true}
                muted={true}
                controls={false}
            />
        </BgVideo>
            <HStack>
        <Wrapper>
            <Title>로그인</Title>
            <StyleForm onSubmit={onSubmit} >
                <Input
                    name = "email"
                    placeholder = "Email"
                    type = "text"
                    required
                    value = {email}
                    onChange = {onChange}
                />
                <Input
                    name = "password"
                    placeholder = "Password"
                    type = "password"
                    required
                    value = {password}
                    onChange = {onChange}
                />
                <Input
                    type = "submit"
                    value ={!isLoading ? "Loding..." : "로그인"}
                />

            </StyleForm>

            <GithubBtn />
            <GoogleBtn />


            <Switcher>
                계정이 없으신가요?{" "}
                <Link to="/create-account">회원가입하기 &rarr;</Link>
            </Switcher>
        </Wrapper>
                </HStack>
            </Center>
        </>
    )
}