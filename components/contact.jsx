import styles from './contact.module.scss'


export default function Contact() {

    return (

        <div className={styles.container}>

            <h1>Contact</h1>
            <div className={styles.content}>
                <a href='mailto:mail@evan-martin.dev' target='_blank' rel='noopener noreferrer'>mail@evan-martin.dev</a>
                <a href='https://www.linkedin.com/in/evan-martin-2a4ba5225/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a href='https://github.com/evan-martin' target='_blank' rel='noopener noreferrer'>GitHub </a>
            </div>
        </div>

    )
}

