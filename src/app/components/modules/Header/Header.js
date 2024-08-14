import styles from "@/app/components/modules/Header/header.module.css";
import logo from "/public/logo-300x254.png";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import Background from '/public/bg.jpg'

export default function Header({title}) {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>


                <ul className={styles.navLeft}>
                    <li>ДОСТАВКА И ОПЛАТА</li>
                    <li>КОНТАКТЫ</li>
                </ul>
                <ul className={styles.navRight}>

                    <li>МАГАЗИН</li>
                    <li>КОНСТРУКТОР</li>
                    <li>ПОДАРКИ</li>
                    <li>+7 (900) 228-67-15</li>
                </ul>
            </nav>
            <div className={styles.logo}>
                <a href='/'>
                    <Image
                        src={logo}
                        alt="Logo"
                        className=''
                        width={50}
                        // height={100}
                        priority
                    />
                    <h1>МИСТЕР РЭТ</h1>
                </a>
            </div>
            {/*<div className={styles.cartIcon}>*/}
            {/*    <IoCartOutline*/}
            {/*    size={40}*/}
            {/*    />*/}
            {/*</div>*/}
        </header>
    );
}