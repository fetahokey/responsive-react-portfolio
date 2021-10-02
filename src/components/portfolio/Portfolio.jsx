import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from '../../dummyData';

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
            id: "portfolio",
            title: "Portfolio"
        },
    ];

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "portfolio":
                setData(contentPortfolio)
                break;

            default:
                setData(featuredPortfolio)
                break;
        }
    }, [selected]);
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
                {
                    data.map((item) => (
                        <div className="item">
                            <img src={item.img} />
                            <h3>{item.title} </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
