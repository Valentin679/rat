import localFont from 'next/font/local';
import styles from "@/app/components/modules/NavHoliday/navholiday.module.css";

const myFont = localFont({ src: '../../../DrukWideCyrBold.woff' })
const golosBold = localFont({src: '../../../fonts/GolosText-Bold.ttf'})

export default function NavHoliday({ children }) {
    return (
        <div className={styles.navHoliday}>
            <div className='containerRow'>
            <div className={golosBold.className}>1 сентября</div>
            <div className={golosBold.className}>День учителя</div>
            <div className={golosBold.className}>Новый год</div>
            <div className={golosBold.className}>8 Марта</div>
            <div className={golosBold.className}>23 Февраля</div>
            </div>
        </div>
    );
}
