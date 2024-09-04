'use client'
import styles from "@/app/admin/sets/sets.module.css";
import AddSet from "@/app/admin/sets/AddSet";
import React, {useEffect, useState} from "react";
import SetItem from "@/app/admin/sets/components/SetItem";
import Link from "next/link";
import {getSets} from "@/app/api/fetchSets";
import {CircularProgress} from "@mui/material";

export default function Page() {
    const [sets, setSets] = useState([])

    useEffect(() => {
        getSets().then(res=>{
            setSets(res)
            // console.log(sets)
        })
    }, []);
    if (sets.length === 0) {<CircularProgress />} else {
    return (
        <>
            <div className={styles.containerBar}>
                <div>Filter</div>
                {/*<AddSet/>*/}

                <Link href={'sets/add_set'}>Добавить набор</Link>
            </div>
            <div className={styles.container}>
                {sets.map(set => <SetItem key={set.slug} set={set}/>)}
                {/*<SetItem/>*/}

            </div>

        </>
    )}
}