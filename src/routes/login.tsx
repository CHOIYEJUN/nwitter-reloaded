import React, {useState} from "react";
import {styled} from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../fireBase.ts";
import GithubBtn from "../components/auth/github-btn.tsx";
import GoogleBtn from "../components/auth/google-btn.tsx";



const Wrapper = styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
        align-items: center;
      width: 420px;
      padding: 50px 0px;
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
        <Wrapper>
            <Title>LOGIN INTO</Title>
            <StyleForm >
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
                    value ={!isLoading ? "Loding..." : "Log In"}
                    onClick = {onSubmit}
                />

            </StyleForm>

            <GithubBtn />
            <GoogleBtn />


            <Switcher>
                Don't have an account?{" "}
                <Link to="/create-account">Create one &rarr;</Link>
            </Switcher>
        </Wrapper>
    )
}