import { extendTheme, ThemeConfig } from '@chakra-ui/react';


// const config: ThemeConfig = {
//     initialColorMode: "dark",
//     useSystemColorMode: false,
// }

export const theme = extendTheme({
    // config,
    font: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.700',
                color: 'gray.50',
            }
        }
    }
})