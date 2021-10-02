import { Mail, Person } from '@mui/icons-material'
import './topbar.scss'

export default function Topbar({ menuOpen,
    setMenuOpen }) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="warpper">
                <div className="left">
                    <a href="#works" className="logo">miearda.</a>
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
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
