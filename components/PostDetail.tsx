import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Container } from './Container';
import { AuthorNeedle } from './AuthorNeedle';
import styles from './PostDetail.module.scss';

const CodeBlock = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || '');
  const lang = match && match[1] ? match[1] : '';
  return (
    <SyntaxHighlighter
      style={nord}
      language={lang}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

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
        <ReactMarkdown
          components={{
            code: CodeBlock,
          }}
        >
          {post.body}
        </ReactMarkdown>
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
