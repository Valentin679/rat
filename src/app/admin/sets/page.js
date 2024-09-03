import styles from "@/app/admin/sets/sets.module.css";
import AddSet from "@/app/admin/sets/AddSet";
import React from "react";
import SetItem from "@/app/admin/sets/components/SetItem";
import Link from "next/link";

export default function Page() {

    return (
        <>
            <div className={styles.containerBar}>
                <div>Filter</div>
                {/*<AddSet/>*/}

                <Link href={'sets/add_set'}>Добавить набор</Link>
            </div>
            <div className={styles.container}>
                <SetItem/>
                <SetItem/>
                <SetItem/>
            </div>

        </>
    )
}