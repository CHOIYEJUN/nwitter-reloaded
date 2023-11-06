
import {  DBservice } from "../../fireBase.ts";
import { addDoc, collection } from "firebase/firestore";
import {useRecoilValue} from "recoil";
import {EntireTweets} from "./common.tsx";

const MONTH: any = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};



export async function CreateUserField(uid: string) {
    await addDoc(collection(DBservice, uid), {
        following: [],
        like: [],
        background_image: "",
    });
}

export function ComputeMyTotalTweetCount(uid: number | string) {
    let cnt = 0;
    const entireTweets = useRecoilValue(EntireTweets);
    for (const tweet of entireTweets) {
        if (tweet.userId === uid) cnt++;
    }
    return cnt;
}

export function ComputeMonth(month: string): number {
    return MONTH[month];
}
