
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import slide1 from '../../assets/home/01.jpg';
// import slide2 from '../../assets/home/02.jpg';
// import slide3 from '../../assets/home/03.jpg';
// import slide4 from '../../assets/home/102727.jpg';
// import slide5 from '../../assets/home/tree-736885_1280.jpg';
// import slide6 from '../../assets/home/01.webp';

const Banner = () => {

    const slide1 = "https://i.ibb.co/dM3sLpy/banner-4.png";
    const slide2 = "https://i.ibb.co/d436Qv4/banner-5.png";
    const slide3 = "https://i.ibb.co/2yjdXkn/banner-3.png";
    const slide4 = "https://i.ibb.co/5TgDjDr/banner-1.png";
    const slide5 = "https://i.ibb.co/0MswRqQ/banner-2.png";
    const slide6 = "https://i.ibb.co/5TgDjDr/banner-1.png";
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <div className='h-[700px]  text-purple-700'>
                <SwiperSlide>
                <div className='relative w-full text-white'>
                    <img className='w-full' src={slide6} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                        <div className='space-y-7  md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide2} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                    <div className='space-y-7  md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide3} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                    <div className='space-y-7 md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide1} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                    <div className='space-y-7 text-white md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full'>
                    <img className='w-full' src={slide5} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                    <div className='space-y-7  md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full text-white'>
                    <img className='w-full' src={slide4} alt="banner" />
                    <div className='absolute flex items-center -bottom-5 top-5 left-0'>
                    <div className='space-y-7  md:w-3/5 pl-20'>
                            <h2 className='text-4xl'>Yoga and Meditation</h2>
                            <p className=''>“Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,”</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </div>
            
        </Swiper>
    );
};

export default Banner;