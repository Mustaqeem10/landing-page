import { LazyLoadImage } from 'react-lazy-load-image-component';
import './produce.css'

function Produce() {
    let elementVariable = [];
    for (let i = 0; i < 6; i++){
        elementVariable.push(<LazyLoadImage key={i} src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" alt='products'/>) 
    }
    return (
        <section className='produce-container'>
            <h2>We Take Pride In Our Produce</h2>
            <div className='produce-image'>
                {elementVariable}
            </div>
        </section>
    )
}

export default Produce