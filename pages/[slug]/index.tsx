import React, { useRef } from 'react';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { promises } from 'fs';
import Script from 'next/script';
import { getPosts } from '../../lib/contentful';
import PostDetail from '../../components/PostDetail';
import fullPath from '../../lib/fullPath';

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.fields.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = (await getPosts({ 'fields.slug': params.slug }))[0];

  const ogpImages = await promises.readdir('public/ogp');
  const ogImageUrl = fullPath(`ogp/${ogpImages[Math.floor(Math.random() * ogpImages.length)]}`);

  return { props: { post: post.fields, ogImageUrl } };
}

const Index = ({ post, ogImageUrl }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const containerElem = useRef(null);

  return (
    <>
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
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={post.body} />
        <meta name="twitter:url" content={`https://blog.unresolved.xyz/${post.slug}`} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="author" content={post.author.fields.name} />
      </Head>
      <main>
        <Script
          // strategy="afterInteractive"(defaultでOKなので特に設定しない)
          src="https://platform.twitter.com/widgets.js"
          onLoad={() => {
            (window as any).twttr.widgets.load(containerElem.current);
          }}
        />
        <PostDetail post={post} />
      </main>
    </>
  );
};

export default Index;
