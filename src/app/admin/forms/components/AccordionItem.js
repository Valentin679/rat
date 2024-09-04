import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect} from "react";
import {CircularProgress} from "@mui/material";

export default function AccordionItem({tag, handleChange, expanded, nowTags, pending}) {

    return (
            <Accordion expanded={expanded === tag.slug} onChange={handleChange(tag.slug)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {tag.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Несколько вариантов</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {!pending? nowTags ? nowTags.map(tag=><Typography>{tag.title}</Typography>) : <p>Нет</p>:<CircularProgress />}
                    {/*<Typography>*/}
                    {/*    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.*/}
                    {/*    Aliquam eget maximus est, id dignissim quam.*/}
                    {/*</Typography>*/}
                </AccordionDetails>
            </Accordion>

    );
}