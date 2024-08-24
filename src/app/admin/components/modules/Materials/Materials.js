import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import AddMaterials from "@/app/admin/components/modules/Materials/AddMaterials";
import {deleteMaterials, GetMaterials, putMaterials} from "@/app/api/fetchMaterials";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import {MdCancelPresentation} from "react-icons/md";

export default function Materials({materials}) {
    const [materialsList, setMaterialsList] = useState([])
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [changedMaterialsId, setChangedMaterialsId] = useState(null)

    const onChange = (e) => {
        const {id, value} = e.currentTarget;
        const setStateAction = {
            id: setId,
            title: setTitle
        }[id];
        setStateAction && setStateAction(value);
        console.log(title)
    };

    const onSave = () => {
        // console.log(oldSlug)
        setChangedMaterialsId(null)
        putMaterials(id, title).then(r => {
            GetMaterials().then((res) => {
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
    return (

        <div className={styles.container}>
            <h3>Сырье</h3>
            <div className={styles.itemList}>
                {materialsList.map(e => changedMaterialsId !== e.title ?
                    <div key={e._id} id={e._id} className={styles.item}>
                        <div>{e.title} / <span>{e.categoryTitle}</span>
                        </div>
                        <div className={styles.itemEditDel}>
                            <div className={styles.itemEdit}>
                                <FaEdit onClick={() => {
                                    setChangedMaterialsId(e.title)
                                    setTitle(e.title)
                                    setId(e._id)
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
                            <input id="slug" placeholder="Цена за грамм" onChange={onChange} type="number"
                                   name="price"/>
                            <input id="slug" placeholder="Категория" onChange={onChange} type="text" name="category"/>
                            <input id="slug" placeholder="Минимум наличия" onChange={onChange} type="text" name="min"/>
                        </div>
                        <div className={styles.editInputBoxButtons}>
                            <button onClick={onSave}>Обновить</button>
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
                <AddMaterials materialsList={materialsList}/>
            </div>
        </div>

    )
}