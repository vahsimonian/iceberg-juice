import "./home.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import win1 from "../assets/competition/1.png";
import win2 from "../assets/competition/2.png";
import win3 from "../assets/competition/3.png";
import win4 from "../assets/competition/4.png";
import win5 from "../assets/competition/5.png";
import win6 from "../assets/competition/6.png";
import win7 from "../assets/competition/7.png";
import win8 from "../assets/competition/8.png";
import win9 from "../assets/competition/9.png";

function Home() {
  return (
    <div id="home">
      <div className="special-offers-container">
        <div className="special-offer">
          <h2 className="special-offer-h2">Refreshing Summer Bonanza </h2>
          <p className="special-offer-p">
            As the mercury rises, cool off with our 'Summer Splash' collection –
            a vibrant assortment of tropical flavors at a 20% discount. From the
            zesty 'Citrus Surge' to the exotic 'Dragon Watermelon Burst', let
            these flavors be your summer escapade!
          </p>
        </div>
        <div className="special-offer">
          <hr id="hr" />
          <h2 className="special-offer-h2">First-Time Buyer Special </h2>
          <p className="special-offer-p">
            New to Iceberg Kampot? We welcome you with open arms and a special
            15% discount on your first purchase. Use code "ICEBERGNEW" at
            checkout and embark on your journey of taste and vitality.
          </p>
        </div>
        <div className="special-offer">
          <hr id="hr" />
          <h2 className="special-offer-h2">Loyalty Rewarded </h2>
          <p className="special-offer-p">
            Our repeat customers are the pillars of our success. Enjoy a 'Buy 5,
            Get 1 Free' offer on all our juice ranges. It's our way of saying
            thank you for your continued patronage.
          </p>
        </div>
        <div className="special-offer">
          <hr id="hr" />
          <h2 className="special-offer-h2">Family Pack Fiesta </h2>
          <p className="special-offer-p">
            Embrace healthy living for the whole family with our Family Pack
            Fiesta. Purchase any family pack and receive a complimentary set of
            eco-friendly straws and a recipe booklet for creating your own juice
            blends at home.
          </p>
        </div>
        <div className="special-offer">
          <hr id="hr" />
          <h2 className="special-offer-h2">Referral Rewards </h2>
          <p className="special-offer-p">
            Spread the joy of health! Refer a friend and both of you can enjoy a
            10% discount on your next purchase. It's a win-win for health and
            friendship.
          </p>
        </div>
      </div>
      <div className="free-div"></div>
      <div className="desc-container">
        <h1 className="home-title">Iceberg Kampot</h1>
        <hr className="hr" />
        <p className="juice-desc">
          Iceberg Kampot," nestled in Cambodia's renowned Kampot region, is
          celebrated for its refreshing, top-quality juices. Rapidly expanding
          beyond Cambodia to Vietnam, Thailand, and Laos, Iceberg Kampot stands
          as a symbol of dedication to excellence and customer satisfaction.
          Embracing modernity, we offer online payment options, bringing the
          essence of Cambodia's flavors to you, wherever you are. Discover the
          Iceberg Kampot experience – a taste of Cambodia, delivered to your
          doorstep.
        </p>
      </div>
      <div></div>
      <div className="image-container">
        <h1 className="competition-gallery-heading">Competition Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={win1} alt="win1" width={100} />
          </SwiperSlide>
          <br /> <br />
          <SwiperSlide>
            <img src={win2} alt="win2" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win3} alt="win3" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win4} alt="win4" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win5} alt="win5" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win6} alt="win6" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win7} alt="win7" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win8} alt="win8" width={100} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={win9} alt="win9" width={50} />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="slider-arrow">
              <div name="arrow-back-outline"></div>
            </div>
            <div className="swiper-button-next slider-arrow">
              <div name="arrow-forward-outline">swipe ape</div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
