import styles from './singlePostPage.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill className={styles.img} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image src="/contact.png" width={50} height={50} alt="" className={styles.avatar} />

          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01-2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus eius doloribus libero. Necessitatibus culpa accusantium a sit repellendus libero nihil, minima quis voluptate enim tenetur. Voluptatibus sequi fuga nulla.
        </div>
      </div>
    </div>
  )
};

export default SinglePostPage;
