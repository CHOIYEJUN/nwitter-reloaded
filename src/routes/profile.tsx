
import ProfileBoard from "./profile_style/profile_board.tsx";
import {Box, Center, HStack} from "@chakra-ui/react";
import Layout from "../components/auth/layout.tsx";





export default function Profile() {


    return (
        <>

            <Center overflowY={"scroll"}>
                <HStack>
                    <Box id="sidebar" w="235px" position="fixed" top="0">
                        <Layout />
                    </Box>
                    <Box id="feed_board" w="600px" ml="272px" mr="30px">
                        <ProfileBoard />
                    </Box>

                </HStack>
            </Center>

        </>

    );
}