import { Flex, Icon, HStack, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {

    const { colorMode, toggleColorMode } = useColorMode()
    const fontColor = useColorModeValue("gray.500", "gray.200")

    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            paddingRight={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        >
            <Icon as={RiNotificationLine} fontSize="20" color={fontColor} />
            <Switch colorScheme="red" size="md" onChange={toggleColorMode}> </Switch>
        </HStack>
    );
}