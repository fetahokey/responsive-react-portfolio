import './portfolioList.scss'

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li className={active && "active"} onClick={() => {
            setSelected(id)
        }}>
            {title}
        </li>
    )
}
