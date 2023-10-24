import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {styled} from "styled-components";
import {auth} from "../../../fireBase.ts";
import {useNavigate} from "react-router-dom";


const Button = styled.button`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Logo = styled.img`
    height: 25px;
`


export default  function GithubBtn() {

    const navigator = useNavigate();
    const onClick = async () => {
            try{
                const provider = new GithubAuthProvider();
                await signInWithPopup(auth, provider);
                navigator("/");
            }catch (e){
                console.log(e);
            }finally {

            }
    }


    return (
        <>
            <Button
                onClick={onClick}
            >
                <Logo src="./src/img/github-mark.svg"></Logo>
                Continue with Github
            </Button>
        </>
    )

}