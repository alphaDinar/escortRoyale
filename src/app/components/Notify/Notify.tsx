'use client';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { MdOutlineTaskAlt } from 'react-icons/md';
import styles from './notify.module.css';
import { resetNote } from '../../External/forms';
import { useNotify } from '@/app/contexts/notifyContext';

const Notify = () => {
  const { notify, setNotify } = useNotify();

  return (
    <div
      onClick={() => setNotify(resetNote(notify.type, notify.text))}
      className={notify.active ? styles.note : `${styles.note} ${styles.hidden}`}
      style={notify.type === 'pass' ? { background: 'var(--pass)' } : { background: 'var(--red)' }}>

      {notify.type === 'pass' ?
        <MdOutlineTaskAlt />
        :
        <IoAlertCircleOutline />
      }

      <span>{notify.text}</span>
    </div>
  );
}

export default Notify;