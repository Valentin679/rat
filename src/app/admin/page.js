'use client'
import styles from "./admin.module.css";
import Header from "@/app/admin/components/modules/Header/Header";
import {useEffect, useState} from "react";
import Materials from "@/app/admin/components/modules/Materials/Materials";

export default function Page() {
    const [menu, setMenu] = useState([])
    const [categories, setCategories] = useState([])
    const [pending, setPending] = useState(true)

    async function GetUsers() {
        const response = await fetch("https://ratapi.vercel.app/api/users", {
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
    async function GetCategories() {
        const response = await fetch("https://ratapi.vercel.app/api/categories", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            let res = await response.json();
            console.log(res)
            // setPending(false)
            return res
        }
    }

    useEffect(() => {
        GetCategories().then((categories)=>{
            setCategories(categories)
        })
    }, []);
    useEffect(() => {
        GetUsers().then((menu)=>{
            setMenu(menu)
        })
    }, []);
    useEffect(() => {
        if (categories.length === 0 && !menu) {setPending(true)} else {setPending(false)}
    }, [menu, categories]);
    if (pending === false) {
        return (
            <main className={styles.main}>
                <h2>Админка</h2>
                <Header menu={menu}/>
                <Materials categories={categories}/>
            </main>
        )
    } else {
        <p>f</p>
    }
}