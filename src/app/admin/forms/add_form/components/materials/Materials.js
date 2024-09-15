import * as React from 'react';
import {useEffect, useState} from "react";
import {GetMaterialsCategories} from "@/app/api/fetchMaterialsCategories";
import Box from "@mui/material/Box";
import {FormControl, InputAdornment, TextField} from "@mui/material";
import Select from "react-select";
import {GetMaterials} from "@/app/api/fetchMaterials";
import Button from "@mui/material/Button";
import styles from "@/app/admin/forms/forms.module.css";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Materials({setSelectedMaterials, selectedMaterials}) {
    const [materialsCategories, setMaterialsCategories] = useState([])
    const [materials, setMaterials] = useState([])
    const [filterMaterials, setFilterMaterials] = useState([])
    const [nowMaterial, setNowMaterial] = useState()
    const [nowMaterialSelect, setNowMaterialSelect] = useState()
    const [materialCategory, setMaterialCategory] = useState('')
    const [weight, setWeight] = useState('')


    const addMaterial = () => {
        const res = {
            _id: nowMaterial[0]._id,
            title: nowMaterial[0].title,
            price: nowMaterial[0].price,
            weight
        }
        const arr = [...selectedMaterials]

        const isSet = arr.find((element) => element.title === res.title)
        // console.log(isSet)
        if (isSet === undefined) {
            arr.push(res)
            // console.log(arr)
            setSelectedMaterials(arr)
            console.log(selectedMaterials)
        }
    }

    const onDelete = (title) => {
        const items = selectedMaterials.filter(item => item.title !== title);
        setSelectedMaterials(items)
    }

    const handleChangeMaterialCategory = (value) => {
        setMaterialCategory(value);
        setNowMaterial(null)
        setNowMaterialSelect(null)
    };

    const handleChangeMaterial = (value) => {
        setNowMaterialSelect(value)
        let mat = materials.filter((material) => material.title === value.label)
        setNowMaterial(mat)
    };

    useEffect(() => {
        GetMaterials().then((materials => {
            setMaterials(materials)
        }))
        GetMaterialsCategories().then((materialsCategories) => {
            let options = []
            materialsCategories.map(category => options.push({value: category.slug, label: category.title}))
            setMaterialsCategories(options)
        })
    }, []);

    useEffect(() => {
        const arr = materials.filter((material) => material.category === materialCategory.value)
        const options = []
        arr.map(material => options.push({value: material.category, label: material.title}))
        setFilterMaterials(options)
    }, [materialCategory]);

    if (materialsCategories.length !== 0) {
        return (
            <>
                <h4>Сырье</h4>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    width: "fit-content",

                }}>
                    {selectedMaterials.length === 0 ? <></> : selectedMaterials.map(mat => (
                        <div key={mat.title} className={styles.item}>
                            <div className={styles.itemInfo}>
                                <div>{mat.title}</div>
                                <div>{mat.weight} гр.</div>
                            </div>

                                <div className={styles.itemDelete}>
                                    <CloseIcon onClick={() => {
                                        onDelete(mat.title)
                                    }}
                                                      size={23}
                                    />
                                </div>
                        </div>
                    ))}
                </div>
                <Box sx={{minWidth: 120, display: "flex", flexDirection: "row", gap: '10px'}}>
                    <FormControl sx={{padding: '2px'}}>
                        <Select
                            placeholder='Выберите категорию'
                            labelId="select-material-category"
                            id="select-material-category"
                            value={materialCategory}
                            label="Material category"
                            onChange={handleChangeMaterialCategory}
                            options={materialsCategories}
                        >
                        </Select>
                    </FormControl>
                    <FormControl sx={{padding: '2px'}}>
                        <Select sx={{minWidth: 225}}
                                disabled
                                placeholder='Выберите сырье'
                                labelId="select-material"
                                id="select-material"
                                value={nowMaterialSelect}
                                label="Material"
                                onChange={handleChangeMaterial}
                                options={filterMaterials}
                        >
                        </Select>
                    </FormControl>
                    <FormControl>
                        <TextField size={'small'}

                                   slotProps={{
                                       input: {
                                           endAdornment: <InputAdornment position="end">гр.</InputAdornment>,
                                       }
                                   }}
                                   id="outlined-controlled"
                                   label="Вес в граммах"
                                   value={weight}
                                   onChange={(event) => {
                                       setWeight(event.target.value);
                                   }}
                        />
                    </FormControl>
                    <Button variant="outlined" onClick={addMaterial}>
                        <AddCircleOutlineIcon/>
                    </Button>
                </Box>
            </>
        )
            ;
    } else {
        <p>asd</p>
    }

}