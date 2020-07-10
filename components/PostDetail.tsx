import marked from 'marked'
import Interweave from 'interweave';
import styles from './PostDetail.module.scss';

const PostDetail = ({ post }) => {
  return (
    <article className={styles.detail}>
      <span className={styles.postedAt}>{(new Date(post.date)).toDateString()}</span>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.body}>
        <Interweave content={marked(post.body)} />
      </div>
    </article>
  )
}

export { PostDetail }
