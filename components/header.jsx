import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.leftContent}>
                <p>Home</p>
            </div>
            <div className={styles.rightContent}>
                <p>About Me</p>
                <p>Portfolio</p>
                <p>Contact</p>
                <p>Download Resume</p>
            </div>
            
            
        </div>
    )
}