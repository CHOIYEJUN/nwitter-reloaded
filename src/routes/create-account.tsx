import { useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {auth} from "../../fireBase.ts";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {StyleForm, Title, Wrapper, Input, } from "../style/auth/auth-components.ts";
import GithubBtn from "../components/auth/github-btn.tsx";
import GoogleBtn from "../components/auth/google-btn.tsx";

export default function CreateAccount() {


    const [isLoading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);
    const navigation = useNavigate();

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const {target : {name, value}} = event;
        if(name === "username"){
            setUsername(value);
        }else if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }else if(name === "passwordConfirm"){
            if(password === value){
                setPasswordCheck(true);
            }else {
                setPasswordCheck(false);
            }
            setPasswordConfirm(value);
        }
    };

    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        if (username === "" || email === "" || password === "" || !passwordCheck) {
            alert("모든 입력을 확인해주세요")
            return
        }
        setError("");
        event.preventDefault();
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {
                displayName: username,
            });
            navigation("/");

        }catch (e : any){
            if (e.message === "Firebase: Error (auth/email-already-in-use)."){
                setError("동일한 이메일이 존재합니다.");
            }else if(e.message === "Firebase: Error (auth/invalid-email)."){
                setError("이메일 형식이 올바르지 않습니다.");
            }else if(e.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                setError("비밀번호는 6자리 이상이어야 합니다.");
            }else if (e.message === "Firebase: Error (auth/operation-not-allowed)."){
                setError("이메일/비밀번호 계정이 활성화되지 않았습니다.");
            } else  {
                setError("알 수 없는 에러가 발생했습니다.");
            }

            alert(error);
        } finally {
            setLoading(false);
        }

    };


    return (

        <Wrapper>
            <Title>회원가입</Title>
            <StyleForm >
                <Input
                    name = "username"
                    placeholder = "Username"
                    type = "text"
                    required
                    value = {username}
                    onChange = {onChange}
                />
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
                    name = "passwordConfirm"
                    placeholder = "Password Confirm"
                    type = "password"
                    required
                    value = {passwordConfirm}
                    onChange = {onChange}
                />

                <Input
                    type = "submit"
                    value ={!isLoading ? "Loding..." : "Create Account"}
                    onClick = {onSubmit}
                />

            </StyleForm>
            {!passwordCheck ? <span>비밀번호가 일치하지 않습니다 다시한번 확인해주세요</span>: null}

            <GithubBtn />
            <GoogleBtn />
        </Wrapper>
    )
}