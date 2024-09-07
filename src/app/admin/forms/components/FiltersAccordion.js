import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useCallback, useEffect, useState} from "react";
import {getFilterOneCategory, getFiltersCategories} from "@/app/api/fetchFilters";
import AccordionItem from "@/app/admin/forms/components/AccordionItem";

export default function FiltersAccordion({selectedProduction, setSelectedProduction}) {
    const [expanded, setExpanded] = React.useState(false);
    const [AllTagsList, setAllTagsList] = useState([])
    const [nowTags, setNowTags] = useState([])
    const [pending, setPending] = useState(false)
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(checked)
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setPending(true)
    };
    useEffect(() => {
        getFiltersCategories().then((tags) => {
            setAllTagsList(tags)
        })
    }, []);
    useEffect(() => {
        getFilterOneCategory(expanded)
            .then(res=>{
                setNowTags(res)
                console.log(res)
                setPending(false)
            })
    }, [expanded]);

    return (
        <div>
            {AllTagsList.map(tag=><AccordionItem key={tag.slug}
                                                 checked={checked}
                                                 handleToggle={handleToggle}
                                                 selectedProduction={selectedProduction} setSelectedProduction={setSelectedProduction}
                                                 tag={tag} nowTags={nowTags} expanded={expanded} pending={pending} handleChange={handleChange}/>)}
        </div>
    );
}