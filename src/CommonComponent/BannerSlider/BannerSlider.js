import React from 'react'
import './BannerSlider'
import Slider from 'react-slick';
import HeroBtn from '../Hero-btn/HeroBtn';
import Nextarrow from '../SliderArrow/Nextarrow';
import Prevarrow from '../SliderArrow/Prevarrow';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow:<Prevarrow/>
};
const BannerSlider = ({ BannerSliderData }) => {
    return (<>
        <Slider {...settings}>
            {BannerSliderData.map((el) => {
                return (
                    <div key={el.id}>
                        <div className='banner-slider-wrapper'>
                            <div className="banner-slider-inner">
                                <div className="banner-slider-content">
                                    <div className="banner-slider-content-inner">
                                        <h4 className='banner-slider-conent-f-title'>{el.FirstTitle}</h4>
                                        <h3 className='banner-slider-conent-s-title'>{el.SecondTitle}</h3>
                                        <HeroBtn HeroBtnText={el.ButtonText} HeroPath={el.Path} />
                                    </div>
                                </div>
                                <div className="devider"></div>
                                <div className="banner-slider-image">
                                    <img src={el.imageUrl} alt="banner" />
                                </div>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                )

            })
            }
        </Slider>
    </>

    )
}

export default BannerSlider