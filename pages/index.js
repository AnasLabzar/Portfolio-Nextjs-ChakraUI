import NextLink from 'next/link'
import { Box, Button, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import GithubIcon from '../components/icons/github'
import ListButton from '../components/lists'
import LinkdeInIcon from '../components/icons/linkedin'
import ContribIcon from '../components/icons/contributions'
import ArrowUpRightIcon from '../components/icons/arrowtr'
import Link from 'next/link'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a frontend developer and graphic designer based in Morocco!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" fontFamily="Gilroy" variant="page-title">
                            Anas Labzar
                        </Heading>
                        <ListButton>
                            <NextLink href="https://github.com/AnasLabzar?tab=repositories">
                                <Button colorScheme='transparent' mt={2} variant='ghost'>
                                    <GithubIcon />
                                    <p>57  Repository Pushed</p>
                                </Button>
                            </NextLink>
                            <NextLink href="https://www.linkedin.com/in/lebzar-anas-840246160/">
                                <Button colorScheme='transparent' mt={2} variant='ghost'>
                                    <LinkdeInIcon />
                                    <p>220 Subscribers</p>
                                </Button>
                            </NextLink>
                            <NextLink href="https://github.com/AnasLabzar">
                                <Button colorScheme='transparent' mt={2} variant='ghost'>
                                    <ContribIcon />
                                    <p>367  Contributions in Git</p>
                                </Button>
                            </NextLink>
                        </ListButton>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/anas.png"
                            alt="Anas Labzar Profile"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" fontFamily="Gilroy" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>I&apos;m Anas Labzar, a versatile professional with a passion for front-end development and graphic design. With 4 years of experience in web development and 8 years as a graphic designer, I bring a unique blend of skills to every project. I&apos;m based in the enchanting city of Marrakech, Morocco.</Paragraph>
                    <Box flexDirection={{ base: 'column', md: 'row' }} gap={{base: '2', md: '6'}} display={{ base: 'flex' }}>
                        <ListButton>
                            <NextLink href="mailto:principeanas80@gmail.com">
                                <Button colorScheme='transparent' mt={4} variant='ghost'>
                                    <ArrowUpRightIcon />
                                    <Paragraph as="h3">Email me</Paragraph>
                                </Button>
                            </NextLink>
                        </ListButton>
                        <ListButton>
                            <NextLink href="mailto:principeanas80@gmail.com">
                                <Button colorScheme='transparent' mt={{ base: '2', md: '4'}} variant='ghost'>
                                    <ArrowUpRightIcon />
                                    <Paragraph as="h3">More ways to connect</Paragraph>
                                </Button>
                            </NextLink>
                        </ListButton>
                    </Box>
                    <Box align="center" my={6}>
                        <NextLink href="/works">
                            <Button fontFamily='Gilroy' rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" fontFamily="Gilroy" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Marrakech, Morocco.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Study development web and mobile, in Youcode School affiliated with the renowned Mohamed IV Polytechnic University (UM6P).
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Worked at Company KEY1702 full time developer web.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Worked at Company Project Fakir(Nordine Fakir) half temp Technical Manager.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 to present</BioYear>
                        Works as a freelance
                    </BioSection>
                    <Heading as="h3" mt={8} fontFamily="Gilroy" variant="section-title">
                        I 🤍
                    </Heading>
                    <BioSection>
                        Art, Music, {' '}
                        <Link href={'/'}>
                            Graphic Design
                        </Link>,
                        Artificial Intelligence (AI), {' '} 
                        <Link href={'/'}>
                            Photography
                        </Link>, Information technology (IT), The Internet of Things (IoT).
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page