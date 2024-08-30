import styles from "@/app/admin/components/modules/Sets/sets.module.css";
import noImage from "../../../../../../public/no-image.jpg";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from "next/image";
import AddSet from "@/app/admin/components/modules/Sets/AddSet";
import React from "react";

export default function SetsContainer() {
    // const [materialsList, setMaterialsList] = useState([])
    //
    //
    //
    //
    // useEffect(() => {
    //     setMaterialsList(materials)
    // }, [materials]);

    return (
        <>
            <div className={styles.container}>
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
                            <div>550 руб / 899 руб</div>
                            <div>0.65 кг</div>
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
                            <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                            <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                            <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                            <p><Image width={25} src={noImage} alt=''/>Название формы</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AddSet/>
            </div>
        </>
    )
}