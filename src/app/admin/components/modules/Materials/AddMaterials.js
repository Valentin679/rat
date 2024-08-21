import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";
import {addCategory, GetCategories} from "@/app/api/fetchCategories";

export default function AddMaterials({setCatList}) {
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
        <div className={styles.addItemList}>
            <form onSubmit={(event) => {
                event.preventDefault()
                addCategory(slug, title).then(r => {
                    GetCategories().then((res) => {
                        setCatList(res)
                        inputSlugRef.current.value = ''
                        inputTitleRef.current.value = ''
                        console.log(slug + " = " + title)
                    })
                })

            }
            }>
                <div>
                    <input id="slug" onChange={onChange} type="text" name="slug" ref={inputSlugRef} defaultValue=""/>
                    <input id="title" onChange={onChange} type="text" name="title" ref={inputTitleRef} defaultValue=""/>
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>

    )
}