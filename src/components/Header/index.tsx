import { Flex, useBreakpointValue, IconButton, Icon, Divider, useColorModeValue } from '@chakra-ui/react'
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("gray.800", "gray.200")
    const border = useColorModeValue("gray.200", "gray.300")

    const isWideVersion = useBreakpointValue({
        base: false, 
        lg: true,
    })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            {!isWideVersion && (
                <IconButton
                    aria-label="Open menu"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                ></IconButton>
            )}
            <Logo />

            <Flex align="center" ml="auto">

                <NotificationsNav />

                <Divider direction="column" borderColor="gray.50"/>

                <Profile showProfileData={isWideVersion} />

            </Flex>
        </Flex>
    )
}