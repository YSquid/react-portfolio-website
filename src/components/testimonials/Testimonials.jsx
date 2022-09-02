import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import {Pagination, A11y, Navigation} from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi nemo officia, quisquam debitis reprehenderit.",
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Alan Grey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam mollitia accusamus nobis natus velit nulla culpa iusto quaerat quibusdam!",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Laura Spears",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },

  {
    id: 4,
    avatar: AVATAR4,
    name: "Olongo Deepa",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat velit magni ad itaque rerum minima sint qui libero quo! Placeat ipsa voluptatem exercitationem expedita! Explicabo doloremque harum, libero quasi ex temporibus rem animi! Magnam recusandae commodi praesentium. Error ipsum, illum atque quasi a dolor nemo explicabo modi commodi? Laudantium, laboriosam! Consectetur laborum maxime voluptatem magni et reiciendis illum tenetur rem?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Testimonials</h5>

      <Swiper className="container testimonials__container" 
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
