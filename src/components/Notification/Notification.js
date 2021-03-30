import styles from './Notification.module.css';

const Notification = ({ text, type }) => {
  // const classNames = [styles.notification,styles.error]
  return <p className={styles[type]}>{text}</p>;
};

export default Notification;
