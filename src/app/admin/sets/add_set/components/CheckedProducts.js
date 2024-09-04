import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import {Avatar, Fab, ListItemAvatar} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import {useEffect, useState} from "react";


export default function CheckedProducts({selectedProduction, setSelectedProduction}) {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    let arr = []
    const deleteProd = (index) => {
        arr = [...selectedProduction]
        arr.splice(index, 1);
        setSelectedProduction(arr)
    }

    useEffect(() => {
    }, [arr]);
    return (
        <List dense={dense}>
            {selectedProduction.length !== 0 ?
                selectedProduction.map((prduction) =>
                    <ListItem key={selectedProduction.indexOf(prduction)}
                              secondaryAction={
                                  <IconButton edge="end" aria-label="delete" onClick={()=>{
                                      let index = selectedProduction.indexOf(prduction)
                                      deleteProd(index)
                                  }}>
                                      <DeleteIcon  fontSize="large"/>
                                  </IconButton>
                              }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{background: 'none'}}>
                                <img src={prduction.imageLink} alt={prduction.title} style={{objectFit: 'cover', maxWidth: '40px', maxHeight: '40px', height: 'auto', width: 'auto'}}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={prduction.title}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                ) : <div>Пусто...</div>}
        </List>
    );
}