import localFont from 'next/font/local';
import styles from "@/app/components/modules/NavHoliday/navholiday.module.css";

const myFont = localFont({ src: '../../../DrukWideCyrBold.woff' })


export default function NavHoliday({ children }) {
    return (
        <div className={styles.navHoliday}>
            <div className='containerRow'>
            <div className={myFont.className}>1 сентября</div>
            <div className={myFont.className}>День учителя</div>
            <div className={myFont.className}>Новый год</div>
            <div className={myFont.className}>8 Марта</div>
            <div className={myFont.className}>23 Февраля</div>
            </div>
        </div>
    );
}
