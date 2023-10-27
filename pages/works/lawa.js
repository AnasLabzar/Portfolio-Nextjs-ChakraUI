import {
    Container,
    Badge,
    List,
    ListItem,
    // AspectRatio
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Lawa Style">
      <Container>
        <Title>
        Lawa Style <Badge>2023</Badge>
        </Title>
        <P>
          Chart Graphic for brand lawa style doum for women.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Photoshop, Illustrator</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/Lawa/1.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/2.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/3.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/4.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/5.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/6.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/7.png" alt="Lawa" />
        <WorkImage src="/images/works/Lawa/8.png" alt="Lawa" />
        <WorkImage src="/images/workItem-Lawa.png" alt="Lawa" />
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