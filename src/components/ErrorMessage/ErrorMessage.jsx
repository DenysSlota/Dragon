import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <p className={styles.text}>
      Houston, we're in trouble.<br />
      We cannot display data.<br />
      Come back when we fix everything.
    </p>
  )
}

export default ErrorMessage;