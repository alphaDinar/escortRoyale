'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";
import { BiMessageSquare } from "react-icons/bi";
import { GoDot } from "react-icons/go";
import { ImNotification } from "react-icons/im";
import { MdOutlineMenu, MdOutlineNotifications, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { frontDeskTargetList } from "../../External/lists";
import Loading from "../Loading/Loading";
import Notify from "../Notify/Notify";
// import { useIsLoading } from "../contexts/isLoadingContext";
import styles from './panel.module.css';
import { useIsLoading } from "@/app/contexts/isLoadingContext";

type panelProps = {
  children: ReactNode
}

const Panel = ({ children }: panelProps) => {
  const { isLoading } = useIsLoading();

  const dropDown = <RiArrowDropDownLine className={styles.dropDown} />;
  const dot = <GoDot className={styles.dot} />;

  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [subLinkModes, setSubLinkModes] = useState([false, true, false]);

  const toggleSidebar = () => {
    sidebarToggled ? setSidebarToggled(false) : setSidebarToggled(true);
  }

  const toggleSubLinkMode = (index: number) => {
    const subLinkModesTemp = [...subLinkModes];
    if (subLinkModesTemp[index]) {
      subLinkModesTemp[index] = false;
      setSubLinkModes(subLinkModesTemp);
    } else {
      subLinkModesTemp[index] = true;
      setSubLinkModes(subLinkModesTemp);
    }
  }

  return (
    <main className={styles.panel}>
      <section className={!sidebarToggled ? `${styles.sidebar} ${styles.change}` : styles.sidebar}>
        <header>Smart Hotel</header>
        <nav>
          {frontDeskTargetList.map((el, i) => (
            <section key={i}>
              <h3>{el.tag.toUpperCase()}</h3>
              <article>
                {el.linkList.map((parentLink, ii) => (
                  parentLink.type === 'normal' ?
                    <Link href={parentLink.target!} key={ii}> {parentLink.iconEl} <span>{parentLink.tag}</span> </Link>
                    :
                    <article key={ii}>
                      <a onClick={() => toggleSubLinkMode(parentLink.index!)}>{parentLink.iconEl} <span>{parentLink.tag}</span>  {dropDown} </a>
                      <ul className={subLinkModes[parentLink.index!] ? styles.visibleLinks : styles.hiddenLinks}>
                        {parentLink.subList!.map((childLink, iii) => (
                          <Link href={childLink.target} className={styles.subLink} key={iii}> {dot} <span>{childLink.tag}</span> </Link>
                        ))}
                      </ul>
                    </article>
                ))}
              </article>
            </section>
          ))}
        </nav>

      </section>
      <section className={!sidebarToggled ? `${styles.sidebarSheet} ${styles.change}` : styles.sidebarSheet} onClick={toggleSidebar}></section>

      <section className={!sidebarToggled ? `${styles.screen} ${styles.change}` : styles.screen}>
        <section className={styles.topNav}>
          <article className={styles.left}>
            <MdOutlineMenu onClick={toggleSidebar} className={styles.menuTab} />
            <MdSearch />
          </article>
          <article className={styles.right}>
            <legend>
              <BiMessageSquare />
              <sup>4</sup>
            </legend>
            <legend>
              <MdOutlineNotifications />
              <sup>3</sup>
            </legend>
            <legend>
              <ImNotification />
              <sup>2</sup>
            </legend>
            <div className={styles.userBox}>
              <hr />
              <sub></sub>

              <span>Hi, <strong>Julia</strong></span>
            </div>
          </article>
        </section>
        {children}
        {isLoading && <Loading />}

        {/* {notify.active && <Notify />} */}

        <Notify />
      </section>



    </main>
  );
}

export default Panel;