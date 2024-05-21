'use client';
import { useState } from 'react';
import styles from './topNav.module.css';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

const TopNav = () => {
  const [navToggled, setNavToggled] = useState(false);
  const toggleNav = () => {
    navToggled ? setNavToggled(false) : setNavToggled(true);
  }

  return (
    <section className={styles.topNav} id='hor'>
      <Link href={'/'} id="logo" className="logo1">EscortRoyale</Link>
      <nav className={navToggled ? styles.change : ''}>
        <Link href={'/premiumAccount'}>Premium Account</Link>
        <Link href={'/newEscorts'}>New Escorts</Link>
        <Link href={'/premiumEscorts'}>Premium Escorts</Link>
        <a href="">Contact Us </a>
        <MdMenu onClick={toggleNav} className={styles.menuTab} />
      </nav>
      <Link href={'/register'} className={styles.registerTab}>Register For free</Link>
    </section>
  );
}

export default TopNav;