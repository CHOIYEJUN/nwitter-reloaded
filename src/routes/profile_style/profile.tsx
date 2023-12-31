import { Box } from "@chakra-ui/react";
import BackgroundImage from "./background_image";
import ProfilePicture from "./profile_picture";
import ProfileSetting from "./profile_setting";
import ProfileInfo from "./profile_info";
import Option from "./option";
import LogoutButton from "../../components/logout-button";

// 2023.10.23 twitter challenge for user profile

export default function Profile() {
    return (
        <Box
            w="600px"
            h="501px"
            pt="35px"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            bgColor="rgba(0, 0, 0, 0.9)"
            position="relative"
        >
            <BackgroundImage />
            <ProfilePicture />
            <ProfileSetting />
            <LogoutButton />
            <ProfileInfo />
            <Option />

        </Box>
    );
}
