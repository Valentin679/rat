import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import {
    deleteMaterialsCategory,
    GetMaterialsCategories,
    putMaterialsCategory
} from "@/app/api/fetchMaterialsCategories";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import AddCategoryMaterials from "@/app/admin/components/modules/Materials/AddCategoryMaterials";

export default function CategoryMaterials({materialsCategories}) {
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
        putMaterialsCategory(slug, oldSlug, title).then(r => {
            GetMaterialsCategories().then((res) => {
                setCatList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    const onDelete = (slug) => {
        deleteMaterialsCategory(slug).then(r => {
            GetMaterialsCategories().then((res) => {
                setCatList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    useEffect(() => {
        setCatList(materialsCategories)
    }, [materialsCategories]);
    return (

        <div className={styles.container}>
            <h3>Категории сырья</h3>
            <div className={styles.itemList}>
                {catList.map(e => changedStateId !== e.title ?
                    <div key={e.slug} className={styles.item}>
                        <div >{e.title}
                        </div>
                        <div className={styles.itemEditDel}>
                            <div className={styles.itemEdit}>
                                <FaEdit onClick={() => {
                                    setChangedStateId(e.title)
                                    setOldSlug(e.slug)
                                    setTitle(e.title)
                                    setSlug(e.slug)
                                }}
                                    size={23}
                                />
                            </div>
                            <div className={styles.itemDelete}>
                                <RiDeleteBin2Line onClick={() => {
                                    onDelete(e.slug)
                                }}
                                                  size={23}
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                    <div key={e.slug} className={styles.addInputBox}>
                        <input id="title" onChange={onChange} type="text" name="title" value={title}/>
                        <input id="slug" onChange={onChange} type="text" name="slug" value={slug}/>
                    </div>
                        <button onClick={onSave}>Обновить</button>
                    </>
                )}
            </div>
            <div className={styles.addItemList}>
                <AddCategoryMaterials setCatList={setCatList}/>
            </div>
        </div>

    )
}