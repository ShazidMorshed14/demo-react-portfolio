import React, { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import Model from './Model';
import { ThemeContext } from '../../Context';

const Contact = () => {

    const formRef=useRef();
    const[send,setSend]=useState(false);

      const theme = useContext(ThemeContext);
      const darkMode = theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_g7i2n1t',
             'template_julj3lp',
              formRef.current,
               'user_pjKaRrSuz5rmQdJ3YYjMr')
      .then((result) => {
          console.log(result.text);
          setSend(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project!</h1>
                    <div className="c-info">
                         
                          <div className="c-info-item">
                             <img src="https://img.icons8.com/color/60/000000/phone.png" className="c-icon" alt="no_img"/>
                              +8801786990237
                           </div>

                           <div className="c-info-item">
                             <img src="https://img.icons8.com/color/60/000000/gmail.png" className="c-icon" alt="no_img"/>
                              shazidmorshed14@gmail.com
                           </div>

                           <div className="c-info-item">
                             <img src="https://img.icons8.com/color/60/000000/address.png" className="c-icon" alt="no_img"/>
                              7/j/2, Mirbug, Notun Rasta, Rampura, Dhaka
                           </div>
                        


                    </div>
                    
                    
                </div>
                <div className="c-right">
                    <p className="c-desc">
                       <b> What's your idea?</b> I'm always ready to work on different ideas! Let's build your imagination into reality!
                    </p>
                    {send && <Model/>}
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "lightgray"}} type="text" placeholder="Name" name="user_name"  />
                        <input style={{backgroundColor: darkMode && "lightgray"}} type="text" placeholder="Subject" name="user_subject"  />
                        <input style={{backgroundColor: darkMode && "lightgray"}} type="text" placeholder="Email" name="user_email"  />
                        <textarea style={{backgroundColor: darkMode && "lightgray"}} name="message" placeholder="Message"  rows="5"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;