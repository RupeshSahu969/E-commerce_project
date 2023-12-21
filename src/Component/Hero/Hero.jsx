import React from 'react'
import "./hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow_icon.png"

const Hero = () => {

    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">

            </div>
        </div>
    )
}

export default Hero
