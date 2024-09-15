'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {deleteForm, getForms} from "@/app/api/fetchForms";
import ClearIcon from '@mui/icons-material/Clear';

export default function FormItem({form, setForms}) {

    async function onDelete(id) {
        deleteForm(id).then(
             await getForms().then((res) => {
                setForms(res)
                // console.log('новые категории' + JSON.stringify(catList))
            })
        )
    }


    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', minWidth: 280, padding: 1,  background: '#f7f8fa', maxWidth: 280 }}>
            <div style={{
                display: "flex",
            }}>
            <CardMedia
                component="img"
                sx={{ width: 100, height: 100, maxWidth: 151, maxHeight: 151, objectFit: 'contain' }}
                image={form.imageLink}
                alt={form.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column'  }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {form.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {form.slug}
                    </Typography>
                </CardContent>
            </Box>
            </div>
            <Box>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: '10px'
                }}>

                    <IconButton
                        aria-label="delete" size="small"
                        onClick={() => {
                            onDelete(form._id).then(r => {})
                        }}
                    >
                        <ClearIcon sx={{ color: 'red' }}/>
                    </IconButton>
                    <div style={{
                        fontSize: '12px'
                    }}>{form.price} руб
                    </div>
                    <div style={{
                        fontSize: '12px'
                    }}>{form.weight} гр.
                    </div>
                </div>
            </Box>

        </Card>
    );
}