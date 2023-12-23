import {auth} from "../../../fireBase.ts";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import {Box, HStack, Text, useDisclosure, VStack} from "@chakra-ui/react";
import {FaRegUser} from "react-icons/fa6";
import {BiLogOut} from "react-icons/bi";
import CreatePostModal from "../../routes/post/create_post_modal.tsx";


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  gap: 20px;
`;
export default function Layout() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const onLogOut = async () => {
        const ok = confirm("Are you sure you want to log out?");
        if (ok) {
            await auth.signOut();
            navigate("/login");
        }
    };
    return (
        <VStack alignItems={"flex-start"} spacing="0" mt={"120px"}>

            <Menu>
                <Link to="/">
                    <HStack
                        fontSize="30px"
                        pl="10px"
                        pr="20px"
                        py="10px"
                        borderRadius="30px"
                        _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
                        mb="10px"
                    >
                        <RiHome7Fill />
                        <Text fontSize="20px" fontWeight="bold" ml="10px">
                            홈
                        </Text>
                    </HStack>


                </Link>
                <Link to="/profile">

                    <HStack
                        fontSize="30px"
                        pl="10px"
                        pr="20px"
                        py="10px"
                        borderRadius="30px"
                        _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
                        mb="10px"
                    >
                        <FaRegUser />
                        <Text fontSize="20px" fontWeight="bold" ml="10px">
                            프로필
                        </Text>
                    </HStack>

                </Link>

                {/*<Link to="/calender">

                    <HStack
                        fontSize="30px"
                        pl="10px"
                        pr="20px"
                        py="10px"
                        borderRadius="30px"
                        _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
                        mb="10px"
                    >
                        <BsFillCalendarHeartFill />
                        <Text fontSize="20px" fontWeight="bold" ml="10px">
                            캘린더
                        </Text>
                    </HStack>

                </Link>*/}

                <HStack
                    fontSize="30px"
                    pl="10px"
                    pr="20px"
                    py="10px"
                    borderRadius="30px"
                    _hover={{ cursor: "pointer", bgColor: "whiteAlpha.300" }}
                    mb="10px"
                    onClick={onLogOut}
                >
                    <BiLogOut />
                    <Text fontSize="20px" fontWeight="bold" ml="10px">
                        로그아웃
                    </Text>
                </HStack>

                <Box
                    w="200px"
                    h="50px"
                    bgColor="twitter.600"
                    borderRadius="60px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontWeight="bold"
                    opacity="0.7"
                    _hover={{
                        opacity: 1,
                        cursor: "pointer",
                    }}
                    onClick={onOpen}
                >
                    게시하기
                </Box>
                <CreatePostModal isOpen={isOpen} onClose={onClose} />


            </Menu>
            <Outlet />
        </VStack>
    );
}
