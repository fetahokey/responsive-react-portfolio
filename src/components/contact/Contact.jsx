import './contact.scss'
import {useState} from 'react';

export default function Contact() {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/img/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit" >Sent</button>
                    {message && <span>Thanks dude !</span>}
                </form>
            </div>
        </div>
    )
}
