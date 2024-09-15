'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import {
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Tags from "@/app/admin/forms/add_form/components/tags/Tags";
import Materials from "@/app/admin/forms/add_form/components/materials/Materials";
import {addForm} from "@/app/api/fetchForms";

export default function AddForm() {
    const [title, setTitle] = React.useState('');
    const [imgLink, setImgLink] = React.useState('');
    const [slug, setSlug] = useState('')
    const [selectedMaterials, setSelectedMaterials] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [price, setPrice] = useState(0)
    const [weight, setWeight] = useState(0)

    function countPrice() {
        let price = 0
        let weightForm = 0
        selectedMaterials.map(material => {
            let matPriceGramm = material.price / 1000
            let weight = Number(material.weight)
            weightForm = weightForm + weight
            price = Math.round(matPriceGramm * weight + price)
            // console.log(price)
            setWeight(weightForm)
            setPrice(price)
        })
    }

    useEffect(() => {
        countPrice()
    }, [selectedMaterials]);

    const formSet = () => {
        const document = {
            slug: slug,
            title: title,
            imageLink: imgLink,
            price: price,
            weight: weight,
            materials: selectedMaterials,
            tags: selectedTags
        }
        // console.log(document)
        addForm(document).then(res => {
            setTitle('')
            setImgLink('')
            setSlug('')
            setPrice(0)
            setSelectedMaterials([])
            setSelectedTags([])
        })
    };


    const router = useRouter();

    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1,},
                    marginTop: '20px'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-controlled"
                    label="Название формы"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Артикул (Латиницей)"
                    value={slug}
                    onChange={(event) => {
                        setSlug(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Ссылка на фото"
                    value={imgLink}
                    placeholder='https://...'
                    onChange={(event) => {
                        setImgLink(event.target.value);
                    }}
                />
                <Materials selectedMaterials={selectedMaterials}
                           setSelectedMaterials={setSelectedMaterials}
                />
                <Tags selectedTags={selectedTags}
                      setSelectedTags={setSelectedTags}
                />

                <Button variant="outlined" onClick={()=>{
                    formSet()
                }}>
                    Добавить форму
                </Button>
                <Button variant="outlined" onClick={() => router.back()}>
                    Назад
                </Button>
            </Box>
        </React.Fragment>
    );
}