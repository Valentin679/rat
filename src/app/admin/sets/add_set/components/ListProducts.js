import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import {useEffect} from "react";

export default function ListProducts({forms, setSelectedProduction, selectedProduction}) {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = selectedProduction.indexOf(value);
        const newChecked = [...selectedProduction];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedProduction(newChecked);
    };

    useEffect(() => {
        // setSelectedProduction(selectedProduction)
        // console.log("change")
    }, [selectedProduction]);

    return (
        <List dense sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {forms.map((form) => {
                const labelId = `checkbox-list-secondary-label-${form.slug}`;
                // let res
                // selectedProduction.length === 0 ? res === -1 :
                // res = selectedProduction.map(e => form.slug === e.slug)
                // console.log(selectedProduction)

                return (
                    <ListItem
                        key={form.index}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(form)}
                                // checked={res}
                                checked={selectedProduction.indexOf(form) !== -1}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${form.slug + 1}`}
                                    src={form.imageLink}
                                    sx={{
                                        objectFit: 'cover',
                                        maxWidth: '40px',
                                        maxHeight: '40px',
                                        height: 'auto',
                                        width: 'auto'
                                    }}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={form.title}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}