import styles from "@/app/components/modules/Header/header.module.css";
import logo from "/public/logo-300x254.png";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import Background from '/public/bg.jpg'

export default function Header({title}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href='/'>
                <Image
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                    width={80}
                    // height={100}
                    priority
                />
                <h1>МИСТЕР РЭТ</h1>
                </a>
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li>МАГАЗИН</li>
                    <li>КОНСТРУКТОР</li>
                    <li>О НАС</li>
                    <li>ПОДАРКИ</li>
                    <li>ГДЕ КУПИТЬ</li>
                    <li>КОНТАКТЫ</li>
                </ul>
            </nav>
            {/*<div className={styles.cartIcon}>*/}
            {/*    <IoCartOutline*/}
            {/*    size={40}*/}
            {/*    />*/}
            {/*</div>*/}
        </header>
    );
}