import styles from "@/app/admin/materials/materials.module.css";
import Materials from "@/app/admin/materials/components/Materials";
import CategoryMaterials from "@/app/admin/materials/components/CategoryMaterials";

export default function Page() {
        return (
                <div className={styles.materialsContainer}>
                    <Materials/>
                    <CategoryMaterials/>
                </div>
        )
}