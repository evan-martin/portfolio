import styles from './banner.module.scss'

export default function Banner() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Evan Martin</h1>
                <p className={styles.subtitle}>Full Stack Developer</p>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profile} >
                </div>
            </div>

        </div>
    )
}