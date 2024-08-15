import styles from "@/app/components/modules/Header/header.module.css";
import {CgProfile} from "react-icons/cg";
import {FiShoppingBag} from "react-icons/fi";
import {FaRegHeart} from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import localFont from "next/font/local";
import Logo from "@/app/components/modules/Logo/Logo";

const myFont = localFont({src: '../../../DrukWideCyrBold.woff'})
const golosBold = localFont({src: '../../../fonts/GolosText-Bold.ttf'})
const golosMedium = localFont({src: '../../../fonts/GolosText-Medium.ttf'})

export default function Header({title}) {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <ul className={styles.navLeft}>
                        <li className={golosMedium.className}>ДОСТАВКА И ОПЛАТА</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                    <ul className={styles.navRight}>
                        <li>МАГАЗИН</li>
                        <li>КОНСТРУКТОР</li>
                        <li>ПОДАРКИ</li>
                    </ul>
                    <ul className={styles.navSocial}>
                        <li><SlSocialVkontakte
                            size={25}
                        /></li>
                        <li><LiaTelegram
                            size={25}
                        /></li>
                        <li>8 (900) 228-67-15</li>
                    </ul>
                </div>
            </nav>
            <div className={styles.navMiddle}>
                <div className={styles.container}>
                    <Logo/>
                    <div className={styles.socialIcons}>
                        <div className={styles.cartIcon}>
                            <CgProfile
                                size={25}
                            />
                            <p className={golosBold.className}>Профиль</p>
                        </div>
                        <div className={styles.cartIcon}>
                            <FaRegHeart
                                size={25}
                            />
                            <p className={golosBold.className}>Избранное</p>
                        </div>
                        <div className={styles.cartIcon}>
                            <FiShoppingBag
                                size={25}
                            />
                            <p className={golosBold.className}>Корзина</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
        ;
}