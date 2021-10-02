import { Mail, Person } from '@mui/icons-material'
import './topbar.scss'

export default function Topbar() {
    return (
        <div className="topbar" id="intro">
            <div className="warpper">
                <div className="left">
                    <a href="#works" className="logo">aSSif.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+213 6552 4755</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>oulkassif@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
