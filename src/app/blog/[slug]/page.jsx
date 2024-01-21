import { getPost } from '@/../lib/data';
import styles from './singlePostPage.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import PostUser from '@/components/postUser/postUser';

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc
  }
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post && <Image src={post.img} fill className={styles.img} alt="" />}
      </div>
      <div className={styles.textContainer}>
        {post && <h1 className={styles.title}>{post.title}</h1>}
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
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
