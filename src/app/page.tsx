'use client';
import HeadBox from "./Home/Headbox/HeadBox";
import Hosts from "./components/Hosts/Hosts";
import TopNav from "./components/TopNav/TopNav";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireStoreDB } from "@/Firebase/base";
import { useIsLoading } from "./contexts/isLoadingContext";
import { useEffect, useState } from "react";
import styles from './home.module.css';
import { IoLocationOutline } from "react-icons/io5";

interface defType extends Record<string, any> { };
const Home = () => {
  const { setIsLoading } = useIsLoading();
  const [allHosts, setAllHosts] = useState<defType[]>([]);
  const [hosts, setHosts] = useState<defType[]>([]);

  useEffect(() => {
    const hostsRef = collection(fireStoreDB, 'Hosts/');
    const hostStream = onSnapshot(hostsRef, (snapshot) => {
      setAllHosts(snapshot.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
      setHosts(snapshot.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
      setIsLoading(false);
    });

    return () => hostStream();
  }, [])

  return (
    <main>
      <TopNav />

      <HeadBox />

      <section className={styles.hostBox} id="hor">
        {/* <section className={styles.searchBox}>
          <article>
            <strong>Location</strong>
            <p>
              <select>
                <option value="">Kumasi</option>
                <option value="">Accra</option>
              </select>
              <IoLocationOutline />
            </p>
          </article>

          <article>
            <strong>Location</strong>
            <p>
              <select>
                <option value="">Kumasi</option>
                <option value="">Accra</option>
              </select>
              <IoLocationOutline />
            </p>
          </article>

          <article>
            <strong>Category</strong>
            <p>
              <select>
                <option value="">Curvy</option>
                <option value="">Accra</option>
              </select>
              <IoLocationOutline />
            </p>
          </article>
        </section> */}
        <Hosts hosts={hosts} />
      </section>
    </main>
  );
}

export default Home;