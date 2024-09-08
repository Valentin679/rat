import * as React from 'react';
import {useEffect, useState} from "react";
import {getFiltersCategories} from "@/app/api/fetchFilters";
import TagsItem from "@/app/admin/forms/add_form/components/tags/TagsItem";
import Grid from "@mui/material/Grid";
import TagsLabel from "@/app/admin/forms/add_form/components/tags/TagsLabel";
import {CircularProgress} from "@mui/material";

export default function Tags() {
    const [allTagsList, setAllTagsList] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [pending, setPending] = useState()

    useEffect(() => {
        if (allTagsList.length === 0)  {
            setPending(true)
        } else {
            setPending(false)
        }
    }, [allTagsList]);
    useEffect(() => {
        getFiltersCategories().then((tags) => {
            setAllTagsList(tags)
            // setPending(false)
        })
    }, []);
    if (pending === true) {
        <div><CircularProgress/></div>
    } else {
        return (
            <>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}><h4>Метки</h4>
                    <div><TagsLabel selectedTags={selectedTags}/></div>
                </div>
                <Grid container spacing={2}>
                    {allTagsList.map(tag => <div key={tag.slug}><TagsItem selectedTags={selectedTags}
                                                                          setSelectedTags={setSelectedTags}
                                                                          tag={tag}/>
                    </div>)}
                </Grid>
            </>
        );
    }
}