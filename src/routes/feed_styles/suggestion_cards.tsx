
import SearchBar from "./suggestion_style/search_bar";

import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";


export default function SuggestionCards() {
    const { scrollY } = useScroll();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [scrollFix, setScrollFix] = useState<boolean>(false);

    useEffect(() => {
        scrollY.onChange(() => {
            // console.log(scrollY.get());
            if (scrollY.get() > 480) setScrollFix(true);
            else setScrollFix(false);
        });
    }, [scrollY]);
    console.log(scrollFix);

    return (
        // <Box position="absolute" top="10px">
        <Box h="1300px" position="absolute" top="0">
            <SearchBar />

            <Box
                w="350px"
                h="100%"
                bgColor="rgba(0, 0, 0, 0.9)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                margin={"10px 0 0 0"}
            >
            </Box>
        </Box>
    );
}
