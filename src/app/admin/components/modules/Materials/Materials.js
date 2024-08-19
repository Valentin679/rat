import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import {useRef, useState} from "react";

export default function Materials({categories}) {
    const formRef = useRef(null)
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
    const addCategory = (slug, title) => {
        const data = {title: title, slug: slug};

        fetch('https://ratapi.vercel.app/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log('Success:', data);
            })

    }
// console.log(menu)
    return (

        <div className={styles.container}>
            <h2>Сырье</h2>
            <div className={styles.itemList}>
                {/*{categories.map(e => <div key={e.slug} className={styles.item}>{e.title}</div>)}*/}
            </div>
            <div className={styles.addItemList}>
                {/*<MenuItemAdd/>*/}
                <form onSubmit={(event) => {
                    event.preventDefault()

                    console.log(slug)
                    console.log(title)
                    addCategory(slug, title)
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
        </div>

    )
}