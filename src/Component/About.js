import React from 'react';
import style from "../css/About.module.css";

const About = () => {
    return (
        <div className={style.outer}>
            <div className={style.heading}>
                <div><h2>You Become what you Believe</h2></div>
            </div>
            <div className={style.left}>
                <div className={style.Aboutme}>
                    <h1>About Me</h1>
                </div>
            </div><br/>
            <div className={style.para1}>
                    <p>Hello, I am a UI/UX Designer and Frontend Developer from Nagpur Maharashtra India.
I have done my Graduation in Mechanical Engineering  from pune university.
I did my Intermediate Education from Pune Board Maharashtra. 
I like Computer and i am also passionate about the programming. i am knowledgeable in a wide variety of Computer languages as well as the Principle and Technique of Website Construction and Maintenance.</p>
            </div><br/>
            <div className={style.middle}>
                    <a href="https://github.com/Abhaysatpute88">Github</a>
                    <a href="https://in.linkedin.com/in/abhaysatpute-8888abc?trk=people-guest_people_search-card">LinkedIn</a>
            </div>
            <div className={style.right}>
                <div className={style.skills}>
                    <h1>Front-end Skills</h1>
                </div>
            </div>
            <div className={style.list}><br/>
                    <ul>
                        <li>React.js</li><br/>
                        <li>HTML</li><br/>
                        <li>CSS</li><br/>
                        <li>Javascript</li><br/>
                        <li>Python</li><br/>
                     </ul>
                </div>
            
        </div>
    )
}

export default About
