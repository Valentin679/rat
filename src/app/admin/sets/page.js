import styles from "@/app/admin/sets/sets.module.css";
import AddSet from "@/app/admin/sets/AddSet";
import React from "react";
import SetItem from "@/app/admin/sets/components/SetItem";

export default function Page() {

    return (
        <>
            <div className={styles.containerBar}>
                <div>Filter</div>
                <AddSet/>
            </div>
            <div className={styles.container}>
                <SetItem/>
                <SetItem/>
                <SetItem/>
            </div>

        </>
    )
}