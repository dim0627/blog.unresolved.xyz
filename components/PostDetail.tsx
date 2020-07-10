import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Container } from '../components/Container'
import styles from './PostDetail.module.scss';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={monokai}>
      {value}
    </SyntaxHighlighter>
  );
};

const PostDetail = ({ post }) => {
  return (
    <article className={styles.detail}>
      <Container>
        <header className={styles.heading}>
          <span className={styles.postedAt}>{(new Date(post.date)).toDateString()}</span>
          <h1 className={styles.title}>{post.title}</h1>
        </header>
      </Container>
      <div className={styles.hero}>
        <img src={post.heroPhoto.fields.file.url} className={styles.heroImg} />
      </div>
      <Container>
        <div className={styles.body}>
          <ReactMarkdown source={post.body} renderers={{ code: CodeBlock }} />
        </div>
      </Container>
    </article>
  )
}

export { PostDetail }
