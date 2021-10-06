import { Text, useColorModeValue } from '@chakra-ui/react';

export function Logo() {

    const fontColor = useColorModeValue("gray.800", "gray.200")
    
    return (
        <Text
            as="span"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color={fontColor}
        >
            smart
            <Text
                color="blue.300"
                as="span"
            >
                order
            </Text>
        </Text>
    );
}