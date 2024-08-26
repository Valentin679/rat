import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";
import {addCategory, addMaterials, GetMaterials} from "@/app/api/fetchMaterials";

export default function AddMaterials({setMaterialsList}) {
    const inputSlugRef = useRef(null)
    const inputTitleRef = useRef(null)
    const inputPriceRef = useRef(null)
    const inputCategoryRef = useRef(null)
    const inputMinRef = useRef(null)
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [minimal_availability, setMinimal_availability] = useState()
    const [category_id, setCategory_id] = useState()
    const [category_title, setCategory_title] = useState()
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
                addMaterials(id, title, price, minimal_availability,category_id,category_title).then(r => {
                    GetMaterials().then((res) => {
                        setMaterialsList(res)
                        inputSlugRef.current.value = ''
                        inputTitleRef.current.value = ''
                        inputPriceRef.current.value = ''
                        inputCategoryRef.current.value = ''
                        inputMinRef.current.value = ''
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
                    <input id="category" placeholder="Категория" onChange={onChange} type="text" name="category" ref={inputCategoryRef}
                           defaultValue=""/>
                    <input id="minimal_availability" placeholder="Минимум наличия" onChange={onChange} type="number" name="minimal_availability" ref={inputMinRef}
                           defaultValue=""/>
                </div>

                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}