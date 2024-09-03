'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from "next/link";

export default function HideMenu({menu, setOpenMenu, openMenu}) {

    const toggleDrawer = (newOpen) => () => {
        setOpenMenu(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link href='/admin'>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Консоль" />
                    </ListItemButton>
                </Link>
                {menu.map((item, index) => (
                    <ListItem key={item.slug} disablePadding>
                        <Link href={"/admin/" + item.slug}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem key={text} disablePadding>*/}
            {/*            <ListItemButton>*/}
            {/*                <ListItemIcon>*/}
            {/*                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={text} />*/}
            {/*            </ListItemButton>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </Box>
    );

    return (
        <div>
            {/*<Button onClick={toggleDrawer(true)}>Open drawer</Button>*/}
            <Drawer open={openMenu} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}