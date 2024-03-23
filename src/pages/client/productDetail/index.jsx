import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductDetail() {
  const [showOverview, setShowOverview] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
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
            <div className="w-[70%]">
              <div className="w-full h-[520px] relative flex flex-col gap-2">
                <div
                  className="w-full h-full image-main rounded-lg"
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
                <div>
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-[20px]">Mô tả</h1>
                  <div className="flex flex-col text-[#7d7d7d]">
                    <span>Mã sản phẩm:</span>
                    <span>459793</span>
                  </div>
                </div>
                <div className="border-b"></div>
                <div className="flex justify-between">
                  <h1 className="text-[20px]">Tổng quan</h1>
                  <div className="flex flex-col text-[#7d7d7d]">
                    {showOverview ? (
                      <>
                        <ExpandMoreIcon
                          onClick={() => setShowOverview(!showOverview)}
                          className="cursor-pointer transition-all"
                        />
                      </>
                    ) : (
                      <>
                        <KeyboardArrowUpIcon
                          onClick={() => setShowOverview(!showOverview)}
                          className="cursor-pointer transition-all"
                        />
                      </>
                    )}
                  </div>
                </div>
                {showOverview && (
                  <div>
                    <p>
                      - Chất liệu 'HEATTECH' với tính năng GIỮ NHIỆT và Hấp thụ
                      nhiệt cùng với lông cừu giữ nhiệt.
                    </p>
                    <p>- Lông cừu pha sợi nhân tạo acrylic mềm mại.</p>
                    <p>- Có độ co dãn tạo cảm giác thoải mái.</p>
                    <p>- Thiết kế cổ lọ giúp tăng thêm sự ấm áp.</p>
                    <p>
                      - Thiết kế rộng rãi ở vai mang lại phong cách cực kì dễ
                      chịu.
                    </p>
                    <p>
                      - Một sản phẩm mà bạn có thể tạo kiểu đa năng. - Kết hợp
                      tốt với mọi loại quần.
                    </p>
                  </div>
                )}
                <div className="border-b"></div>
                <div className="flex justify-between">
                  <h1 className="text-[20px]">Chất liệu</h1>
                  <div className="flex flex-col text-[#7d7d7d]">
                    {showMaterial ? (
                      <>
                        <ExpandMoreIcon
                          onClick={() => setShowMaterial(!showMaterial)}
                          className="cursor-pointer transition-all"
                        />
                      </>
                    ) : (
                      <>
                        <KeyboardArrowUpIcon
                          onClick={() => setShowMaterial(!showMaterial)}
                          className="cursor-pointer transition-all"
                        />
                      </>
                    )}
                  </div>
                </div>
                {showMaterial && (
                  <div>
                    <p>
                      - Chất liệu 'HEATTECH' với tính năng GIỮ NHIỆT và Hấp thụ
                      nhiệt cùng với lông cừu giữ nhiệt.
                    </p>
                    <p>- Lông cừu pha sợi nhân tạo acrylic mềm mại.</p>
                    <p>- Có độ co dãn tạo cảm giác thoải mái.</p>
                    <p>- Thiết kế cổ lọ giúp tăng thêm sự ấm áp.</p>
                    <p>
                      - Thiết kế rộng rãi ở vai mang lại phong cách cực kì dễ
                      chịu.
                    </p>
                    <p>
                      - Một sản phẩm mà bạn có thể tạo kiểu đa năng. - Kết hợp
                      tốt với mọi loại quần.
                    </p>
                  </div>
                )}
                <div className="border-b"></div>
                <div className="flex justify-between">
                  <h1 className="text-[20px]">Chất liệu</h1>
                  <div className="flex flex-col text-[#7d7d7d]">
                    <Link>
                      <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex-1">
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
      </main>
    </>
  );
}
