import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ['Designer', 'Developer', 'Tester']
        })
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/img/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Assif okey .Jr</h1>
                    <h3>Software  <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/img/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
