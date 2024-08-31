import styles from "@/app/admin/sets/sets.module.css";
import Image from "next/image";
import noImage from "../../../../../public/no-image.jpg";
import React from "react";

export default function SetItem() {

    return (
        <div className={styles.item}>
            <div className={styles.itemInfo}>
                <div className={styles.itemInfoMain}>
                    <Image width={70} src={noImage} alt=''/>
                    <div className={styles.itemTitle}>
                        <h3>Название набора</h3>
                        <div className={styles.itemCategory}>Категория набора</div>
                    </div>

                </div>
                <div className={styles.itemPriceWeight}>
                    <div>350 руб / 699 руб</div>
                    <div>0.35 кг</div>
                </div>
            </div>

            <div className={styles.itemComposition}>
                <div className={styles.itemCompositionList}>
                    <h4>В составе:</h4>
                    <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                    <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                    <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                    <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                </div>
                <div className={styles.itemCompositionList}>
                    <h4>Аттрибуты:</h4>
                    <p><Image width={25} src={noImage} alt=''/>Коробка 20х20</p>
                    <p><Image width={25} src={noImage} alt=''/>Наполнитель</p>
                    <p><Image width={25} src={noImage} alt=''/>Лента синяя</p>
                </div>
            </div>
        </div>
    )
}