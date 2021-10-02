import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState } from 'react';

export default function Portfolio() {

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        },
    ];

    const [selected, setSelected] = useState("featured");

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
                )
                }
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2020/07/11-Inventory.jpg" alt="" />
                    <h3>Inventory </h3>
                </div>
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2020/07/2-FR.jpg" alt="" />
                    <h3>Facial Recognition </h3>
                </div>
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2019/02/VMS.jpg" alt="" />
                    <h3>Visitor Management </h3>
                </div>
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2019/03/rsz_1token-website-banner-03-300x200.jpg" alt="" />
                    <h3>Token Management </h3>
                </div>
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2019/02/Corp-Parking.jpg" alt="" />
                    <h3>Parking Management </h3>
                </div>
                <div className="item">
                    <img src="https://www.versionx.in/wp-content/uploads/2020/07/12-Mailroom.jpg" alt="" />
                    <h3>Mailroom Management </h3>
                </div>
            </div>
        </div>
    )
}
