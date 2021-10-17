import React from 'react';
import { Facebook, Twitter } from 'react-feather';
import styles from './Share.module.scss';

interface Props {
  title: string
  url: string
}

const Share: React.VFC<Props> = ({ title, url }) => (
  <ul className={styles.wrapper}>
    <li className={styles.item}>
      <a
        href={`http://twitter.com/intent/tweet?url=${url}&text=${title}&tw_p=tweetbutton`}
        target="_blank"
        rel="nofollow noreferrer"
        className={`${styles.tw} ${styles.anchor}`}
      >
        <Twitter />
      </a>
    </li>
    <li className={styles.item}>
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}&t=${title}`}
        target="_blank"
        rel="nofollow noreferrer"
        className={`${styles.fb} ${styles.anchor}`}
      >
        <Facebook />
      </a>
    </li>
  </ul>
);

export default Share;
