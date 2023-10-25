import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Toggle Theme"
            colorScheme={useColorModeValue('gray.300', 'gray')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={ toggleColorMode }
        ></IconButton>
    )
}

export default ThemeToggleButton