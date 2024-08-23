import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";
import {
    addMaterialsCategory,
    GetMaterialsCategories
} from "@/app/api/fetchMaterialsCategories";

export default function AddCategoryMaterials({setCatList}) {
    const inputSlugRef = useRef(null)
    const inputTitleRef = useRef(null)
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
            <h4>Добавить новую категорию сырья</h4>
            <form className={styles.addItemList} onSubmit={(event) => {
                event.preventDefault()
                addMaterialsCategory(slug, title).then(r => {
                    GetMaterialsCategories().then((res) => {
                        setCatList(res)
                        inputSlugRef.current.value = ''
                        inputTitleRef.current.value = ''
                        console.log(slug + " = " + title)
                    })
                })

            }
            }>
                <div className={styles.addInputBox}>
                    <input id="title" placeholder='Название' onChange={onChange} type="text" name="title" ref={inputTitleRef}
                           defaultValue=""/>
                    <input id="slug" placeholder='Артикул' onChange={onChange} type="text" name="slug" ref={inputSlugRef}
                           defaultValue=""/>
                </div>

                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}