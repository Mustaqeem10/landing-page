import { LazyLoadImage } from 'react-lazy-load-image-component'
import './cards.css'

function Box(props) {
    const {image, title, desc} = props

    return (
        <div className='box-content'>
            <LazyLoadImage src = {image} alt = "week-plan"/>
            <h4>{title}</h4>
            <ul>
                {desc.map((description, index) => {
                    return <li key={index}>{description}</li>
                })}
            </ul>
        </div>
    )
}

export default Box