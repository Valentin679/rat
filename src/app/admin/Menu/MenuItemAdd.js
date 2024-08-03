"use client"
import styles from "@/app/admin/admin.module.css";
import {MongoClient} from "mongodb";
const client = new MongoClient("mongodb+srv://admin:12345asd@rat.gk7dz4o.mongodb.net/?appName=rat");

// const onAddMenuItem = async (e) => {
//     e.preventDefault()
//     try {
//         // Подключаемся к серверу
//         await client.connect();
//         // обращаемся к базе данных admin
//         const db = client.db("Menu");
//         const collectionNav = db.collection("nav");
//         console.log('2222')
//         // await collectionNav.insertOne(user)
//
//     } catch (err) {
//         console.log("Возникла ошибка");
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         await client.close();
//         console.log("Подключение закрыто");
//     }
// }
export default function MenuItemAdd({title}) {
    return (
        <form onSubmit={()=>{}}>
            <input type='text'/>
            <input type='text'/>
            <button type='submit'>добавить</button>
        </form>
    );
}