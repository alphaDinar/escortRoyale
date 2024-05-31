import Image from 'next/image';
import styles from './hosts.module.css';
import { MdLocationPin } from 'react-icons/md';
import Link from 'next/link';
import { FC } from 'react';


interface defType extends Record<string, any> { };
type HostsProps = {
  hosts: defType[]
};

const Hosts: FC<HostsProps> = ({ hosts }) => {
  return (
    <section className={styles.hosts}>
      {hosts.map((host, i) => (
        <Link href={{ pathname: '/viewHost', query: { hid: host.id } }} className={styles.host} key={i}>
          <header>
            <div>
              <strong>{host.username}</strong>
              <p><MdLocationPin /> <span>{host.region} ({host.agency})</span> </p>
            </div>
            <h3>{host.level}</h3>
          </header>
          <div className={styles.imgBox}>
            <div>
              <Image src={host.image.url} fill alt='' className='cover' />
            </div>
            {host.mediaSet.slice(0, 2).map((item: defType, i: number) => (
              <div key={i}>
                {item.url !== 'empty' &&
                  item.type === 'image' ?
                  <Image src={item.url} fill alt='' className='cover' />
                  :
                  <video src={item.url} muted autoPlay loop></video>
                }
              </div>
            ))}
          </div>
          <p>
            <small id='cut2'>{host.bio}</small>
            <legend>Read More</legend>
          </p>
        </Link>
      ))}
    </section>
  );
}

export default Hosts;