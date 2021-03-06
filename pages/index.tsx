import React from 'react';
import Head from 'next/head';
import { getPosts } from '../lib/contentful';
import { Container } from '../components/Container';
import { PostNeedle } from '../components/PostNeedle';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>blog.unresolved.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          {posts.map((post) => <PostNeedle key={post.slug} post={post} />)}
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()).map((item) => item.fields);

  return {
    props: { posts },
  };
}
