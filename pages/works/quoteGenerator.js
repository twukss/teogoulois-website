import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="tweeter">
    <Container>
      <Title>
        Random quote generator <Badge>2022-</Badge>
      </Title>
      <P>you lack some inspiration, find them with random quote generator.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dev-challenges-random-quote-generator.vercel.app/">
            https://dev-challenges-random-quote-generator.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TpeScript, React, tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/quoteGenerator.png"
        alt="random quote generator"
      />
    </Container>
  </Layout>
)

export default Work
