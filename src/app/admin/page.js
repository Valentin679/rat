'use client'
import styles from "./admin.module.css";
import Header from "@/app/admin/components/modules/Header/Header";
import {useEffect, useState} from "react";

export default function Page() {
    const [menu, setMenu] = useState()
    const [pending, setPending] = useState(true)

    async function GetUsers() {
// отправляет запрос и получаем ответ
        const response = await fetch("http://localhost:8000/api/users", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            let menuList = await response.json();
            console.log(menuList)
            setPending(false)
            return menuList
        }
    }

    useEffect(() => {
        GetUsers().then((menu)=>{
            setMenu(menu)
        })
    }, []);
    if (pending === false) {
        return (
            <main className={styles.main}>
                <h2>Админка</h2>
                <Header menu={menu}/>
            </main>
        )
    } else {
        <p>f</p>
    }
}