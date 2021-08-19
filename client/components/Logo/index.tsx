
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Logo.module.css";

interface LogoProps {
  type: "header" | "footer"
}

const Logo = ({ type }: LogoProps) => <Link href="/">
  <div className={styles.image}>
    <Image src={`/logo_${type}.png`} className="logo-icon" layout="fill" />
  </div>
</Link>

export default Logo;