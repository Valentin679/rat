
import styles from "@/app/admin/admin.module.css";
import MenuItem from "@/app/admin/components/modules/Header/Menu/MenuItem";

export default function Header({menu}) {
    return (

        <div className={styles.description}>
            <div className='menuItemList'>
                {menu.map(e => <MenuItem key={e.title} title={e.title}/>)}
            </div>
            <div className='addMenuItem'>
                {/*<MenuItemAdd/>*/}
            </div>
        </div>

            )
            }