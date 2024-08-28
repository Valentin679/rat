import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import React, {useEffect, useRef, useState} from "react";
import AddMaterials from "@/app/admin/components/modules/Materials/AddMaterials";
import {deleteMaterials, GetMaterials, putMaterials} from "@/app/api/fetchMaterials";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import {MdCancelPresentation} from "react-icons/md";
import SelectCategories from "@/app/admin/components/SelectCategories";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function FormsContainer() {
    // const [materialsList, setMaterialsList] = useState([])
    //
    //
    //
    //
    // useEffect(() => {
    //     setMaterialsList(materials)
    // }, [materials]);

    return (

        <Accordion slotProps={{ heading: { component: 'h3' } }}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel-forms"
            >
                Формы
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.formsContainer}>
                </div>
            </AccordionDetails>
        </Accordion>

    )
}