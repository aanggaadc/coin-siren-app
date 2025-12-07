import { useState } from "react";
import Slider from "react-slick";
import Text from "../atoms/text";
import type { SlideItemLgScreen } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InfiniteSlider({
  items,
}: {
  items: SlideItemLgScreen[];
}) {
  const [isStarted, setIsStarted] = useState(false);

  const settings2 = {
    className: "slider variable-width",
    dots: false,
    autoplay: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 2000,
    cssEase: "linear",

    onInit: () => {
      setTimeout(() => setIsStarted(true), 2000);
    },
  };

  return (
    <div className="hidden lg:block mx-auto mt-2">
      <div
        className="slider-container transition-all duration-2000"
        style={{
          paddingLeft: isStarted ? 0 : 332,
        }}
      >
        <Slider {...settings2}>
          {items?.map((item, index) => (
            <div
              className="bg-white/20 rounded-lg mr-2"
              style={{ width: 332 }}
              key={index}
            >
              <article className="slider_card flex box-border gap-x-2.5 p-4 items-center animate-fadeIn">
                <img
                  src={`images/${item?.icon}`}
                  width={36}
                  height={56}
                  alt="frame for slide"
                  className="rounded-sm"
                />

                <Text size="mdx">{item?.title}</Text>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
