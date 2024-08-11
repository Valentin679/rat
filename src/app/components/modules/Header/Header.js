import styles from "@/app/components/modules/Header/header.module.css";

export default function Header({title}) {
    return (
        <header className={styles.header}>
            <div>LOGO</div>
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
            <div>Cart</div>
        </header>
    );
}