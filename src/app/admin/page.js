'use client'
import styles from "./admin.module.css";
import React, {useEffect, useState} from "react";
import {GetMaterials} from "@/app/api/fetchMaterials";
import {GetMaterialsCategories} from "@/app/api/fetchMaterialsCategories";
import FormsContainer from "@/app/admin/components/modules/Forms/FormsContainer";
import MaterialsContainer from "@/app/admin/components/modules/Materials/MaterialsContainer";
import SetsContainer from "@/app/admin/components/modules/Sets/SetsContainer";


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
                {/*<Header menu={menu}/>*/}
                <MaterialsContainer materialsCategories={materialsCategories} materials={materials}/>
                <FormsContainer/>
                <SetsContainer/>
            </div>
        )
    } else {
        <p>f</p>
    }
}