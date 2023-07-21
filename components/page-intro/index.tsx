import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/devops.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Digital Transformation Reimagnined.</h2> 
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/new-slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Imagination into action.</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
};

export default PageIntro