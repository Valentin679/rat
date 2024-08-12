import styles from "@/app/components/modules/Header/header.module.css";
import logo from "/public/logo-300x254.png";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export default function Header({title}) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                    width={50}
                    // height={100}
                    priority
                />
            </div>
            <nav>
                <ul className={styles.nav}>
                    <li>Магазин</li>
                    <li>Конструктор</li>
                    <li>О нас</li>
                    <li>Подарки</li>
                    <li>Где купить</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div>
                <IoCartOutline
                size={30}
                />
            </div>
        </header>
    );
}