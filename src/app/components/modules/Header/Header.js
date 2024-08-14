import styles from "@/app/components/modules/Header/header.module.css";
import {CgProfile} from "react-icons/cg";
import {FiShoppingBag} from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import localFont from "next/font/local";
import Logo from "@/app/components/modules/Logo/Logo";

const myFont = localFont({src: '../../../DrukWideCyrBold.woff'})

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
                </ul>
                <ul className={styles.navSocial}>
                    <li>8 (900) 228-67-15</li>
                </ul>
            </nav>
            <div className={styles.navMiddle}>
                <Logo/>
                <div className={styles.socialIcons}>
                    <div className={styles.cartIcon}>
                        <CgProfile
                            size={40}
                        />
                        <p className={myFont.className}>Профиль</p>
                    </div>
                    <div className={styles.cartIcon}>
                        <FaRegHeart
                            size={40}
                        />
                        <p className={myFont.className}>Избранное</p>
                    </div>
                    <div className={styles.cartIcon}>
                        <FiShoppingBag
                            size={40}
                        />
                        <p className={myFont.className}>Корзина</p>
                    </div>
                </div>
            </div>

        </header>
    )
        ;
}