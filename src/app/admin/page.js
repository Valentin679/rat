'use client'
import styles from "./admin.module.css";
import Header from "@/app/admin/components/modules/Header/Header";
import {useEffect, useState} from "react";
import Materials from "@/app/admin/components/modules/Materials/Materials";
import {GetMaterials} from "@/app/api/fetchMaterials";
import CategoryMaterials from "@/app/admin/components/modules/Materials/CategoryMaterials";
import {GetMaterialsCategories} from "@/app/api/fetchMaterialsCategories";

export default function Page() {
    const [menu, setMenu] = useState([])
    const [materialsCategories, setMaterialsCategories] = useState([])
    const [materials, setMaterials] = useState([])
    const [pending, setPending] = useState(true)

    async function GetUsers() {
        const response = await fetch("https://ratapi.vercel.app/api/users", {
            method: "GET",
            headers: {"Accept": "application/json"}
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            let menuList = await response.json();
            // console.log(menuList)
            setPending(false)
            return menuList
        }
    }

    // async function GetCategories() {
    //     const response = await fetch("https://ratapi.vercel.app/api/categories", {
    //         method: "GET",
    //         headers: { "Accept": "application/json" }
    //     });
    //     // если запрос прошел нормально
    //     if (response.ok === true) {
    //         // получаем данные
    //         let res = await response.json();
    //         console.log(res)
    //         // setPending(false)
    //         return res
    //     }
    // }

    useEffect(() => {
        GetMaterialsCategories().then((materialsCategories) => {
            setMaterialsCategories(materialsCategories)
        })
        GetMaterials().then((materials) => {
            setMaterials(materials)
        })
    }, []);
    useEffect(() => {
        GetUsers().then((menu) => {
            setMenu(menu)
        })
    }, []);
    useEffect(() => {
        if (materialsCategories.length === 0 && !materials && !menu) {
            setPending(true)
        } else {
            setPending(false)
        }
    }, [menu, materialsCategories, materials]);
    if (pending === false) {
        return (
            <div className={styles.main}>
                <h2>Админка</h2>
                <Header menu={menu}/>
                <div className={styles.materials}>
                    <h2>Работа с сырьем</h2>
                    <div className={styles.materialsContainer}>
                        <Materials materialsCategories={materialsCategories} materials={materials}/>
                        <CategoryMaterials materialsCategories={materialsCategories}/>
                    </div>
                </div>
            </div>
        )
    } else {
        <p>f</p>
    }
}