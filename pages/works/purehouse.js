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
    <Layout title="Pure House Marrakech">
      <Container>
        <Title>
          Pure House Marrakech <Badge>2023</Badge>
        </Title>
        <P>
          The website officiel of riad Pure House Marrakech offered over 10 plugins, 
          and sunc support for encrypted data.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.purehousemarrakech.com/">
              https://www.purehousemarrakech.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, Javascript, HTML5, CSS, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://www.google.co.ma/travel/hotels/entity/ChoQj7SeoOnpl4bBARoNL2cvMTFrcHJxbjF4dBAC?utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiwjNW_o5aCAxUAAAAAHQAAAAAQBw&ts=CAEaIAoCGgASGhIUCgcI5w8QCxgbEgcI5w8QCxgcGAEyAhAAKgQKABoA">
              Furnished Tourist Apartment With 3 Bedrooms And With Swimming Pool, Can Accommodate 6 People <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/Purehouse/purehouse-3.png" alt="Pure House Marrakech" />
        <WorkImage src="/images/works/Purehouse/purehouse-2.png" alt="Pure House Marrakech" />
        <WorkImage src="/images/workItem-Purehouse.png" alt="Pure House Marrakech" />
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