import Concept from "./Concept"
import styles from "../styles/concepts.module.css"

function Concepts(props) {
    return (<>
        <ul className={styles.concepts}>
            {props.concepts.map(con => {
                return (
                    <Concept key={con.title} title={con.title} image={con.image} description={con.description}/>
                )
            })}
        </ul>
    </>)
}

export default Concepts;