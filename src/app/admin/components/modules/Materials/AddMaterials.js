import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";

export default function AddMaterials({categories}) {
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
    };
    const addCategory = async () => {
        let response = await fetch('http://localhost:8800/api/categories', {
            method: 'POST',
            //
            body: JSON.stringify({
                _id: slug,
                title: title,
                slug: slug
            }),
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        })
    }
    return (
            <div className={styles.addItemList}>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    addCategory(slug, title).then(r => console.log(slug))
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