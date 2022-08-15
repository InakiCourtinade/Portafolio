import imagen from "../imagenes/fotoCarnet.jpg"
import styles from "./SobreMi.module.css"

export default function SobreMi(){
    return(
        <div className={styles.back}>
            <div className={styles.display}>
                <div>
                <img className={styles.imagen} src={imagen} alt="foto mia" />
                </div>
             <div className={styles.texto}>
                <h1 className={styles.title}>Sobre mi</h1>
                <p className={styles.description}>Mi nombre es Iñaki Courtinade y soy desarrollador React/ Front-end. 
                Inicie en el mundo de la programacion a inicios de 2021, realizando el bootcamp Full-stack de Soy Henry.
                Actualmente estoy estudiando la licenciatura en sistemas y perfeccionandome en React  </p>
            </div>
            </div>
            <div className={styles.listas}>
            <div className={styles.skills}>
                <h4>Mis skills</h4>
                <ul>
                    <li>Javascript</li>
                    <li>React js/React Native</li>
                    <li>HTML/CSS</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>Node js</li>
                    <li>Mongo DB</li>
                    <li>Typescript</li>
                    <li>Python</li>

                </ul>
            </div>
            <div className={styles.experiencias}>
                <h4>Experiencias</h4>
                <ul>
                    <li>Service Now developer (Price Waterhouse and Coopers)</li>
                    <li>FullStack teaching assistant (Bootcamp Soy Henry)</li>
                </ul>
                <h4>Hobbies</h4>
                <ul>
                    <li>Deportes</li>
                    <li>Videojuegos</li>
                    <li>Programar</li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}