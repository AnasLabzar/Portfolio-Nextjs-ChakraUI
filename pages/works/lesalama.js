import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    // AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Le Salama Skybar">
      <Container>
        <Title>
        Le Salama Skybar <Badge>2022</Badge>
        </Title>
        <P>
          The website officiel of Le Salama Skybar in Marrakech offered.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.lesalamamarrakech.com/">
              https://www.lesalamamarrakech.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, HTML5, CSS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/Lesalama/lesalama-2.png" alt="Le Salama" />
        <WorkImage src="/images/workItem-LeSalama.png" alt="Le Salama" />
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