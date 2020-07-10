import Head from 'next/head'

export default function Slug({ post }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {post.title}
      </main>
    </div>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  const postData = { title: 'abc' }

  return {
    props: {
      post: postData
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'abc' } }],
    fallback: false
  }
}
