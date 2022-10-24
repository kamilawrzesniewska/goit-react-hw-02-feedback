import styles from './Notification.module.css';
import propTypes from 'prop-types';

export const Notification = ({ message }) => (<p className={styles.paragraph}>{message}</p>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};