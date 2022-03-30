import styles from './about.module.scss'

export default function About() {
    return (

        <div className={styles.container}>
            <div className={styles.title} >
                <h2>Experience, Skills, and Education</h2>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>Proficient in Javascript and associated technologies such as React, Next, Angular, Redux, Node, Express </li>
                    <li>Proficient in SQl and NOSQL database technologies and consuming REST and SOAP API's </li>
                    <li>Proficient in OOP principals and Java </li>
                    <li>Experienced with Git, Python, XML, C#, Linux, Bash, CSS, HTML  </li>
                    <li>BS in Computer Science from University of Maryland December 2021 </li>
                </ul>
            </div>
        </div>
    )
}