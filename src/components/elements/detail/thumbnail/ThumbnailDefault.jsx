import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ThumbnailDefault = ({ vertical = true }) => {
    const images = [
        { url: 'https://beta.apinouthemes.com/uploads/1df60e151e7940059d2949c313bccb84.jpg' },
        { url: 'https://beta.apinouthemes.com/uploads/c80df855abc949908f9dfb9bf5b96de9.jpg' },
        { url: 'https://beta.apinouthemes.com/uploads/c80df855abc949908f9dfb9bf5b96de9.jpg' },
        // Add more static images as needed
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const primarySwiperRef = useRef(null);
    const secondarySwiperRef = useRef(null);

    const onPrimarySlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    useEffect(() => {
        if (primarySwiperRef.current && primarySwiperRef.current.swiper) {
            primarySwiperRef.current.swiper.slideTo(activeIndex);
        }
        if (secondarySwiperRef.current && secondarySwiperRef.current.swiper) {
            secondarySwiperRef.current.swiper.slideTo(activeIndex);
        }
    }, [activeIndex]);

    function handlePrimaryPrev() {
        if (primarySwiperRef.current && primarySwiperRef.current.swiper) {
            primarySwiperRef.current.swiper.slidePrev();
        }
    }

    function handlePrimaryNext() {
        if (primarySwiperRef.current && primarySwiperRef.current.swiper) {
            primarySwiperRef.current.swiper.slideNext();
        }
    }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? 'true' : 'false'}>
            <figure>
                <div className="ps-wrapper carousel--productImages">
                    {images.length > 1 && (
                        <div className="swiper--custom-avigation">
                            <button onClick={handlePrimaryPrev}>
                                <i className="icon-chevron-left" />
                            </button>
                            <button onClick={handlePrimaryNext}>
                                <i className="icon-chevron-right" />
                            </button>
                        </div>
                    )}
                    <Swiper
                        ref={primarySwiperRef}
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.activeIndex)
                        }>
                        {images.map((item, index) => (
                            <SwiperSlide className="item" key={index}>
                                <a href={'/'} className="carousel-image-link">
                                    <LightGallery
                                        speed={500}
                                        plugins={[lgThumbnail, lgZoom]}>
                                        <img src={item.url} alt={`Image ${index + 1}`} />
                                    </LightGallery>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </figure>
            <div className="product__thumbnailImages">
                <Swiper
                    className="swiper-carousel--variants"
                    spaceBetween={12}
                    slidesPerView={4}
                    onSlideChange={onPrimarySlideChange}
                    slideToClickedSlide={true}
                    ref={secondarySwiperRef}
                    breakpoints={{
                        320: {
                            slidesPerView: 5,
                        },

                        1280: {
                            slidesPerView: 4,
                            direction: vertical ? 'vertical' : 'horizontal',
                        },
                    }}>
                    {images.map((item, index) => (
                        <SwiperSlide className="item" key={index}>
                            <img
                                src={item.url}
                                alt={`Thumbnail ${index + 1}`}
                                className={`swiper-slide-image ${index === activeIndex ? 'active' : ''
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ThumbnailDefault;
