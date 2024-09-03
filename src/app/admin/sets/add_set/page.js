'use client'
import * as React from 'react';
import styles from "@/app/admin/sets/sets.module.css"
import Button from '@mui/material/Button';
import {
    Avatar, Fab,
    ListItemAvatar,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {getFiltersCategories} from "@/app/api/fetchFilters";
import {useRouter} from "next/navigation";
import DataGrid from "@/app/admin/sets/add_set/DataGridSets";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Paper from "@mui/material/Paper";


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


export default function AddSet() {
    const [AllTagsList, setAllTagsList] = useState([])
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [imgLink, setImgLink] = React.useState('');
    const [slug, setSlug] = useState('')
    const [tags, setTags] = useState()
    const [productions, setProductions] = useState()


    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        console.log(AllTagsList)
    }, [AllTagsList]);

    useEffect(() => {
        getFiltersCategories().then((tags) => {
            setAllTagsList(tags)
        })
    }, []);
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
                    label="Название набора"
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
                    label="Ссылка на фото набора"
                    value={imgLink}
                    placeholder='https://...'
                    onChange={(event) => {
                        setImgLink(event.target.value);
                    }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4}>
                        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>

                            <Typography variant="h6" component="div">
                                Состав набора:
                            </Typography>
                            <Fab size="small" sx={{ mr: 1 }} color="primary" aria-label="add">
                                <AddIcon/>

                            </Fab>
                        </div>

                        <List dense={dense}>
                            {generate(
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon fontSize="large"/>
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Grid>
                </Grid>
                {/*<div className={styles.transferContainer} style={{width: '100%', display: 'flex'}}>*/}
                {/*<div>*/}
                {/*    <CheckboxesTags filterCategories={AllTagsList} options={top100Films} value={tags} setValueCheckboxes={setTags} placeholder={'Выберите метки'}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <CheckboxesTags options={top100Films} setValueCheckboxes={setProductions} placeholder={'Выберите состав набора'}/>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<DataGrid сategories={AllTagsList}/>*/}


                <Button variant="outlined" onClick={handleClickOpen}>
                    Добавить набор
                </Button>
                <Button variant="outlined" onClick={() => router.back()}>
                    Назад
                </Button>
            </Box>
        </React.Fragment>
    );
}

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    {title: 'The Good, the Bad and the Ugly', year: 1966},
    {title: 'Fight Club', year: 1999},
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    {title: 'Forrest Gump', year: 1994},
    {title: 'Inception', year: 2010},
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    {title: "One Flew Over the Cuckoo's Nest", year: 1975},
    {title: 'Goodfellas', year: 1990},
    {title: 'The Matrix', year: 1999},
    {title: 'Seven Samurai', year: 1954},
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    {title: 'City of God', year: 2002},
    {title: 'Se7en', year: 1995},
    {title: 'The Silence of the Lambs', year: 1991},
    {title: "It's a Wonderful Life", year: 1946},
    {title: 'Life Is Beautiful', year: 1997},
    {title: 'The Usual Suspects', year: 1995},
    {title: 'Léon: The Professional', year: 1994},
    {title: 'Spirited Away', year: 2001},
    {title: 'Saving Private Ryan', year: 1998},
    {title: 'Once Upon a Time in the West', year: 1968},
    {title: 'American History X', year: 1998},
    {title: 'Interstellar', year: 2014},
];