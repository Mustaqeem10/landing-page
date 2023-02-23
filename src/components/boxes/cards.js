import React from 'react';
import './cards.css'
import cardsData from "./card-data"

const Box = React.lazy(() => import ('./box'))

function Cards() {
    return (
        <section className="boxes-container">
            <h2>What's In Our Boxes?</h2>
            <p>
                A share from the Los Jalapeños Collaborative CSA will include a weekly box from June—October 
                (20weeks) of all of your favorite seasonal vegetables and some specialty items. There will 
                be recipes in the weekly newsletter with ideas for how to use everything in your boxes.
            </p>
            <div className="card-container">
            {cardsData.map((cardData) => {
                return (
                    <Box
                    key = {cardData.title}  
                    image = {cardData.img} 
                    title = {cardData.title} 
                    desc = {cardData.desc}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default Cards