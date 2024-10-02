import AboutInfoSection from '@/components/AboutInfoSection'
import ContentWrapper from '@/components/ContentWrapper'
import Experiens from '@/components/Experiens'
import Skills from '@/components/Skills'

const About = () => {
  return (
    <ContentWrapper>
      <AboutInfoSection />
      <Skills />
      <Experiens />
    </ContentWrapper>
  )
}

export default About
