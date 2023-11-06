import Profile from "./profile";
import Header from "./header";
import ProfileHeaderBuffer from "./profile_header_buffer";

import { useRecoilValue } from "recoil";
import {
    LikedTweets,
    MediaTweets,
    ProfileOptionButton,
} from "../../Types/common";
import Highlight from "./highlite";

import { ComputeMyTotalTweetCount } from "../../Types/util";
import { auth } from "../../../fireBase.ts";
import OwnTimeline from "../../components/Home/own_timeline";

// 2023.10.23 twitter challenge for user profile

export default function ProfileBoard() {
    const user = auth.currentUser;

    let totalTweets;
    if (user) totalTweets = ComputeMyTotalTweetCount(user.uid);

    const currentOption = useRecoilValue(ProfileOptionButton);
    const mediaTweets = useRecoilValue(MediaTweets);
    const likedTweets = useRecoilValue(LikedTweets);

    console.log(`mediaTweets: ${mediaTweets}`);
    console.log(`likedTweets: ${likedTweets}`);

    return (
        <>
            <Header />
            <ProfileHeaderBuffer />
            <Profile />


            {currentOption === "게시물" ? (
                totalTweets ? (
                    <OwnTimeline />
                ) : (
                    <></>
                )
            ) : null}
            {currentOption === "답글" ? (
                totalTweets ? (
                    <OwnTimeline />
                ) : (
                    <></>
                )
            ) : null}
            {currentOption === "하이라이트" ? <Highlight /> : null}



        </>
    );
}
