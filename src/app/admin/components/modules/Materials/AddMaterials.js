import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";
import {addCategory, GetCategories} from "@/app/api/fetchMaterials";

export default function AddMaterials({materialsList}) {
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
            <h4>Добавить новое сырье</h4>
            <form className={styles.addItemList} onSubmit={(event) => {
                event.preventDefault()
                addCategory(slug, title).then(r => {
                    GetCategories().then((res) => {
                        materialsList(res)
                        inputSlugRef.current.value = ''
                        inputTitleRef.current.value = ''
                        console.log(slug + " = " + title)
                    })
                })

            }
            }>
                <div className={styles.addInputBox}>
                    <input id="slug" onChange={onChange} type="text" name="slug" ref={inputSlugRef}
                           defaultValue=""/>
                    <input id="title" onChange={onChange} type="text" name="title" ref={inputTitleRef}
                           defaultValue=""/>
                </div>

                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}