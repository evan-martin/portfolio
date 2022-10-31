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
                    <li>Proficient in SQl and NOSQL database technologies and consuming REST and SOAP API&apos;s </li>
                    <li>Proficient in OOP principals and Java </li>
                    <li>Experienced with Git, Python, XML, C#, Linux, Bash, CSS, HTML </li>
                    <li>Experienced with AWS services such as Amplify, API Gateway, Lambda, and DynamoDB </li>
                    <li>BS in Computer Science from University of Maryland December 2021 </li>
                </ul>
                <h2>Experience</h2>
                <p>Software Engineering Intern, Street Entrepreneurs, Washington, DC (06/2021- 06/2022)</p>
                <p>Worked with a small team to successfully develop proof of concept for an application that would allow expansion into the multi vendor marketplace sector. Explored Low code options using Shopify and Wordpress with multi vendor marketplace modules. Developed a full scale application using React with Redux for state management and using the Stripe API to handle product management and secure payment.</p>
                <button className={styles.button}>
                    <a href='/evan-martin-resume.pdf' target="_blank" rel="noopener noreferrer">Download Resume</a>
                </button>
            </div>

        </div>
    )
}