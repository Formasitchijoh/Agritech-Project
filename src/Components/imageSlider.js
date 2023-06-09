
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css"
import React from 'react'
import '../index.css'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import plantain from '../resources/plantain.jpg'
import yam from '../resources/yams.jpg'

const ProductCart = (props) => {
    return(
        <div className='cartContainer'>
                <img src={props.food} alt='garri' />
            
            <div className='textContainer'>
            <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'2em'}}>Calabar Garri</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.2em'}}>2,000 XAF</span>
                
            </div>

        </div>
    )
}
const ImageSlider = () =>{

    const settings = {
        infinite:true,
        dots:true,
        slidesToShow:2,
        slidesToScroll:1,
        lazyLoad:true,
        autoplay:true,
        autoplaySpeed:2000,
    };

    return (
        <>
    
        <div >
        <h1>My Products</h1>
            <Slider {...settings}>
                {/* <ProductCart className="item" food={garri}/>
                <ProductCart className="item" food={egusi}/>
                <ProductCart className="item" food={plantain}/>
                <ProductCart className="item" food={yam}/> */}

            </Slider>
        </div>
        </>
    )
}

export default ImageSlider;