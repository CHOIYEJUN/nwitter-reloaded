// @ts-ignore
import { Helmet } from "react-helmet";
import {Box, Center, HStack} from "@chakra-ui/react";
import CalenderBox from "../components/Calender/CalenderBox.tsx";
import Layout from "../components/auth/layout.tsx";



export default function Calender() {

    return (
        <>
        <Helmet>
            <title>calender</title>
        </Helmet>

        <Center>
            <HStack>
                <Box id="sidebar" w="235px" position="fixed" top="0">
                    <Layout />
                </Box>

                <Box id="calender-borad" w="1200px" ml="272px" mr="30px">
                    <CalenderBox/>
                </Box>

            </HStack>
        </Center>
    </>


        );
}