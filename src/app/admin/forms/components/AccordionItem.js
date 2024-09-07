import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";


export default function AccordionItem({tag, handleChange, expanded, nowTags, checked, pending, handleToggle, setSelectedProduction, selectedProduction}) {




    return (
            <Accordion  expanded={expanded === tag.slug} onChange={handleChange(tag.slug)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {tag.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{!checked ? 'Ничего не выбрано...' : checked.map(e=>e.title)}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {!pending? nowTags.length !==0 ?
                        nowTags.map(nowTag=> {
                            // <Typography>{tag.title}</Typography>

                        const labelId = `checkbox-list-label-${nowTag.slug}`;

                        return (
                        <ListItem
                        key={nowTag.slug}
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            {/*<CommentIcon />*/}
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={handleToggle(nowTag)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(nowTag) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${nowTag.title}`} />
                    </ListItemButton>
                </ListItem>
                );
                        }
                        )
                        : <p>Нет</p>
                        : <CircularProgress />}
                    {/*<Typography>*/}
                    {/*    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.*/}
                    {/*    Aliquam eget maximus est, id dignissim quam.*/}
                    {/*</Typography>*/}
                </AccordionDetails>
            </Accordion>

    );
}