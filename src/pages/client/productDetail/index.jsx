import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductDetail() {
  const images = [
    "http://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-quang-cao-quan-ao.jpg",
    "https://timmedia.net/wp-content/uploads/2020/08/09-13.jpg",
    "https://symbols.vn/wp-content/uploads/2021/12/Mau-Quan-Ao-Anime-Dep-cho-nu.jpg",
    "https://tse2.explicit.bing.net/th?id=OIP.W_wnel94xkF9zW4LqglrWwHaKG&pid=Api&P=0&h=180",
    "https://lh6.googleusercontent.com/-6sSFhUUUtKhn5mct6a0vXthtViwD1G2UzD-Nory_TYqzpyG0wuFVsaszYoSaBW_RQvvhzxKEfi1jLseD8Dgje3DjjUGDRjxcmsuXgXMOCMly_UzI4ST9jmEhwaA7V0Inll5-tvp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <main className="mx-[124px] mb-[88px]">
        <div className="mt-[15px] mb-[52px] flex gap-2 font-normal text-[12px]">
          <Link className="underline">Uniqlo</Link>
          <span>/</span>
          <Link className="underline">Nữ</Link>
          <span>/</span>
          <span>Áo</span>
          <span>/</span>
          <Link className="underline">Áo thun</Link>
          <span>/</span>
          <span>HEATTECH Áo Giả Lông Cừu Cổ Lọ Dài Tay</span>
        </div>
        <section className="flex gap-3 mb-[40px]">
          <article className="flex-1 flex w-full gap-6">
            <div className="w-[20%]">
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    className={`object-cover w-full min-h-[50px] max-h-[50px] rounded ${
                      index === currentIndex ? "img-active" : ""
                    }`}
                    src={img}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="w-[80%] border h-[520px] relative">
              <div
                className="w-full h-full image-main"
                style={{
                  backgroundImage: `url(${images[currentIndex]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <button
                  className="carousel-button carousel-button-prev"
                  onClick={handlePrevImage}
                >
                  <ArrowBackIosIcon />
                </button>
                <button
                  className="carousel-button carousel-button-next"
                  onClick={handleNextImage}
                >
                  <ArrowForwardIosIcon />
                </button>
              </div>
              {currentIndex + 1} / {images.length}
            </div>
          </article>
          <article className="flex-1 border">
            <h1 className="text-[45px] text-[#1b1b1b] font-bold">
              HEATTECH Áo Giả Lông Cừu Cổ Lọ Dài Tay
            </h1>
            <div className="pb-[50px] text-[42px] font-bold">VND 391.000</div>
            <p>
              Một kết hợp từ sự thoải mái cùng độ ấm áp trong thiết kế cổ lọ.
            </p>
            <div style={{ borderBottom: "1px solid rgb(224, 224, 224)" }}></div>
          </article>
        </section>
        <div className=" bg-red-500 w-[50%]">hi</div>
      </main>
    </>
  );
}
