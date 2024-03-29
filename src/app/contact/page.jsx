import Image from 'next/image';
import styles from './contact.module.css';

export const metadata = {
  title: "Contact Us",
  description: "Have a question? Contact us now."
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill alt="" className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and surname' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Phone Number (Optional)' />
          <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
};

export default ContactPage;
