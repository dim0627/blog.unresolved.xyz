import React from 'react';
import Link from 'next/link';
import styles from './PostNeedle.module.css';

const PostNeedle = ({ post }) => (
  <article className={styles.needle}>
    <span className={styles.postedAt}>{(new Date(post.date)).toDateString()}</span>
    <h2 className={styles.title}>
      <Link href="/[slug]" as={`/${post.slug}`}>
        <a key={post.slug} className={styles.titleAnchor}>{post.title}</a>
      </Link>
    </h2>
  </article>
);

export { PostNeedle };
