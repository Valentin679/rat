import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import AddMaterials from "@/app/admin/components/modules/Materials/AddMaterials";
import {deleteCategory, GetMaterials, putCategory} from "@/app/api/fetchMaterials";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin6Line} from "react-icons/ri";
import {RiDeleteBin2Line} from "react-icons/ri";

export default function Materials({materials}) {
    const [materialsList, setMaterialsList] = useState([])
    const [oldSlug, setOldSlug] = useState()
    const [slug, setSlug] = useState()
    const [title, setTitle] = useState()
    const [changedMaterialsId, setChangedMaterialsId] = useState(null)

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
        setChangedMaterialsId(null)
        putCategory(slug, oldSlug, title).then(r => {
            GetMaterials().then((res) => {
                setMaterialsList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    const onDelete = (slug) => {
        deleteCategory(slug).then(r => {
            GetMaterials().then((res) => {
                setMaterialsList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    useEffect(() => {
        setMaterialsList(materials)
    }, [materials]);
    return (

        <div className={styles.container}>
            <h3>Сырье</h3>
            <div className={styles.itemList}>
                {materialsList.map(e => changedMaterialsId !== e.title ?
                    <div key={e.slug} className={styles.item}>
                        <div >{e.title} / <span>{e.categoryTitle}</span>
                        </div>
                        <div className={styles.itemEditDel}>
                            <div className={styles.itemEdit}>
                                <FaEdit onClick={() => {
                                    setChangedMaterialsId(e.title)
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
                        <input id="title" placeholder="Название" onChange={onChange} type="text" name="title" value={title}/>
                        <input id="slug" placeholder="Артикул" onChange={onChange} type="text" name="slug" value={slug}/>
                        <input id="slug" placeholder="Цена за грамм" onChange={onChange} type="number" name="price" value={slug}/>
                        <input id="slug" placeholder="Категория" onChange={onChange} type="text" name="category" value={slug}/>
                        <input id="slug" placeholder="Минимум наличия" onChange={onChange} type="text" name="min" value={slug}/>
                    </div>
                        <button onClick={onSave}>Обновить</button>
                    </>
                )}
            </div>
            <div className={styles.addItemList}>
                <AddMaterials materialsList={materialsList}/>
            </div>
        </div>

    )
}