import './works.scss'
import { worksData } from '../../dummyData'
import { useState } from 'react';

export default function Works() {
    const handleSlide = (direction) => {
        direction === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : worksData.length - 1)
            : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
    }
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {worksData.map((item) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/img/arrow.png" className="arrow left" onClick={() => { handleSlide('left') }}></img>
            <img src="assets/img/arrow.png" className="arrow right" onClick={() => { handleSlide('right') }}></img>
        </div>
    )
}
