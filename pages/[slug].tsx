import React from 'react';
import Head from 'next/head';
import { getPosts } from '../lib/contentful';
import { PostDetail } from '../components/PostDetail';

export default function Slug({ post }) {
  return (
    <div className="container">
      <Head>
        <title>
          {post.title}
          {' '}
          - blog.unresolved.xyz
        </title>
        <meta name="description" content={post.body} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={post.title} />
        <meta property="og:site_name" content="blog.unresolved.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={post.body} />
        <meta property="og:url" content={`https://blog.unresolved.xyz/${post.slug}`} />
        <meta property="og:image" content={post.heroPhoto.fields.file.url} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={post.body} />
        <meta name="twitter:url" content={`https://blog.unresolved.xyz/${post.slug}`} />
        <meta name="twitter:image" content={post.heroPhoto.fields.file.url} />
        <meta name="author" content={post.author.fields.name} />
      </Head>
      <main>
        <PostDetail post={post} />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = (await getPosts({ 'fields.slug': params.slug }))[0];

  return { props: { post: post.fields } };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.fields.slug } }));

  return {
    paths,
    fallback: false,
  };
}
