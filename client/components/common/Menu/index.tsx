import { useHistory } from "../../../Providers/History";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  const { history } = useHistory();
  return (
    <div className={styles.menu}>
      <div className={styles.recentList}>
        {history?.length > 0 && (
          <>
            <p>Recent: </p>
            {history.map(({ path, label }) =>
              <div key={path} className={styles.menuItem}>
                <Link href={path}>
                  {label}
                </Link>
              </div>
            )}
          </>
        )
        }
      </div>
      <div className={styles.menuItem}>
        <Link href="/characters">
          Characters
        </Link>
      </div>
    </div>)
}

export default Menu;