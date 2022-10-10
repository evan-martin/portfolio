import styles from './about.module.scss'

export default function About() {
    return (

        <div className={styles.container}>
            <div className={styles.title} >

            </div>
            <div className={styles.content}>
                <h2>About Me</h2>
                <p>Experienced in JavaScript and associated frameworks such as React, Angular, Node, and Express. Personable and reliable professional with excellent communication skills. Ability to work well both collaboratively and independently. Pragmatic problem solver focused on writing clean, quality, reusable code.</p>
                <h2>Skills</h2>
                <ul>
                    <li>Proficient in Javascript and associated technologies such as React, Next, Angular, Redux, Node, Express </li>
                    <li>Proficient in SQl and NOSQL database technologies and consuming REST and SOAP API's </li>
                    <li>Proficient in OOP principals and Java </li>
                    <li>Experienced with Git, Python, XML, C#, Linux, Bash, CSS, HTML </li>
                    <li>BS in Computer Science from University of Maryland December 2021 </li>
                </ul>
                <h2>Experience</h2>
                <p>Developed three proof of concept multi vendor marketplace applications using Shopify, WordPress with the Dokan WooCommerce plugin, and a from scratch application using React with Redux and Stripe API to handle payments.</p>
                <button className={styles.button}>Download Resume</button>
            </div>

        </div>
    )
}