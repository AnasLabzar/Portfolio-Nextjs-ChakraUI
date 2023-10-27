import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anas homepage" />
        <meta name="author" content="Anas Labzar" />
        <meta name="author" content="craftzcats" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Anas Labzar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzcats" />
        <meta name="twitter:creator" content="@craftzcats" />
        <meta property="og:site_name" content="Anas Labzar" />
        <meta name="og:title" content="Anas Labzar" />
        <meta property="og:type" content="website" />
        <title>Anas Labzar - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main