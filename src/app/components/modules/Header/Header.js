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
                        <li className={golosMedium.className}><a href='/admin'>ДОСТАВКА И ОПЛАТА</a></li>
                        <li className={golosMedium.className}>КОНТАКТЫ</li>
                    </ul>
                    <ul className={styles.navRight}>
                        <li className={golosMedium.className}>МАГАЗИН</li>
                        <li className={golosMedium.className}>КОНСТРУКТОР</li>
                        <li className={golosMedium.className}>ПОДАРКИ</li>
                    </ul>
                    <ul className={styles.navSocial}>
                        <li className={styles.navSocialIcons}><SlSocialVkontakte
                            size={25}
                        /></li>
                        <li className={styles.navSocialIcons}><LiaTelegram
                            size={25}
                        /></li>
                        <li className={styles.navPhone}>8 (900) 228-67-15</li>
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