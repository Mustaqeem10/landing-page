import './about.css'
import image from '../../Rectangle 6.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
 return (
    <section className='about-container'>
        <div>
        <LazyLoadImage src = {image} alt = "Farmer" />
        </div>
        <div>
            <h2>Meet Your Farmer</h2>
            <p>
            Juan Gonzalez of Los Abuelos Farley Farm, has over five years of farming and selling experience 
            in Wisconsin, and has been involved in aspects of producing food in Mexico throughout his entire 
            life. Juan is a founding member of the Spring Rose Growers Cooperative and one of the first farmers
            at the Farley Center Farm Incubator. At the incubator, we do not use any chemical sprays or 
            fertilizers and focus on sustainable growing methods. We hope you will support us as we begin 
            another season marketing through Community Supported Agriculture (CSA).
            </p>
        </div>
    </section>
 )
}

export default About