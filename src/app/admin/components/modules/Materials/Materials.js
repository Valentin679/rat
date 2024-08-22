import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import AddMaterials from "@/app/admin/components/modules/Materials/AddMaterials";
import {deleteCategory, GetCategories, putCategory} from "@/app/api/fetchCategories";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function Materials({categories}) {
    const [catList, setCatList] = useState([])
    const [oldSlug, setOldSlug] = useState()
    const [slug, setSlug] = useState()
    const [title, setTitle] = useState()
    const [changedStateId, setChangedStateId] = useState(null)

    const onChange = (e) => {
        const {id, value} = e.currentTarget;
        const setStateAction = {
            slug: setSlug,
            title: setTitle
        }[id];
        setStateAction && setStateAction(value);
        console.log(title)
    };

    const onSave = () => {
        // console.log(oldSlug)
        setChangedStateId(null)
        putCategory(slug, oldSlug, title).then(r => {
            GetCategories().then((res) => {
                setCatList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    const onDelete = (slug) => {
        deleteCategory(slug).then(r => {
            GetCategories().then((res) => {
                setCatList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    useEffect(() => {
        setCatList(categories)
    }, [categories]);
    return (

        <div className={styles.container}>
            <h2>Сырье</h2>
            <div className={styles.itemList}>
                {catList.map(e => changedStateId !== e.title ?
                    <div key={e.slug} className={styles.item}>
                        <div onDoubleClick={() => {
                            setChangedStateId(e.title)
                            setOldSlug(e.slug)
                            setTitle(e.title)
                            setSlug(e.slug)
                        }} >{e.title}
                        </div>
                        <div className={styles.itemDelete}>
                            {/*<FaEdit*/}
                            {/*    size={25}*/}
                            {/*/>*/}
                            <RiDeleteBin2Line onClick={()=>{onDelete(e.slug)}}
                                size={22}
                            />
                        </div>
                    </div>
                    :
                    <div key={e.slug}>
                        <input id="title" onChange={onChange} type="text" name="title" value={title}/>
                        <input id="slug" onChange={onChange} type="text" name="slug" value={slug}/>
                        <button onClick={onSave}>SAVE</button>
                    </div>
                )}
            </div>
            <div className={styles.addItemList}>
                <AddMaterials setCatList={setCatList}/>
            </div>
        </div>

    )
}