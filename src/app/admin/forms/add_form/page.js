'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import {
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Tags from "@/app/admin/forms/add_form/components/tags/Tags";
import Materials from "@/app/admin/forms/add_form/components/materials/Materials";

export default function AddForm() {
    const [title, setTitle] = React.useState('');
    const [imgLink, setImgLink] = React.useState('');
    const [slug, setSlug] = useState('')

    // const postSet = () => {
    //     const document = {
    //         slug: slug,
    //         title: title,
    //         imageLink: imgLink,
    //         products: selectedProduction
    //     }
    //     addSets(document).then(res => {
    //         setTitle('')
    //         setImgLink('')
    //         setSlug('')
    //         setSelectedProduction([])
    //     })
    // };


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
                <Materials/>
                <Tags/>

                <Button variant="outlined" onClick={()=>{}}>
                    Добавить форму
                </Button>
                <Button variant="outlined" onClick={() => router.back()}>
                    Назад
                </Button>
            </Box>
        </React.Fragment>
    );
}