import * as React from 'react';
import {useEffect, useState} from "react";
import {GetMaterialsCategories} from "@/app/api/fetchMaterialsCategories";
import Box from "@mui/material/Box";
import {FormControl, InputAdornment, InputLabel, TextField} from "@mui/material";
import Select from "react-select";
import MenuItem from "@mui/material/MenuItem";
import SelectCategories from "@/app/admin/components/SelectCategories";
import {GetMaterials} from "@/app/api/fetchMaterials";
import Button from "@mui/material/Button";

export default function Materials() {
    const [materialsCategories, setMaterialsCategories] = useState([])
    const [materials, setMaterials] = useState([])
    const [filterMaterials, setFilterMaterials] = useState([])
    const [nowMaterial, setNowMaterial] = useState()
    const [nowMaterialSelect, setNowMaterialSelect] = useState()
    const [materialCategory, setMaterialCategory] = useState('')
    const [weight, setWeight] = useState('')
    const [selectedMaterials, setSelectedMaterials] = useState([])

    const addMaterial = () => {
        // console.log(nowMaterial)
        const res = {
            _id: nowMaterial[0]._id,
            title: nowMaterial[0].title,
            price: nowMaterial[0].price,
            weight
        }
        setSelectedMaterials(res)
        console.log(selectedMaterials)
    }

    const handleChangeMaterialCategory = (value) => {
        setMaterialCategory(value);
        setNowMaterial(null)
        setNowMaterialSelect(null)
    };
    const handleChangeMaterial = (value) => {
        console.log(value)
        setNowMaterialSelect(value)
        let mat = materials.filter((material) => material.title === value.label )
        console.log(mat)
        setNowMaterial(mat)
        console.log(nowMaterial)
    };

    useEffect(() => {
        GetMaterials().then((materials => {
            setMaterials(materials)
            // console.log(materials)
        }))

        GetMaterialsCategories().then((materialsCategories) => {
            let options = []
            materialsCategories.map(category => options.push({value: category.slug, label: category.title}))
            // console.log(options)
            setMaterialsCategories(options)
            // console.log(materialsCategories)
        })
    }, []);

    useEffect(() => {

        // console.log(materials)
        const arr = materials.filter((material) => material.category === materialCategory.value)
        console.log(arr)
        const options = []
        arr.map(material => options.push({value: material.category, label: material.title}))
        setFilterMaterials(options)
    }, [materialCategory]);

    // useEffect(() => {
    //     getFiltersCategories().then((tags) => {
    //         setAllTagsList(tags)
    //         // setPending(false)
    //     })
    // }, []);
    if(materialsCategories.length !== 0){
    return (
        <>
            <h4>Сырье</h4>
            {!selectedMaterials ? <></> : <div>{selectedMaterials.title}</div>}
            <Box sx={{minWidth: 120, display: "flex", flexDirection: "row", gap: '10px'}} >
                <FormControl disabled>
                    {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
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
                <FormControl disabled={true}>
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
                <FormControl disabled={true}>
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
                                   console.log(weight)
                               }}
                    />
                </FormControl>
                <Button variant="outlined" onClick={addMaterial}>
                    Добавить набор
                </Button>
            </Box>
        </>
    );
    }else {<p>asd</p>}

}