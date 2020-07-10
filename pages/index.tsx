import Head from 'next/head'
import { getPosts } from '../lib/contentful'
import { Container } from '../components/Container'
import { PostNeedle } from '../components/PostNeedle'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>blog.unresolved.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          {posts.map(post => <PostNeedle post={post} />)}
        </Container>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()).map(item => item.fields)

  return {
    props: { posts }
  }
}
