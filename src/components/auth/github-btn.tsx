import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import {styled} from "styled-components";
import {auth} from "../../../fireBase.ts";
import {useNavigate} from "react-router-dom";
import {FaGithub} from "react-icons/fa";


const Button = styled.button`
  margin-top: 50px;
  background-color: white;
  font-weight: 600;
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
  font-size: 1.2em;
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
                <FaGithub size={"25px"} />
                Github 에서 가입하기
            </Button>
        </>
    )

}