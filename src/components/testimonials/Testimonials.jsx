import './testimonials.scss'
import {testimonialsData} from '../../dummyData.js'
/*
id
name
title
img
icon
desc
 */
export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
                <div className="container">
            {testimonialsData.map((item)=>(
                <div className={item.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={"assets/img/right-arrow.png"} className="left"  />
                        <img className="user" src={item.img} alt="" />
                        <img className="right" src={item.icon} />                        
                    </div>
                    <div className="center">
                        <p>
                            {item.desc}
                        </p>
                    </div>
                    <div className="bottom">
                        <h3>
                        {item.name}
                        </h3>
                        <h4>
                        {item.title}
                        </h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
