import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Advertisement = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const getSlider = async () => {
      const res = await fetch("/advertisement.json");
      const data = await res.json();
      setSliders(data);
    };
    getSlider();
  }, []);

  return (
    <div className="px-5 md:px-10 lg:px-20 pt-10">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div>
              <img src={slider.image} alt="slider" className="w-full h-80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Advertisement;
