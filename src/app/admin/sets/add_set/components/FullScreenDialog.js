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
import Slide from '@mui/material/Slide';
import ListProducts from "@/app/admin/sets/add_set/components/ListProducts";
import {useEffect, useState} from "react";
import {getFiltersCategories} from "@/app/api/fetchFilters";
import {getForms} from "@/app/api/fetchForms";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({setOpenModalSelectProducts, setSelectedProduction, selectedProduction}) {
    const [open, setOpen] = React.useState(true);
    const [forms, setForms] = useState([])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpenModalSelectProducts(false);
    };
    useEffect(() => {
        getForms().then((forms) => {
            setForms(forms)
        })
    }, []);
    useEffect(() => {

    }, [selectedProduction]);
    return (
        <React.Fragment>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Open full-screen dialog*/}
            {/*</Button>*/}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
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
                            Выберите продукцию для набора
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Добавить выбранное
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListProducts forms={forms} selectedProduction={selectedProduction} setSelectedProduction={setSelectedProduction}/>
                    <Divider />
                </List>
            </Dialog>
        </React.Fragment>
    );
}