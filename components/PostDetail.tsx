import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Container } from './Container';
import { AuthorNeedle } from './AuthorNeedle';
import styles from './PostDetail.module.scss';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={monokai}>
    {value}
  </SyntaxHighlighter>
);

const PostDetail = ({ post }) => (
  <article className={styles.detail}>
    <Container>
      <header className={styles.heading}>
        <span className={styles.postedAt}>{(new Date(post.date)).toDateString()}</span>
        <h1 className={styles.title}>{post.title}</h1>
        {post.category
            && (
            <ul className={styles.categories}>
              {
                post.category.map(
                  (category) => (
                    <li key={category.sys.id} className={styles.categoryItem}>
                      {category.fields.title}
                    </li>
                  ),
                )
              }
            </ul>
            )}
      </header>
    </Container>
    <div className={styles.hero}>
      <img src={post.heroPhoto.fields.file.url} className={styles.heroImg} alt={post.title} />
    </div>
    <Container>
      <div className={styles.body}>
        <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
      </div>
      <div className={styles.author}>
        <AuthorNeedle author={post.author.fields} />
      </div>
      <div className={styles.disqus}>
        <DiscussionEmbed
          shortname="blog-unresolved-xyz"
          config={
                  {
                    url: `https://blog.unresolved.xyz/${post.slug}`,
                    identifier: post.slug,
                    title: post.title,
                    language: 'ja',
                  }
              }
        />
      </div>
    </Container>
  </article>
);

export { PostDetail };
