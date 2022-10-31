import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <a href='#home'></a>
            <div className={styles.rightContent}>
                <a href='#about'>About Me</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='/evan-martin-resume.pdf' target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>


        </div>
    )
}