import React from 'react';
import "../css/Home.css";
import me from "../Images/profile.png"

const Home = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My Name is</h2>
                    <h1 className='i-name'>Abhay Satpute</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Mechanical Engineer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    web developer who is comfortable working with React,HTML,CSS and javascript to deliver exceptional customer experience, looking for an opportunity to work with a company, possessing a good team spirit, and keen to find challenging and suitable positions with an ambitious company that oﬀers career development and advancement opportunities.
                    </div>

                </div>

            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={me} alt="" className="i-img" />
            </div>
        
        </div>
    )
}

export default Home
