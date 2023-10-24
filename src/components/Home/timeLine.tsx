import {useEffect, useState} from "react";
import {DBservice} from "../../../fireBase.ts";
import {collection,  orderBy, query, onSnapshot, limit, Unsubscribe} from "firebase/firestore";
import Tweet from "./tweet.tsx";



export interface TimeLineProps {
    image: string;
    tweet: string;
    username: string;
    createdAt: number;
    userId: string;
    tweetId: string;
}

export default function TimeLine() {
    const [tweets, setTweets] = useState<TimeLineProps[]>([]);
    let unsubscribe: Unsubscribe | null = null;

    const fetchTimeLine = async () => {
        try{
            const timeLine =
                query(
                    collection(DBservice, "tweets"),
                    orderBy("createdAt", "desc"),
                    limit(25)
            );

             unsubscribe = await onSnapshot(timeLine, (snapshot) => {

                const makeTweets = snapshot.docs.map((doc) => {
                    const {image, tweet, username, createdAt, userId} = doc.data();
                    return {
                        image,
                        tweet,
                        username,
                        createdAt,
                        userId,
                        tweetId: doc.id,
                    }
                });
                 setTweets(makeTweets);
            });

        }catch (e) {
            console.log(e);
        } finally {
            console.log("finally");
        }

    }

    useEffect(() => {
        fetchTimeLine();
        return () => {
            unsubscribe && unsubscribe();
        };
    }, []);

    return (
        <>
            {tweets.map((tweetData) => (
                <Tweet key={tweetData.tweetId} {...tweetData} />
            ))}
        </>
    )


}