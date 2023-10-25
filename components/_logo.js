import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import FootprintIcon from './icons/footprint';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 28px;
  padding: 10px;
  letter-spacing: 1px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {

    return (
        <Link legacyBehavior href="/" passHref>
                <LogoBox>
                    <FootprintIcon />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Gilroy'
                        fontWeight='bold'
                        ml={3}
                    >
                        Anas Labzar
                    </Text>
                </LogoBox>
        </Link>
    );
};

export default Logo;
