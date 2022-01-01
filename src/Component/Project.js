import React from 'react';
import style from "../css/Project.module.css";
import image1 from "../Images/img1.png";
import image2 from "../Images/img2.png";
import image3 from "../Images/img3.png";
import image4 from "../Images/img4.png";

const Project = () => {
    return (
        <div className={style.slider}>
            <div className={style.heading}>
                <h2>Portfolio Application</h2>
            </div><br/>
            <div className={style.img1}>
                <div><img src={image1} alt="" /></div>
            </div>
            <div className={style.heading}>
                <h2>Todo App</h2>
            </div><br/><br/>
            <div className={style.img2}>
                <div><img src={image2} alt="" /></div>
            </div>
            <div className={style.heading}>
                <h2>Food App</h2>
            </div><br/>
            <div className={style.img3}>
                <div><img src={image3} alt="" /></div>
            </div>
            <div className={style.heading}>
                <h2>Tic Tac Toe Game</h2>
            </div><br/>
            <div className={style.img4}>
                <div><img src={image4} alt="" /></div>
            </div>
            
        </div>
    )
}

export default Project
