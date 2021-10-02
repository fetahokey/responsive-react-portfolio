import './intro.scss'

export default function Intro() {
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
                    <h3>Software  <span>Engineer</span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/img/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
