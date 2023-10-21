import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BestCell = () => {
  const [bestCell, setBestCell] = useState([]);

  useEffect(() => {
    const bestCell = async () => {
      const res = await fetch(
        "https://brand-shop-serve-side-63i22v5jh-shamshul-haque.vercel.app/product"
      );
      const data = await res.json();
      setBestCell(data);
    };
    bestCell();
  }, []);

  const selectedItems = bestCell.filter((item) => item.rating > 3);

  return (
    <div className="px-5 md:px-10 lg:px-20 py-10 text-center dark:text-white">
      <h1 className="text-3xl font-bold uppercase">Our Best Cell</h1>
      <div className="mt-5 hidden md:block">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop
        >
          {selectedItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <img
                  src={item.product_img}
                  alt={item.product_name}
                  className="w-full h-40 object-fill"
                />
                <p className="uppercase">{item.product_name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-5 block md:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop
        >
          {selectedItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <img
                  src={item.product_img}
                  alt={item.product_name}
                  className="w-full h-40 object-fill"
                />
                <p className="uppercase">{item.product_name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestCell;
