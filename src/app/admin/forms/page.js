'use client'
import styles from "@/app/admin/forms/forms.module.css";
import React, {useEffect, useState} from "react";
import FormItem from "@/app/admin/forms/components/FormItem";
import {getForms} from "@/app/api/fetchForms";
import {CircularProgress} from "@mui/material";
import Link from "next/link";

export default function Page() {
    const [forms, setForms] = useState([])

    useEffect(() => {
        getForms().then(res=>{
            setForms(res)
            console.log(forms)
        })
    }, []);
    if (forms.length === 0) {<CircularProgress />} else {
    return (
        <>
            <div className={styles.containerBar}>
                <div>Filter</div>
                {/*<AddSet/>*/}

                <Link href={'forms/add_form'}>Добавить набор</Link>
            </div>
            {forms.map(form => <FormItem form={form}/>)}
            {/*<FormItem/>*/}
        </>
    )}
}