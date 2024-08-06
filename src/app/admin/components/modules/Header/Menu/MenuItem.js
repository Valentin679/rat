"use client"
import styles from "@/app/admin/admin.module.css";

export default function MenuItem({title}) {
    return (
        <div className={styles.menuItem}>
            <div>{title}</div><div>Ред.</div>
        </div>
    );
}