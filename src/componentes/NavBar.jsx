import styles from "./NavBar.module.css"

export default function NavBar(){
    return(
        <div className={styles.back}>
            <div className={styles.navbar}>
                <p>SOBRE MI</p>
                <p>PROYECTOS</p>
                <p>CONTACTO</p>
            </div>
        </div>
    )
}