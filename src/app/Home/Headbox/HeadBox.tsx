'use client';
import Image from 'next/image';
import styles from './headBox.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdEast, MdLocationPin, MdWest } from 'react-icons/md';
import Link from 'next/link';
import { useWinSize } from '@/app/contexts/winSizeContext';

const HeadBox = () => {
  const places = ['https://res.cloudinary.com/dvnemzw0z/image/upload/v1681043305/Pickandhook/law_pro2_slnzfj.jpg', 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1715185393/Pickandhook/SSP_708943_2_bdoith.jpg'];
  const {winSize} = useWinSize();

  return (
    <section className={styles.headBox} id={winSize > 900 ? 'hor' : ''}>
      <section className={styles.left}>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className={styles.swiper}
        >
          {places.map((el, i) => (
            <SwiperSlide className={styles.slide} key={i}>
              <Link href={''}>
                <Image alt='' className='cover' fill sizes='auto' src={el} />
                <p>
                  <strong>Sarah</strong>
                  <span><MdLocationPin /> Accra</span>
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.right}>
        <strong>EscortRoyale</strong>
        <h4>Your Top Escort Agency Welcome</h4>
        <button>
          <span>Create A free Escort Profile Today</span>
          {/* <MdEast /> */}
        </button>
      </section>

      <section className={styles.searchBox}></section>
    </section>
  );
}

export default HeadBox;