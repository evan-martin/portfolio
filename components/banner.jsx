import styles from './banner.module.scss'

export default function Banner() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Evan Martin</h1>
                <p className={styles.subtitle}>Software Engineer</p>
                <p className={styles.location}> &#9906; Seattle, WA</p>
                <div className={styles.contact}>
                    <a href='mailto:evanm689@gmail.com' target='_blank' rel='noopener noreferrer'><img src="/mail.png" alt="Mail Icon" width={50} /></a>
                    <a href='https://www.linkedin.com/in/evan-martin-2a4ba5225/' target='_blank' rel='noopener noreferrer'><img src="/linkedin.png" alt="Linkedin Icon" width={50} /></a>
                    <a href='https://github.com/evan-martin' target='_blank' rel='noopener noreferrer'><img src="/github.png" alt="Github Icon" width={50} /> </a>
                </div>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profile} >
                </div>
            </div>

        </div>
    )
}