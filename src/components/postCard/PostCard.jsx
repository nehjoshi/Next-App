import Image from 'next/image';
import styles from './PostCard.module.css';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={post.img} fill alt='' className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span> 
        </div>
        <div className={styles.bottom}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
};

export default PostCard;
