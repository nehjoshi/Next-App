import Image from 'next/image';
import styles from './PostCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" fill alt='' className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span> 
        </div>
        <div className={styles.bottom}>
            <h1>Title</h1>
            <p>Desc</p>
            <Link className={styles.link} href="/blog/post">Read More</Link>
        </div>
    </div>
  )
};

export default PostCard;
