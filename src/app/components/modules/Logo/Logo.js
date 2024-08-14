import localFont from 'next/font/local';
import styles from "@/app/components/modules/Logo/logo.module.css";
import Image from "next/image";
import logo from "../../../../../public/logo-300x254.png";

const myFont = localFont({ src: '../../../DrukWideCyrBold.woff' })


export default function Logo({ children }) {
    return (
        <div className={styles.logo}>
            <a href='/' className={myFont.className}>
                <Image
                    src={logo}
                    alt="Logo"
                    className=''
                    width={70}
                    // height={100}
                    priority
                />
                <div>
                    <h1>МИСТЕР РЭТ</h1>
                    <p>Мастерская сладостей ручной работы</p>
                </div>
            </a>
        </div>
    );
}
