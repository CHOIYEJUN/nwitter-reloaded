import {auth} from "../../fireBase.ts";

import {useEffect} from "react";


export default function ProtectedRoute({children, }: {children: React.ReactNode}) {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user === null) {
                // 사용자가 로그인하지 않은 경우 리다이렉션 수행
                window.location.href = "/login"; // 또는 다른 리다이렉션 방식 사용
            }
        });

        return () => unsubscribe(); // cleanup 함수를 이용하여 구독 취소
    }, []);

    return children;
}