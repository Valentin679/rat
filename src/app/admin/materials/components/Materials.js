'use client'
import styles from "@/app/admin/materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import AddMaterials from "@/app/admin/materials/components/AddMaterials";
import {deleteMaterials, GetMaterials, putMaterials} from "@/app/api/fetchMaterials";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import {MdCancelPresentation} from "react-icons/md";
import SelectCategories from "@/app/admin/components/SelectCategories";
import {GetMaterialsCategories} from "@/app/api/fetchMaterialsCategories";
import {CircularProgress} from "@mui/material";

export default function Materials({}) {

    const [materials, setMaterials] = useState([])
    const [materialsCategories, setMaterialsCategories] = useState([])
    const [pending, setPending] = useState(true)

    const [materialsList, setMaterialsList] = useState([])
    const [id, setId] = useState(null)
    const [title, setTitle] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [changedMaterialsId, setChangedMaterialsId] = useState(null)

    const onChange = (e) => {
        const {id, value} = e.currentTarget;
        const setStateAction = {
            id: setId,
            title: setTitle,
            price: setPrice
        }[id];
        setStateAction && setStateAction(value);
        console.log(title)
    };

    const onSave = () => {
        console.log(changedMaterialsId, title, category, price)

        putMaterials(changedMaterialsId, title, category, price).then(r => {
            GetMaterials().then((res) => {
                setChangedMaterialsId(null)
                setMaterialsList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    const onDelete = (id) => {
        deleteMaterials(id).then(r => {
            GetMaterials().then((res) => {
                setMaterialsList(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        })
    }

    useEffect(() => {
        setMaterialsList(materials)
    }, [materials]);

    useEffect(() => {
        GetMaterials().then((materials) => {
            setMaterials(materials)
        })
        GetMaterialsCategories().then((materialsCategories) => {
            setMaterialsCategories(materialsCategories)
        })
    }, []);
    useEffect(() => {
        if (materialsCategories.length === 0 && !materials) {
            setPending(true)
        } else {
            setPending(false)
        }
    }, [materialsCategories, materials]);
    if (pending === false) {
        return (

            <div className={styles.container}>
                <h3>Сырье</h3>
                <div className={styles.itemList}>
                    {materialsList.map(e => changedMaterialsId !== e.title ?
                        <div key={e._id} id={e._id} className={styles.item}>
                            <div className={styles.itemInfo}>
                                <div className={styles.itemTitle}>{e.title} / <span>{e.categoryTitle}</span></div>
                                <div>{!e.price ? '0' : e.price} руб/кг</div>
                            </div>
                            <div className={styles.itemEditDel}>

                                <div className={styles.itemEdit}>
                                    <FaEdit onClick={() => {
                                        setChangedMaterialsId(e.title)
                                        setTitle(e.title)
                                        setPrice(e.price)
                                        setId(e._id)
                                        setCategory({value: e.category, label: e.categoryTitle})
                                        console.log(changedMaterialsId)
                                    }}
                                            size={23}
                                    />
                                </div>
                                <div className={styles.itemDelete}>
                                    <RiDeleteBin2Line onClick={() => {
                                        onDelete(e._id)
                                    }}
                                                      size={23}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <div key={e._id} className={styles.editInputBox}>
                            <div className={styles.addInputBox}>
                                <input id="title" placeholder="Название" onChange={onChange} type="text" name="title"
                                       value={title}/>
                                {/*<input id="slug" placeholder="Артикул" onChange={onChange} type="text" name="slug" />*/}
                                <input id="price" placeholder="Цена за грамм" onChange={onChange} type="number"
                                       name="price" value={price}/>
                                <SelectCategories setCategory={setCategory}
                                                  initialCategory={{value: e.category, label: e.categoryTitle}}
                                                  categories={materialsCategories}/>
                                {/*<input id="slug" placeholder="Категория" onChange={onChange} type="text" name="category"/>*/}
                                <input id="slug" placeholder="Минимум наличия" onChange={onChange} type="text"
                                       name="min"/>
                            </div>
                            <div className={styles.editInputBoxButtons}>
                                <button className={styles.button} onClick={onSave}>Обновить</button>
                                <button className={styles.cancelButton} onClick={() => {
                                    setChangedMaterialsId(null)
                                }}>
                                    <MdCancelPresentation


                                        size={23}/>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.addItemList}>
                    <AddMaterials materialsCategories={materialsCategories} setMaterialsList={setMaterialsList}/>
                </div>
            </div>

        )
    } else {
        return <div className={styles.loading}><CircularProgress /></div>
    }
}