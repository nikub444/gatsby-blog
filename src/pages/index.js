import React from "react"
import { Container, FeatureImage, Content, ContentCard } from '../components'

const IndexPage = () => {
  return(
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard date="data" title="tytul" excerpt="tresc" slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage