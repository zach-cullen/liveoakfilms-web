import PageContainer from '../components/PageContainer'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageSection from '../components/PageSection'
import CustomContainer from '../components/CustomContainer'
import VideoGallery from '../components/VideoGallery'
import LinkButton from '../components/LinkButton'
import { portfolioContent as pageContent } from '../lib/content'

export default function Portfolio () {
  return (
    <PageContainer title="Portfolio">
      <Nav noHero />
      <PageSection pY='40px' />
      <PageSection>
        <CustomContainer maxW='1200px' pX='30px'>
          <VideoGallery filmCollections={pageContent.film_collections} />
          <LinkButton text='Inquire Now' href='inquire' themeColor='charcoal'>Let's Make a Movie</LinkButton>
        </CustomContainer>
      </PageSection>
      <Footer />
    </PageContainer>
  )
}
