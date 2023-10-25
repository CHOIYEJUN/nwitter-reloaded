import { styled } from "styled-components";
import {TimeLineProps} from "./timeLine.tsx";
import DeleteButton from "./deleteButton.tsx";
import {auth} from "../../../fireBase.ts";



const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Column = styled.div``;

const Photo = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const TextWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 20px;
`

const UserProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1d9bf0;
    display: flex;  
    justify-content: center;
`;

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
`;



export default function Tweet({  username, image, tweet, userId, tweetId }: TimeLineProps) {
    const user = auth.currentUser;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
        <Wrapper>
            <ProfileWrapper>
                <UserProfileImg
                    alt="user profile"
                >

                </UserProfileImg>

                <Username>{username} @ {userId}</Username>
            </ProfileWrapper>



            <TextWrapper>
                <Column>

                    <Payload>{tweet}</Payload>
                </Column>
                {image ? (
                    <Column>
                        <Photo src={image} />
                    </Column>
                ) : null}
            </TextWrapper>

            {user?.uid === userId ?  <DeleteButton tweetId={tweetId} userId={userId} image={image}/> : null}

        </Wrapper>
    );
}