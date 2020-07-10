import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../lib/contentful'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {posts.map(post => <Link href={`/${post.slug}`}><a key={post.slug}>{post.title}</a></Link>)}
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()).map(item => ({ title: item.fields.title, slug: item.fields.slug }))

  return {
    props: { posts }
  }
}
