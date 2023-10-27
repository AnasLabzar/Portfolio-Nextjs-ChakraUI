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
  <Layout title="Airscream Model">
    <Container>
      <Title>
        Airscream Model <Badge>2023</Badge>
      </Title>
      <P>
        Maquette website new product from comapny vape Airscream.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Model View</Meta>
          <Link href="https://xd.adobe.com/view/22f16dbf-6ebf-4072-88f7-9294dba3b25b-77a2/">
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
        <iframe width="100%" style={{ marginBottom: '1em' }} height="323px" src="https://xd.adobe.com/embed/22f16dbf-6ebf-4072-88f7-9294dba3b25b-77a2/" frameborder="0" allowfullscreen></iframe>
      </Box>
      <Line />
      <WorkImage src="/images/works/Airscream/airscream-2.png" alt="Airscream" />
      <WorkImage src="/images/workItem-Airscream.png" alt="Airscream" />
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