import Image from 'next/image'
import keyConceptsImage from '../../public/images/key-concepts.png';
import styles from '../styles/header.module.css'

function Header() {
    return (<>
        <header className={styles.header}>
            <div>
                <Image src={keyConceptsImage} alt="Medal badge with a star" width={400}/>
            </div>
            <h1 className={styles.header_h1}>Key React Concepts</h1>
            <p className={styles.header_p}>Selected key React concepts you should know about</p>
        </header>
    </>)
}

export default Header;