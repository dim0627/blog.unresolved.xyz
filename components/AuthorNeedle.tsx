import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GitHub, Twitter } from 'react-feather';
import styles from './AuthorNeedle.module.scss';

const AuthorNeedle = ({ author }) => (
  <div className={styles.author}>
    <div className={styles.title}>Author</div>
    <div className={styles.body}>
      <div className={styles.profilePhoto}>
        <img
          className={styles.profilePhotoImg}
          src={author.profilePhoto.fields.file.url}
          alt={author.name}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{author.name}</h2>
        <div className={styles.bio}>
          <ReactMarkdown>
            {author.biography}
          </ReactMarkdown>
        </div>
        <ul className={styles.socials}>
          <li className={styles.socialItem}>
            <a className={styles.socialAnchor} href={`https://twitter.com/${author.twitterId}`} rel="nofollow">
              <Twitter />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a className={styles.socialAnchor} href={`https://github.com/${author.gitHubId}`} rel="nofollow">
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export { AuthorNeedle };
