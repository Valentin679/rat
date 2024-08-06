
import styles from "./admin.module.css";
import {MongoClient} from "mongodb";
import Header from "@/app/admin/components/modules/Header/Header";

const client = new MongoClient("mongodb+srv://admin:12345asd@rat.gk7dz4o.mongodb.net/?appName=rat");

let menu = []
let pending = true

async function run() {
    try {
        // Подключаемся к серверу
        await client.connect();
        // обращаемся к базе данных admin
        const db = client.db("Menu");
        const collectionNav = db.collection("nav");
        const count = await collectionNav.countDocuments();
        // выполняем пинг для проверки подключения
        // const result = await db.command({ ping: 1 });
        console.log("Подключение с сервером успешно установлено");
        const navList = await collectionNav.find().toArray();
        // menu.push(navList[0])
        menu = navList
        // console.log(count);
        console.log(menu);
        pending = false
    } catch (err) {
        console.log("Возникла ошибка");
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await client.close();
        console.log("Подключение закрыто");
    }
}

run().catch(console.error);


export default function Page() {
    if (pending === false) {
        return (
            <main className={styles.main}>
                <h2>admin</h2>
                <Header menu={menu}/>
            </main>
        )
    } else {
        <p>f</p>
    }
}
export const getStaticProps = () => ({
    props: {menu},
})