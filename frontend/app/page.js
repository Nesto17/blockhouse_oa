import Link from 'next/link';
import Styles from './page.module.css';

export default function Home() {
    return (
        <div className={Styles.page}>
            <svg viewBox="0 0 22 25" xmlns="http://www.w3.org/2000/svg" className={Styles.icon}>
                <path
                    d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z"
                    fill="#171717"
                />
            </svg>
            <h1 className={Styles.title}>Blockhouse Interview Assignment</h1>
            <h4>by Ernest Salim</h4>
            <Link href="/dashboard" className={Styles.button}>
                <h4>Visit Dashboard</h4>
            </Link>
        </div>
    );
}
