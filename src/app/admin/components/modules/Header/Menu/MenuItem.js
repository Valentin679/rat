"use client"
import styles from "@/app/admin/admin.module.css";
import Link from "next/link";
import {useState} from "react";
import {MongoClient} from "mongodb";
const client = new MongoClient("mongodb+srv://admin:12345asd@rat.gk7dz4o.mongodb.net/?appName=rat");


export default function MenuItem({id, title}) {
    const [change, setChange] = useState(false)
    const [inputValue, setInputValue] = useState()
    function handleChange(event) {
        setInputValue(event.target.value);
        console.log(inputValue)
    }
    function handleSave() {
        async function updateMenuItems() {
            try {
                await client.connect();
                const db = client.db("Menu");
                const collectionNav = db.collection("nav");
                console.log("Подключение с сервером успешно установлено");
                await collectionNav.findOneAndUpdate({_id: id}, { $set: {title: inputValue}});
            } catch (err) {
                console.log("Возникла ошибка");
                console.log(err);
            } finally {
                // Закрываем подключение при завершении работы или при ошибке
                await client.close();
                console.log("Подключение закрыто");
                setChange(false)
            }
        }

        updateMenuItems().catch(console.error);


        title = inputValue
    }
    return (
        <div className={styles.menuItem}>
            {!change ?
                <div onDoubleClick={() => {
                    setChange(true)
                    setInputValue(title)
                }}>{title}</div>
                :
                <div><input value={inputValue} onChange={handleChange} onDoubleClick={() => {
                    setChange(true)
                    setInputValue(title)
                }}></input>
                    <button onClick={handleSave}>save</button>
                </div>}
            {/*<Link href={id}>Ред.</Link>*/}
        </div>
    );
}