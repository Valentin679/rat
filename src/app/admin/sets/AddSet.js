'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import noImage from "../../../../public/no-image.jpg";
import {
    Avatar,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemAvatar,
    ListSubheader,
    OutlinedInput,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Select from "react-select";



export default function AddSet() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [imgLink, setImgLink] = React.useState('');
    const [slug, setSlug] = useState('')
    const [personName, setPersonName] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Добавить набор
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Заполните поля
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Добавить
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box
                    component="form"
                    sx={{'& > :not(style)': {m: 1, width: '25ch'}, marginTop: '20px'}}
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
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag"/>}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>

                </Box>
            </Dialog>
        </React.Fragment>
);
}