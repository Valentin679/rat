import * as React from 'react';
import {useEffect, useState} from "react";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import {getFilterOneCategory} from "@/app/api/fetchFilters";
import Paper from "@mui/material/Paper";
import {CircularProgress} from "@mui/material";


export default function TagsItem({tag, setSelectedTags, selectedTags}) {

    const [nowTags, setNowTags] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = selectedTags.indexOf(value);
        const newChecked = [...selectedTags];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedTags(newChecked);
    };


    useEffect(() => {
        getFilterOneCategory(tag.slug)
            .then(res => {
                setNowTags(res)
                // console.log(res)
            })
    }, []);

    return (
        <div style={{
            width: 'fit-content',
            padding: '10px'
        }}>
            <Paper sx={{
                width: 'fit-content',
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }} elevation={3}>
                <h4>{tag.title}</h4>
                {
                    nowTags.map(nowTag => {

                    const labelId = `checkbox-list-label-${nowTag.slug}`;
                    if (nowTag.length !==0) {
                    return (
                        <ListItem
                            key={nowTag.slug}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(nowTag)} dense>

                                <Checkbox
                                    edge="start"
                                    checked={selectedTags.indexOf(nowTag) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                                <ListItemText id={labelId} primary={`${nowTag.title}`}/>
                            </ListItemButton>
                        </ListItem>
                    );} else {return <CircularProgress />}
                })
                }
                {nowTags.length === 0 ?
                        <h5 style={{marginTop: '10px'}}> Меток нет...</h5>:<></>}
            {/*    {checked.length !==0 ? <Button style={{marginTop: "10px"}} variant="outlined" onClick={() => {*/}
            {/*        let arr = selectedTags.concat(checked)*/}
            {/*            const uniqueArr = [...new Set(arr)];*/}
            {/*            setSelectedTags(uniqueArr)*/}
            {/*    }}>*/}
            {/*    Выбрать*/}
            {/*</Button> :*/}
            {/*        <h5 style={{marginTop: '10px'}}> {nowTags.length === 0 ? 'Тегов нет...' : 'Выберите метки..'} </h5>*/}
            {/*    }*/}

            </Paper>
        </div>

    );
}