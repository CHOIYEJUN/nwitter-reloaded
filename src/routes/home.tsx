
import PostTweetForm from "../components/Home/post-tweet-form.tsx";
import {styled} from "styled-components";
import TimeLine from "../components/Home/timeLine.tsx";


const Wrapper = styled.div`
  display: grid;
  gap: 20px;

`;
export default function Home () {

    return (
        <Wrapper>
            <PostTweetForm />
            <TimeLine />
        </Wrapper>
    )
}