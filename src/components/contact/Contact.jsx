import './contact.scss'

export default function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault();
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
                </form>
            </div>
        </div>
    )
}
