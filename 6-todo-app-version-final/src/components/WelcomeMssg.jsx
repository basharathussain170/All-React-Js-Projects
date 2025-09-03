import { ImHappy } from "react-icons/im";
import styles from "./WelcomeMssg.module.css";
function WelcomeMssg({ todoLength }) {
  return (
    <div>
      {todoLength == "" ? (
        <h1 className={styles.para}>
          Enjoy your Day <ImHappy />
        </h1>
      ) : null}
    </div>
  );
}
export default WelcomeMssg;
