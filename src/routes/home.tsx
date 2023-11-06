

// @ts-ignore
import Timeline from "../components/Home/Timeline";
import CreatePost from "./feed_styles/feedboard_style/create_post.tsx";
import {Box, Center, HStack} from "@chakra-ui/react";
import Layout from "../components/auth/layout.tsx";
// @ts-ignore
import { Helmet } from "react-helmet";
import Header from "../components/Home//header.tsx";
import SuggestionCards from "./feed_styles/suggestion_cards.tsx";




export default function Home () {

    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
        <Center>
            <HStack>
            <Box id="sidebar" w="235px" position="fixed" top="0">
                <Layout />
            </Box>
            <Box id="feed_board" w="600px" ml="272px" mr="30px">
                <Header />
            <CreatePost />
            <Timeline />
            </Box>

                <Box id="suggestion" w="350px" pt="10px">
                    <SuggestionCards />
                </Box>
            </HStack>
        </Center>
        </>

    )
}