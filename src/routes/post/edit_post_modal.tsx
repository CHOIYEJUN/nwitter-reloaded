import {
    Avatar,
    Box,
    Button,
    Center,
    Divider,
    HStack,
    Icon,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {  FaRegUser } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { RiFileListLine } from "react-icons/ri";
import {

    deleteField,
    doc,
    updateDoc,
} from "firebase/firestore";
import { auth, DBservice , storageService } from "../../../fireBase.ts";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    tweet: string;
    imageURL: string;
    postId: string;
}

export default function EditPostModal({
    isOpen,
    onClose,
    tweet,
    imageURL,
    postId,
}: ModalProps) {
    const user = auth.currentUser;
    const toast = useToast();
    const inputRef = useRef<any>();

    const [value, setValue] = useState(tweet);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const [attachedFileURL, setAttachedFileURL] = useState<any>(imageURL);
    const [uploading, setUploading] = useState(false);

    const MB = 1 * 1024 * 1024;

    function onAttachedFileClick() {
        if (inputRef) {
            inputRef.current.click();
        }
    }

    async function onPostButtonClick() {
        if ((!value && !attachedFile) || !user) return;
        if (value.length > 180) {
            toast({
                status: "error",
                title: "Can't post!",
                description:
                    "Tweets are have to be shorter than 180 characters!",
            });
            return;
        }

        try {
            setUploading(true);
            const postRef = doc(DBservice, "tweets", postId);
            await updateDoc(postRef, { tweet: value });

            if (attachedFile) {
                const localinfoRef = ref(
                    storageService,
                    `tweets/${user.uid}-${user.displayName}/${postId}`
                );
                const result = await uploadBytes(localinfoRef, attachedFile);
                const imageURL = await getDownloadURL(result.ref);
                await updateDoc(postRef, { imageURL: imageURL });
                setAttachedFileURL(imageURL);
            }
            if (!attachedFileURL) {
                console.log("image delete at edit modal");
                const imageRef = ref(
                    storageService,
                    `tweets/${user.uid}-${user.displayName}/${postId}`
                );
                await deleteObject(imageRef);
                await updateDoc(postRef, { imageURL: deleteField() });
                setAttachedFile(null);
                setAttachedFileURL("");
            }

            toast({
                status: "success",
                title: "Updated!",
                description: "Updated post done😉",
            });
        } catch (e) {
            console.log("error occurred");
            console.log(e);
        } finally {
            setUploading(false);
            onClose();
            setValue(value);
            inputRef.current.value = "";
        }
    }

    function onAttachedFileChaged(e: any) {
        const limit = 5;
        if (e.target.files.length <= 0) {
            inputRef.current.value = "";
            return;
        }
        if (e.target.files.length > 1) {
            toast({
                status: "warning",
                title: "파일을 업로드 할 수 없어요",
                description: "하나만 올릴 수 있어요",
            });
            return;
        }

        if (e.target.files[0].size > MB * limit) {
            toast({
                status: "warning",
                title: "파일을 업로드 할 수 없어요!!",
                description: `파일이 너무 커요 제한용량 :  ${limit}MB.`,
            });
            return;
        }

        const file = e.target.files[0];
        const reader = new FileReader();

        setAttachedFile(file);
        reader.onloadend = () => {
            setAttachedFileURL(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function onAttachedFileDelete() {
        setAttachedFile(null);
        setAttachedFileURL("");
        inputRef.current.value = null;
    }

    function onModalClose() {
        onClose();
        setValue(tweet);
        setAttachedFile(attachedFile);
        setAttachedFileURL(imageURL);
        inputRef.current.value = "";
    }

    useEffect(() => {
        setAttachedFileURL(imageURL);
    }, [imageURL]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onModalClose}
            motionPreset="slideInBottom"
            size="xl"
        >
            <ModalOverlay bgColor="rgba(32, 39, 52, 0.5)" />
            <ModalContent bgColor="black" minW="600px" minH="310px">
                <ModalHeader>트윗 수정하기</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <HStack alignItems="flex-start" mt="20px">
                        <Avatar
                            w="40px"
                            h="40px"
                            src={user?.photoURL as string}
                            name={user?.displayName as string}
                        />
                        <Center
                            w="100px"
                            h="25px"
                            borderRadius="40px"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.4)"
                            color="twitter.500"
                            fontSize="15px"
                            fontWeight="bold"
                            ml="5px"
                            mt="-5px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(27, 132, 232, 0.15)",
                            }}
                        >
                            모든사람 <MdExpandMore />{" "}
                        </Center>
                    </HStack>
                    <Textarea
                        required
                        placeholder="무슨 일이 일어나고 있나요?"
                        _placeholder={{ fontSize: "20px" }}
                        fontSize="20px"
                        fontWeight="bold"
                        variant={"unstyled"}
                        maxLength={280}
                        pl="50px"
                        resize={"none"}
                        style={{ overflow: "hidden" }}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    {attachedFileURL && (
                        <Box
                            id="iamge"
                            minW="510px"
                            maxW="510px"
                            minH="340px"
                            mt="10px"
                            ml="50px"
                            borderRadius="20px"
                            position="relative"
                        >
                            <Image
                                objectFit="cover"
                                borderRadius="20px"
                                src={attachedFileURL}
                            />

                            <HStack mt="10px">
                                <HStack
                                    color="rgba(255, 255, 255, 0.5)"
                                    display="flex"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <FaRegUser />
                                    <Text
                                        ml="-2px"
                                        mt="2px"
                                        fontSize="12px"
                                        _hover={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                        }}
                                    >
                                        사용자 태그하기
                                    </Text>
                                </HStack>
                                <HStack
                                    ml="45px"
                                    color="rgba(255, 255, 255, 0.5)"
                                    display="flex"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    _hover={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <RiFileListLine />
                                    <Text
                                        ml="-2px"
                                        mt="2px"
                                        fontSize="12px"
                                        _hover={{
                                            textDecoration: "underline",
                                            cursor: "pointer",
                                        }}
                                    >
                                        설명 추가
                                    </Text>
                                </HStack>
                            </HStack>

                            <Center
                                w="30px"
                                h="30px"
                                borderRadius="50%"
                                bgColor="rgba(0, 0, 0, 0.7)"
                                position="absolute"
                                top="5px"
                                right="5px"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "rgba(0, 0, 0, 0.6)",
                                    transition: "0.1s linear",
                                }}
                                onClick={onAttachedFileDelete}
                            >
                                <RxCross1 />
                            </Center>
                            <Center
                                w="60px"
                                h="30px"
                                borderRadius="20px"
                                bgColor="rgba(0, 0, 0, 0.7)"
                                position="absolute"
                                bottom="30px"
                                right="5px"
                                fontWeight="bold"
                                fontSize="15px"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "#172124",
                                    transition: "0.1s linear",
                                }}
                                onClick={onAttachedFileClick}
                            >
                                수정
                            </Center>
                        </Box>
                    )}

                    <HStack>
                        <Center
                            fontSize="14px"
                            fontWeight="bold"
                            color="twitter.500"
                            mt="40px"
                            ml="-10px"
                            width="250px"
                            h="25px"
                            borderRadius="20px"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "rgba(27, 132, 232, 0.15)",
                            }}
                        >
                        </Center>

                        <Input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            // style={{ opacity: 0, cursor: "default" }}
                            display="none"
                            onChange={onAttachedFileChaged}
                        ></Input>
                    </HStack>

                    <Divider my="10px" color="rgba(255, 255, 255, 0.4)" />
                    <Box
                        w="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mb="5px"
                    >
                        <HStack color="twitter.500" spacing="0" ml="-10px">
                            <Box
                                w="35px"
                                h="35px"
                                borderRadius="50%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "rgba(14, 59, 94, 0.5)",
                                }}
                                opacity="1"
                                onClick={onAttachedFileClick}
                            >
                                <Icon as={AiOutlinePicture} w="20px" h="20px" />
                            </Box>
             
                        </HStack>
                        <Button
                            isLoading={uploading}
                            w="90px"
                            h="35px"
                            bgColor="twitter.600"
                            borderRadius="60px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontWeight="bold"
                            opacity={value.length ? 1 : attachedFile ? 1 : 0.7}
                            cursor={
                                value.length
                                    ? "pointer"
                                    : attachedFile
                                    ? "pointer"
                                    : "default"
                            }
                            _hover={{
                                opacity: value.length ? 0.8 : 0.7,
                            }}
                            onClick={onPostButtonClick}
                        >
                            게시하기
                        </Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
