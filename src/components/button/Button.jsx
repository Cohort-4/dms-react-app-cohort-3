import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ url, text }) => {
  return (
    <Link to={url}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
};
export default Button;
