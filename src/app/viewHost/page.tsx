import Image from "next/image";
import TopNav from "../components/TopNav/TopNav";
import styles from './viewhost.module.css';
import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdLaptopWindows, MdWeb } from "react-icons/md";
import Footer from "../components/Footer/Footer";

const ViewHost = () => {
  const place2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1681043305/Pickandhook/law_pro2_slnzfj.jpg';
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715185393/Pickandhook/SSP_708943_2_bdoith.jpg'
  const bio = "Hello, do allow me to introduce myself. I'm Louise an all Natural British High Class London Independent Ebony Escort, International Travel Companion and your personal confidante.I'm London born and bred, private school educated and a naughty specimen. I have a bright and bubbly personality, and I love to please. I have big beautiful brown eyes, a cute kissable nose, juicy lips and a beautiful, radiant smile. I have glowing bronze skin, and sultry bouncy curves for you to touch and squeeze however you please.I am very friendly and accomodating and love all men, of any age. I love a respectful and mature gentleman, and I like to have an enjoyable time.Travelling is one of my passions in life and I would be delighted to hop on a plane and meet you on the city of your choice. Some of my favourite cities include London, Paris, Monaco, Nice, Zurich, Milan, Rome, Singapore and Shanghai."

  return (
    <main>
      <TopNav />

      <section className={styles.hostBox} id="horMargin">
        <section className={styles.left}>
          <section className={styles.imgBox}>
            <img src={place2} alt="" className="contain" />
          </section>

          <div className={styles.mediaSet}>
            {Array(4).fill('a').map((el) => (
              <img alt="" src={place} width={70} height={70} className="contain" />
            ))}
          </div>

        </section>
        <section className={styles.right}>
          <section className={styles.contactBox}>
            <Link href={''}><FaWhatsapp /> <span>+233 55 00 000</span></Link>
            <Link href={''}><FaTelegram /> <span>+233 55 00 000</span></Link>
            <Link href={''}><FaPhone /> <span>+233 55 00 000</span></Link>
            <Link href={''}><MdLaptopWindows /> <span>www.louis.com</span></Link>
          </section>

          <hr />

          <article className={styles.bioBox}>
            {bio}
          </article>

          <hr />

          <section className={styles.conBox}>
            <h3>About Louise Grant</h3>
            <section className={styles.con}>
              {Array(10).fill('a').map((el) => (
                <p><strong>Gender</strong> <span>Female</span></p>
              ))}
            </section>
          </section>

          <section className={styles.conBox}>
            <h3>About Louise Grant</h3>
            <section className={styles.con}>
              {Array(10).fill('a').map((el) => (
                <p><strong>Gender</strong> <span>Female</span></p>
              ))}
            </section>
          </section>

          <section className={styles.conBox}>
            <h3>About Louise Grant</h3>
            <section className={styles.con}>
              {Array(10).fill('a').map((el) => (
                <p><strong>Gender</strong> <span>Female</span></p>
              ))}
            </section>
          </section>
        </section>
      </section>

      <hr id="divider" />

      <section className={styles.relatedBox} id="hor">
        <h3>Also In Kumasi</h3>
        <article>
          {Array(4).fill('a').map((el) => (
            <div>
              <Image alt="" src={place2} fill className="cover" />
            </div>
          ))}
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default ViewHost;