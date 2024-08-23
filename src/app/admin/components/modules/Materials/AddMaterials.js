import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";
import {addCategory, GetMaterials} from "@/app/api/fetchMaterials";

export default function AddMaterials({materialsList}) {
    const inputSlugRef = useRef(null)
    const inputTitleRef = useRef(null)
    const inputPriceRef = useRef(null)
    const inputCategoryRef = useRef(null)
    const inputMinRef = useRef(null)
    const [slug, setSlug] = useState()
    const [title, setTitle] = useState()

    const onChange = (e) => {
        const {id, value} = e.currentTarget;
        const setStateAction = {
            slug: setSlug,
            title: setTitle
        }[id];
        setStateAction && setStateAction(value);
        console.log(slug + " ------------ " + title)
    };

    return (
        <div className={styles.addItemContainer}>
            <h4>Добавить новое сырье</h4>
            <form className={styles.addItemList} onSubmit={(event) => {
                event.preventDefault()
                addCategory(slug, title).then(r => {
                    GetMaterials().then((res) => {
                        materialsList(res)
                        inputSlugRef.current.value = ''
                        inputTitleRef.current.value = ''
                        inputPriceRef.current.value = ''
                        inputCategoryRef.current.value = ''
                        inputMinRef.current.value = ''
                        console.log(slug + " = " + title)
                    })
                })

            }
            }>
                <div className={styles.addInputBox}>
                    <input id="title" onChange={onChange} placeholder="Название" type="text" name="title"
                           ref={inputTitleRef}
                           defaultValue=""/>
                    <input id="slug" onChange={onChange} placeholder="Артикул" type="text" name="slug" ref={inputSlugRef}
                           defaultValue=""/>
                    <input id="price" placeholder="Цена за грамм" onChange={onChange} type="number" name="price" ref={inputPriceRef}
                           defaultValue=""/>
                    <input id="category" placeholder="Категория" onChange={onChange} type="text" name="category" ref={inputCategoryRef}
                           defaultValue=""/>
                    <input id="min" placeholder="Минимум наличия" onChange={onChange} type="number" name="min" ref={inputMinRef}
                           defaultValue=""/>
                </div>

                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}