'use client'
import React, {useEffect, useState} from 'react'
import styles from "@/app/admin/admin.module.css";
import HideMenu from "@/app/admin/components/HideMenu";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {usePathname} from "next/navigation";



export default function Header() {
    const pathname = usePathname()
// console.log(menu)
    const [openMenu, setOpenMenu] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [pending, setPending] = useState(true);
    const [menu, setMenu] = useState([]);
    const [docTitle, setDocTitle] = useState()

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    async function getMenu() {
        const response = await fetch("https://ratapi.vercel.app/api/settings", {
            method: "GET",
            headers: {"Accept": "application/json"}
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            let menuList = await response.json();
            // console.log(menuList)
            setPending(false)
            return menuList
        }
    }
    const getTitle = () => {
        let title = document.title
        setDocTitle(title)
    }

    useEffect(() => {
        getMenu().then((menu) => {
            setMenu(menu)
            console.log(menu)
        })
    }, []);
    useEffect(() => {
        getTitle()
    }, [pathname]);
    return (
        <Box sx={{flexGrow: 1}} >
            {/*<FormGroup>*/}
            {/*    <FormControlLabel*/}
            {/*        control={*/}
            {/*            <Switch*/}
            {/*                checked={auth}*/}
            {/*                onChange={handleChange}*/}
            {/*                aria-label="login switch"*/}
            {/*            />*/}
            {/*        }*/}
            {/*        label={auth ? 'Logout' : 'Login'}*/}
            {/*    />*/}
            {/*</FormGroup>*/}
            <AppBar position="static" sx={{bgcolor: '#447bbb'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => {
                            // openMenu ? setOpenMenu(false) : setOpenMenu(true)
                            setOpenMenu(true)
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Админ-панель / { docTitle }
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div className='hideMenu'>
                <HideMenu menu={menu} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            </div>
        </Box>
    );

    // <div className={styles.description}>
    //     {/*<div className='menuItemList'>*/}
    //     {/*    {menu.map(e => <MenuItem key={e.title} title={e.title} id={e._id}/>)}*/}
        //     {/*</div>*/}

        // </div>

}