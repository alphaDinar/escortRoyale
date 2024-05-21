import Image from 'next/image';
import styles from './hosts.module.css';
import { MdLocationPin } from 'react-icons/md';
import Link from 'next/link';

const Hosts = () => {
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1681043305/Pickandhook/law_pro2_slnzfj.jpg';
  const text = 'Hi, I’m Zoey… Curvy,Tender and very succulent Boobs ready to bring your sensual fantasies into a reality and make you moan in Maximum pleasure .  '

  return (
    <section className={styles.hosts} id='hor'>
      <h3>30 Results</h3>
      {Array(10).fill('a').map((el, i) => (
        <Link href={'/viewHost'} className={styles.host} key={i}>
          <header>
            <div>
              <strong>Sandra</strong>
              <p><MdLocationPin /> <span>Kumasi (Independant)</span> </p>
            </div>
            <h3>Premium</h3>
          </header>
          <div className={styles.imgBox}>
            {Array(3).fill('a').map((el, i) => (
              <div key={i}>
                <Image src={place} fill alt='' className='cover' />
              </div>
            ))}
          </div>
          <p>
            <small id='cut2'>{text}</small>
            <legend>Read More</legend>
          </p>
        </Link>
      ))}
    </section>
  );
}

export default Hosts;