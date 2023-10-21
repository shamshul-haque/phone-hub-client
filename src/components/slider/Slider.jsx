import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const getSlider = async () => {
      const res = await fetch("/slider.json");
      const data = await res.json();
      setSliders(data);
    };
    getSlider();
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div
              style={{
                backgroundImage: `url(${slider.image})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="h-[60vh]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
