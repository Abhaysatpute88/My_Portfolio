import React, { useState } from 'react';
import style from  "../css/Contact.module.css";
import phone from "../Images/telephone.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formref = useRef()
    const [done, setdone]=useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_kof6ual', 
            'template_hp0w046',
             formref.current,
            'user_yYwqTg5mCK18kwHsElJaz'
        )
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className={style.outer}>
            <div className={style.inner}>
                <div className={style.main_div}>
                    <div className={style.img}>
                        <img src={phone} alt="" />
                    </div><br/>
                    <form ref={formref} onSubmit={handleSubmit}>
                        <div className={style.textinput}>
                           <input type="text" placeholder='Enter your Name' name='user_name' required/><br/><br/>
                        </div>
                        <div className={style.emailinput}>  
                           <input type="email" placeholder='Enter your Email' name='user_email' required/><br/><br/>
                        </div>
                        <div className={style.textareainput}>
                           <textarea placeholder='Message' name='message' cols="30" rows="10"></textarea><br/><br/>
                        </div>
                        <div className={style.buttoninput}>   
                           <button type='submit'>Submit</button>
                        </div><br/>
                        <div className={style.thankyou}>
                            {done && "Thank you..."}
                        </div>   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
