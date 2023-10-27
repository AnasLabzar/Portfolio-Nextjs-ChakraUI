import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Box,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Line from '../../components/line'

const Work = () => (
  <Layout title="E Travel Model">
    <Container>
      <Title>
        E Travel Model <Badge>2020</Badge>
      </Title>
      <P>
        Model Adobe xd E-Travel platform with inspiration from Airbnb platform.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Model View</Meta>
          <Link href="https://xd.adobe.com/view/1fca2353-a67b-4e93-af8f-24bd194a80dd-4a99/">
            https://xd.adobe.com/view<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Adobe XD</span>
        </ListItem>
      </List>
      <Box mt="2em">
        <Meta>Model Live</Meta>
        <Heading as="h3" fontSize="20px" my="10px">
          Try experience in this model <Badge>Adobe XD</Badge>
        </Heading>
        <iframe width="100%" style={{ marginBottom: '1em' }} height="315" src="https://xd.adobe.com/embed/1fca2353-a67b-4e93-af8f-24bd194a80dd-4a99/" frameborder="0" allowfullscreen></iframe>
        <Line />
      </Box>
      <Box>
        <Meta>Model Project</Meta>
        <Heading as="h3" fontSize="20px" my="10px">
          This is conception model <Badge>Adobe XD</Badge>
        </Heading>
        <WorkImage src="/images/works/Etravel/etravel-3.png" alt="E Travel" />
        <Line />
      </Box>
      <WorkImage src="/images/works/Etravel/etravel-2.png" alt="E Travel" />
      <WorkImage src="/images/workItem-Etravel.png" alt="E Travel" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'