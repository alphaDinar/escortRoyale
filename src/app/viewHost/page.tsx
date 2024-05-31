'use client'
import Image from "next/image";
import TopNav from "../components/TopNav/TopNav";
import styles from './viewhost.module.css';
import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdLaptopWindows, MdWeb } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { fireStoreDB } from "@/Firebase/base";
import { useIsLoading } from "../contexts/isLoadingContext";

interface defType extends Record<string, any> { };
const ViewHost = ({ searchParams }: { searchParams: { hid: string } }) => {
  const place2 = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1681043305/Pickandhook/law_pro2_slnzfj.jpg';
  const place = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715185393/Pickandhook/SSP_708943_2_bdoith.jpg'
  const bio = "Hello, do allow me to introduce myself. I'm Louise an all Natural British High Class London Independent Ebony Escort, International Travel Companion and your personal confidante.I'm London born and bred, private school educated and a naughty specimen. I have a bright and bubbly personality, and I love to please. I have big beautiful brown eyes, a cute kissable nose, juicy lips and a beautiful, radiant smile. I have glowing bronze skin, and sultry bouncy curves for you to touch and squeeze however you please.I am very friendly and accomodating and love all men, of any age. I love a respectful and mature gentleman, and I like to have an enjoyable time.Travelling is one of my passions in life and I would be delighted to hop on a plane and meet you on the city of your choice. Some of my favourite cities include London, Paris, Monaco, Nice, Zurich, Milan, Rome, Singapore and Shanghai."

  const { setIsLoading } = useIsLoading();
  const hid = searchParams.hid;
  const [host, setHost] = useState<defType>({});
  const [currentMedia, setCurrentMedia] = useState<defType>({});

  useEffect(() => {
    const getHostStream = onSnapshot(doc(fireStoreDB, 'Hosts/' + hid), (prod) => {
      console.log(hid);
      if (prod.exists()) {
        setHost({ id: prod.id, ...prod.data() });
        setCurrentMedia(prod.data().image);
      }
      setIsLoading(false);
    });

    return () => getHostStream();
  }, [hid])

  return (
    <main>
      <TopNav />

      <section className={styles.hostBox} id="horMargin">
        <section className={styles.left}>
          <section className={styles.imgBox}>
            {host.image &&
              currentMedia.type === 'image' ?
              <img src={currentMedia.url} alt="" className={styles.currentMedia} />
              :
              <video src={currentMedia.url} className={styles.currentMedia} muted autoPlay></video>
            }
            {host.image &&
              <div className={styles.mediaSet}>
                <img src={host.image.url} onClick={() => setCurrentMedia(host.image)} alt="" className="contain" width={70} height={70} />
                {host.mediaSet.map((item: defType, i: number) => (
                  item.url !== 'empty' &&
                    item.type === 'image' ?
                    <img alt="" key={i} src={item.url} width={70} height={70} className="contain" onClick={() => setCurrentMedia(item)} />
                    :
                    <video key={i} src={item.url} width={70} height={70} className="contain" muted autoPlay loop onClick={() => setCurrentMedia(item)}></video>

                ))}
              </div>
            }
          </section>

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
            {host.bio}
          </article>

          <hr />

          <section className={styles.conBox}>
            <h3>About {host.username}</h3>
            <section className={styles.con}>
              <p><strong>Gender</strong> <span>{host.gender}</span></p>
              <p><strong>Sexual preference</strong> <span>{host.sexPref}</span></p>
              <p><strong>Languages</strong> <span>{host.languages}</span></p>
              <p><strong>Age</strong> <span>{host.age}</span></p>
              <p><strong>Ethnic Group</strong> <span>{host.ethnic}</span></p>
              <p><strong>Hobbies</strong> <span>{host.hobbies}</span></p>
              <p><strong>Tattoos</strong> <span>{host.tattoos}</span></p>
              <p><strong>Smoking</strong> <span>{host.smoke}</span></p>
              <p><strong>Piercings</strong> <span>{host.piercings}</span></p>
            </section>
          </section>

          <section className={styles.conBox}>
            <h3>Services</h3>
            <section className={styles.con}>
              <p><strong>Clients</strong> <span>{host.clients}</span></p>
              <p><strong>Out-Call</strong> <span>{host.outCall}</span></p>
              <p><strong>In-Call</strong> <span>{host.inCall}</span></p>
              <p><strong>Straight sex</strong> <span>{host.straightSex}</span></p>
              <p><strong>Massage</strong> <span>{host.massage}</span></p>
              <p><strong>Oral sex (giving)</strong> <span>{host.oralSexG}</span></p>
              <p><strong>Oral sex (taking)</strong> <span>{host.oralSexT}</span></p>
              <p><strong>Anal sex</strong> <span>{host.anal}</span></p>
              <p><strong>French</strong> <span>{host.french}</span></p>
              <p><strong>Fetish / Fantasy</strong> <span>{host.fetish}</span></p>
              <p><strong>BDSM</strong> <span>{host.BDSM}</span></p>
              <p><strong>Striptease (private)</strong> <span>{host.strip}</span></p>
            </section>
          </section>

          <section className={styles.conBox}>
            <h3>Pricing</h3>
            <section className={styles.con}>
              <p><strong>Price 1 hour</strong> <span>{host.price1}</span></p>
              <p><strong>Price extra hour</strong> <span>{host.price2}</span></p>
              <p><strong>Price 4 hours</strong> <span>{host.price4}</span></p>
              <p><strong>Price 24 hours</strong> <span>{host.price24}</span></p>
              <p><strong>Payment Options</strong> <span>{host.payOptions}</span></p>
            </section>
          </section>
        </section>
      </section>

      <hr id="divider" />

      <section className={styles.relatedBox} id="hor">
        <h3>Also In Kumasi</h3>
        <article>
          {Array(4).fill('a').map((el, i) => (
            <div key={i}>
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