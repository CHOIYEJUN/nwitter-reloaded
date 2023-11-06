import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, DBservice } from "../../../fireBase.ts";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import {
    EntireTweets,
    ITweet,
    LikedTweets,
    MediaTweets,
    NumberOfTweets,
} from "../../Types/common";

// 2023.10.23 twitter challenge for user profile

export default function OwnTimeline() {
    const user = auth.currentUser;
    const [tweets, setTweets] = useState<ITweet[]>([]);
    const entireTweets = useSetRecoilState(EntireTweets);
    const totalTweets = useSetRecoilState(NumberOfTweets);
    const mediaTweets = useSetRecoilState(MediaTweets);
    const likedTweets = useSetRecoilState(LikedTweets);

    useEffect(() => {
        let unsubscribe: Unsubscribe | null = null;

        async function fetchTweeet() {
            const tweetsQuery = query(
                collection(DBservice, "tweets"),
                orderBy("createdAt", "desc")
            );

            unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
                let media = 0;
                let liked = 0;

                const tweets = snapshot.docs.map((doc) => {
                    const {
                        tweet,
                        createdAt,
                        userId,
                        username,
                        imageURL,
                        creatorImageURL,
                        comment,
                        retweet,
                        like,
                        view,
                        isLiked,
                        whosLiked,
                    } = doc.data();
                    return {
                        tweet,
                        createdAt,
                        userId,
                        username,
                        imageURL,
                        creatorImageURL,
                        id: doc.id,
                        comment,
                        retweet,
                        like,
                        view,
                        isLiked,
                        whosLiked,
                    };
                });
                setTweets(tweets);
                entireTweets(tweets);
                totalTweets(tweets.length);

                for (const tweet of tweets) {
                    if (tweet.imageURL && tweet.userId === user?.uid) media++;
                    if (user && tweet.whosLiked.includes(user.uid)) liked++;
                }
                mediaTweets(media);
                likedTweets(liked);
            });
        }
        fetchTweeet();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    return (
        <>
            {tweets.map((tweet) => (
                <>
                    {user?.uid === tweet.userId ? (
                        <Tweet key={tweet.id} {...tweet}></Tweet>
                    ) : null}
                </>
            ))}
        </>
    );
}
