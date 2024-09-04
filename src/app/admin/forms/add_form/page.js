'use client'
import * as React from 'react';
import styles from "@/app/admin/sets/sets.module.css"
import Button from '@mui/material/Button';
import {Fab,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {getFiltersCategories} from "@/app/api/fetchFilters";
import {useRouter} from "next/navigation";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import FullScreenDialog from "@/app/admin/sets/add_set/components/FullScreenDialog";
import CheckedProducts from "@/app/admin/sets/add_set/components/CheckedProducts";
import {addSets} from "@/app/api/fetchSets";
import FiltersAccordion from "@/app/admin/forms/components/FiltersAccordion";

export default function AddForm() {
    const [AllTagsList, setAllTagsList] = useState([])
    const [title, setTitle] = React.useState('');
    const [imgLink, setImgLink] = React.useState('');
    const [slug, setSlug] = useState('')
    const [selectedProduction, setSelectedProduction] = useState([])
    const [openModalSelectProducts, setOpenModalSelectProducts] = useState(false)

    const handleOpenModalSelectProducts = () => {
        setOpenModalSelectProducts(true);
    };
    const postSet = () => {
        const document = {
            slug: slug,
            title: title,
            imageLink: imgLink,
            products: selectedProduction
        }
        addSets(document).then(res => {
            setTitle('')
            setImgLink('')
            setSlug('')
            setSelectedProduction([])
        })
    };

    useEffect(() => {
        console.log(AllTagsList)
    }, [AllTagsList]);

    useEffect(() => {
        getFiltersCategories().then((tags) => {
            setAllTagsList(tags)
        })
    }, []);

    useEffect(() => {

    }, [selectedProduction]);

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
                <FiltersAccordion/>

                {/*<Grid container spacing={2}>*/}
                {/*    <Grid item xs={4} md={4}>*/}
                {/*        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>*/}
                {/*            <Typography variant="h6" component="div">*/}
                {/*                Состав набора:*/}
                {/*            </Typography>*/}
                {/*            <Fab size="small" sx={{ mr: 1 }} color="primary" aria-label="add" onClick={handleOpenModalSelectProducts}>*/}
                {/*                <AddIcon/>*/}
                {/*            </Fab>*/}
                {/*        </div>*/}
                {/*        <CheckedProducts setSelectedProduction={setSelectedProduction} selectedProduction={selectedProduction}/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                <Button variant="outlined" onClick={postSet}>
                    Добавить форму
                </Button>
                <Button variant="outlined" onClick={() => router.back()}>
                    Назад
                </Button>
            </Box>

            {openModalSelectProducts? <FullScreenDialog selectedProduction={selectedProduction}
                                                        setSelectedProduction={setSelectedProduction}
                                                        setOpenModalSelectProducts={setOpenModalSelectProducts}/> : <></>}
        </React.Fragment>
    );
}