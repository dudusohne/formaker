import { Text, Box, Avatar, Flex, useColorModeValue } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

    const fontColor = useColorModeValue("gray.800", "gray.200")

    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text color={fontColor}>Eduardo Sohne</Text>
                    <Text color={fontColor} fontSize="small">
                        eduardosmartmkt@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Eduardo Sohne" src="https://avatars.githubusercontent.com/u/19408694?v=4" />
        </Flex>
    );
}