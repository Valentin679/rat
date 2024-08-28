// import styles from "@/app/admin/components/modules/Materials/materials.module.css";
import styles from "@/app/admin/admin.module.css";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Materials from "@/app/admin/components/modules/Materials/Materials";
import CategoryMaterials from "@/app/admin/components/modules/Materials/CategoryMaterials";

export default function MaterialsContainer({materialsCategories, materials}) {

    return (

        <Accordion slotProps={{ heading: { component: 'h3' } }}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel-materials"
            >
                Работа с сырьем
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.materialsContainer}>
                    <Materials materialsCategories={materialsCategories} materials={materials}/>
                    <CategoryMaterials materialsCategories={materialsCategories}/>
                </div>
            </AccordionDetails>
        </Accordion>

    )
}