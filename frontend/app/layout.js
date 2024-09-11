import Link from 'next/link';
import './globals.css';
import Styles from './layout.module.css';

export const metadata = {
    title: 'Blockhouse Analytics Dashboard',
    description: 'interview assignment',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={Styles.navbar}>
                    <Link href="/" className={Styles.homeIcon}>
                        <svg
                            viewBox="0 0 22 25"
                            xmlns="http://www.w3.org/2000/svg"
                            className={Styles.icon}
                        >
                            <path
                                d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z"
                                fill="#171717"
                            />
                        </svg>
                        <h4>blockhouse.app</h4>
                    </Link>
                    <Link href="/dashboard" className={Styles.button}>
                        <h5>Dashboard</h5>
                    </Link>
                </div>
                <main className={Styles.main}>{children}</main>
            </body>
        </html>
    );
}
