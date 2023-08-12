import Image from 'next/image'
import styles from '../styles/concept.module.css'

function Concept(props) {
    return (
        <li className={styles.concept} key={props.title}>
            <Image src={props.image} alt={props.title} className={styles.concept_img}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    )
}

export default Concept;