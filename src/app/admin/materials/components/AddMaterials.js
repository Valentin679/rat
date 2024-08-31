import styles from "@/app/admin/materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import {addMaterials, GetMaterials} from "@/app/api/fetchMaterials";
import SelectCategories from "@/app/admin/components/SelectCategories";

export default function AddMaterials({setMaterialsList, materialsCategories}) {
    const inputSlugRef = useRef(null)
    const inputTitleRef = useRef(null)
    const inputPriceRef = useRef(null)
    const inputCategoryRef = useRef(null)
    const inputMinRef = useRef(null)
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [minimal_availability, setMinimal_availability] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()

    const onChange = (e) => {
        const {id, value} = e.currentTarget;
        const setStateAction = {
            id: setId,
            title: setTitle,
            price: setPrice,
            minimal_availability: setMinimal_availability

        }[id];
        setStateAction && setStateAction(value);
        console.log(id + " ------------ " + title)
    };
    return (
        <div className={styles.addItemContainer}>
            <h4>Добавить новое сырье</h4>
            <form className={styles.addItemList} onSubmit={(event) => {
                event.preventDefault()
                addMaterials(id, title, price, category).then(r => {
                    GetMaterials().then((res) => {
                        setMaterialsList(res)
                        setCategory('')
                        inputTitleRef.current.value = ''
                        inputPriceRef.current.value = ''
                        // inputMinRef.current.value = ''
                        console.log(id + " = " + title)
                    })
                })

            }
            }>
                <div className={styles.addInputBox}>
                    <input id="title" onChange={onChange} placeholder="Название" type="text" name="title"
                           ref={inputTitleRef}
                           defaultValue=""/>
                    {/*<input id="slug" onChange={onChange} placeholder="Артикул" type="text" name="slug" ref={inputSlugRef}*/}
                    {/*       defaultValue=""/>*/}
                    <input id="price" placeholder="Цена за грамм" onChange={onChange} type="number" name="price" ref={inputPriceRef}
                           defaultValue=""/>
                    <SelectCategories setCategory={setCategory} categories={materialsCategories}/>
                    <input id="minimal_availability" placeholder="Минимум наличия" onChange={onChange} type="number" name="minimal_availability" ref={inputMinRef}
                           defaultValue=""/>
                </div>

                <button className={styles.button} type="submit">Добавить</button>
            </form>
        </div>
    )
}