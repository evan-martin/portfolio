import styles from './about.module.scss'

export default function About() {
    return (

        <div className={styles.container}>
            <div className={styles.title} >
                
            </div>
            <div className={styles.content}>
                <h2>About Me</h2>
                <p>I'm baby celiac chartreuse lo-fi, subway tile normcore vice cold-pressed woke selvage godard.
                    +1 asymmetrical williamsburg, thundercats succulents hot chicken wolf green juice woke coloring
                    book four dollar toast beard aesthetic. Pinterest iceland poke glossier, meditation copper mug biodiesel kickstarter leggings.
                    Chicharrones scenester lumbersexual irony blog wolf. Lumbersexual butcher fam blog microdosing pok pok.
                    Everyday carry mixtape thundercats, celiac lumbersexual austin irony.</p>
                <h2>Skills</h2>
                <ul>
                    <li>Proficient in Javascript and associated technologies such as React, Next, Angular, Redux, Node, Express </li>
                    <li>Proficient in SQl and NOSQL database technologies and consuming REST and SOAP API's </li>
                    <li>Proficient in OOP principals and Java </li>
                    <li>Experienced with Git, Python, XML, C#, Linux, Bash, CSS, HTML </li>
                    <li>BS in Computer Science from University of Maryland December 2021 </li>
                </ul>
                <button className={styles.button}>Download Resume</button>
            </div>
            
        </div>
    )
}