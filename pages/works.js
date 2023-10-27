import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPurehouse from '../public/images/workItem-Purehouse.png'
import thumbLePalace from '../public/images/workItem-LePalace.png'
import thumbLeSalama from '../public/images/workItem-LeSalama.png'
import thumbEtravel from '../public/images/workItem-Etravel.png'
import thumbAirscream from '../public/images/workItem-Airscream.png'
import thumbLawa from '../public/images/workItem-Lawa.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading fontFamily='Gilroy' as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="purehouse" title="Pure House Marrakech (Riad)" thumbnail={thumbPurehouse}>
                            The website officiel of riad Pure House Marrakech offered over 10 plugins, and sunc support for encrypted data.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="lesalama" title="Le Salama Skybar" thumbnail={thumbLeSalama}>
                        The website officiel of Le Salama Skybar in Marrakech offered.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem id="etravel" title="E Travel Model" thumbnail={thumbEtravel}>
                            Maquette website travel with inspiration from Airbnb.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.8}>
                        <WorkGridItem id="lepalace" title="Le Palace Marrakech" thumbnail={thumbLePalace}>
                            Website Le Palace Marrakech Restaurant Club.
                        </WorkGridItem>
                    </Section>
                    <Section delay={1}>
                        <WorkGridItem id="airscream" title="Airscream Vape" thumbnail={thumbAirscream}>
                            Maquette website new product from comapny vape Airscream.
                        </WorkGridItem>
                    </Section>
                    <Section delay={1.2}>
                        <WorkGridItem id="lawa" title="Lawa Style" thumbnail={thumbLawa}>
                            Chart Graphic for brand lawa style doum for women.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works