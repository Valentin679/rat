'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {useEffect, useState} from "react";
import {getSets} from "@/app/api/fetchSets";
import {CircularProgress} from "@mui/material";
import {getForms} from "@/app/api/fetchForms";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function FormItem({form}) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', padding: 1, m: 1, background: '#f7f8fa', width: 'fit-content' }}>
            <CardMedia
                component="img"
                sx={{ width: "auto", height: 'auto', maxWidth: 151, maxHeight: 151, objectFit: 'contain' }}
                image={form.imageLink}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {form.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>

            </Box>
            <Box>
                <div>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        // aria-controls={open ? 'long-menu' : undefined}
                        // aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={() => {
                        }}
                    >
                        <MoreHorizIcon fontSize="small"/>
                    </IconButton></div>
            </Box>

        </Card>
    );
}