import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rate } from "antd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProductDetail() {
  const [showOverview, setShowOverview] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const images = [
    "http://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-quang-cao-quan-ao.jpg",
    "https://timmedia.net/wp-content/uploads/2020/08/09-13.jpg",
    "https://symbols.vn/wp-content/uploads/2021/12/Mau-Quan-Ao-Anime-Dep-cho-nu.jpg",
    "https://tse2.explicit.bing.net/th?id=OIP.W_wnel94xkF9zW4LqglrWwHaKG&pid=Api&P=0&h=180",
    "https://lh6.googleusercontent.com/-6sSFhUUUtKhn5mct6a0vXthtViwD1G2UzD-Nory_TYqzpyG0wuFVsaszYoSaBW_RQvvhzxKEfi1jLseD8Dgje3DjjUGDRjxcmsuXgXMOCMly_UzI4ST9jmEhwaA7V0Inll5-tvp",
  ];

  const colors = [
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "green",
    },
    {
      id: 3,
      color: "blue",
    },
    {
      id: 4,
      color: "black",
    },
    {
      id: 5,
      color: "yellow",
    },
    {
      id: 6,
      color: "pink",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Chuyển đến hình ảnh tiếp theo
   * Auth: NVQUY (27/03/2024)
   */
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Quay lại hình ảnh trước đó
   * Auth: NVQUY (27/03/2024)
   */
  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <main className="mx-[124px] mb-[88px]">
        <div className="mt-[15px] mb-[52px] flex gap-2 font-normal text-[12px] uppercase">
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
        <section className="flex gap-10 mb-[40px]">
          <div className="flex flex-1 flex-col gap-[88px]">
            <article className=" flex w-full gap-6">
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
                        - Chất liệu 'HEATTECH' với tính năng GIỮ NHIỆT và Hấp
                        thụ nhiệt cùng với lông cừu giữ nhiệt.
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
                        - Chất liệu 'HEATTECH' với tính năng GIỮ NHIỆT và Hấp
                        thụ nhiệt cùng với lông cừu giữ nhiệt.
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
                    <h1 className="text-[20px]">Chính sách hoàn trả</h1>
                    <div className="flex flex-col text-[#7d7d7d]">
                      <Link>
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="">
              <div className="flex items-center gap-[20px]">
                <h1 className="text-[20px] uppercase text-[#1b1b1b] font-bold">
                  Đánh giá
                </h1>
                <Rate allowHalf defaultValue={2.5} /> (12);
              </div>
              <div className="border-b mt-5 mb-9"></div>
              <div className="flex justify-between">
                <div className="w-[30%]">
                  <h1 className="text-[20px] mb-4 uppercase font-bold break-words">
                    Đánh giá của khách hàng
                  </h1>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-2">
                      <Rate allowHalf defaultValue={5} />
                      <span>(12)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rate allowHalf defaultValue={4} />
                      <span>(10)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rate allowHalf defaultValue={3} />
                      <span>(5)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rate allowHalf defaultValue={2} />
                      <span>(1)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rate allowHalf defaultValue={0} />
                      <span>(0)</span>
                    </li>
                  </ul>
                </div>
                <div className="w-[60%]">
                  <h1 className="text-[20px] uppercase font-bold break-words mb-4">
                    Quần áo có chật không
                  </h1>
                  <ul className="w-full flex mb-7 justify-between">
                    <li className="text-[15px] font-bold uppercase">Chật</li>
                    <li className="text-[15px] font-bold uppercase w-[70px] text-center">
                      Đúng với kích thước
                    </li>
                    <li className="text-[15px] font-bold uppercase">Rộng</li>
                  </ul>
                  <div className="w-full flex items-center">
                    <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                    <div className="border-b flex-1"></div>
                    <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                    <div className="border-b flex-1"></div>
                    <div className="size-[14px] rounded-full bg-[#dadada] dot-selected"></div>
                    <div className="border-b flex-1"></div>
                    <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                    <div className="border-b flex-1"></div>
                    <div className="size-[14px] rounded-full bg-[#dadada]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] mb-[20px]">
                <Link to="/reviews/new">
                  <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                    Viết bài đánh giá
                  </button>
                </Link>
              </div>
              <div className="border-b"></div>
              <div className="my-[20px] font-semibold">13 bài đánh giá</div>
              <div className="border-b mb-10"></div>
              <ul>
                <li>
                  <div className="flex justify-between items-center mt-7 mb-4">
                    <h3 className="uppercase text-[20px] font-bold">
                      BEST FIT
                    </h3>
                    <time className="text-[#7d7d7d] text-[14px]">
                      23/03/2023
                    </time>
                  </div>
                  <div className="mb-5">
                    <Rate allowHalf defaultValue={5} />
                  </div>
                  <div className="text-[16px] leading-[24px]">
                    <dl className="flex gap-2">
                      <dt>Kích cỡ đã mua:</dt>
                      <dd>M</dd>
                    </dl>
                    <dl className="flex gap-2">
                      <dt>Quần áo có vừa không:</dt>
                      <dd>Đúng với kích thước</dd>
                    </dl>
                    <dl>
                      <dd>
                        True to size top.please restock with more colours.
                      </dd>
                    </dl>
                  </div>
                  <div className="mt-4 flex gap-4 items-center mb-7">
                    <strong className="uppercase text-[14px] font-semibold">
                      broccoli
                    </strong>
                    <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                    <span className="text-[14px] text-[#7d7d7d]">
                      Singapore
                    </span>
                  </div>
                </li>
                <div className="border-b"></div>
                <li>
                  <div className="flex justify-between items-center mt-7 mb-4">
                    <h3 className="uppercase text-[20px] font-bold">
                      BEST FIT
                    </h3>
                    <time className="text-[#7d7d7d] text-[14px]">
                      23/03/2023
                    </time>
                  </div>
                  <div className="mb-5">
                    <Rate allowHalf defaultValue={5} />
                  </div>
                  <div className="text-[16px] leading-[24px]">
                    <dl className="flex gap-2">
                      <dt>Kích cỡ đã mua:</dt>
                      <dd>M</dd>
                    </dl>
                    <dl className="flex gap-2">
                      <dt>Quần áo có vừa không:</dt>
                      <dd>Đúng với kích thước</dd>
                    </dl>
                    <dl>
                      <dd>
                        True to size top.please restock with more colours.
                      </dd>
                    </dl>
                  </div>
                  <div className="mt-4 flex gap-4 items-center mb-7">
                    <strong className="uppercase text-[14px] font-semibold">
                      broccoli
                    </strong>
                    <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                    <span className="text-[14px] text-[#7d7d7d]">
                      Singapore
                    </span>
                  </div>
                </li>
                <div className="border-b"></div>
                <li>
                  <div className="flex justify-between items-center mt-7 mb-4">
                    <h3 className="uppercase text-[20px] font-bold">
                      BEST FIT
                    </h3>
                    <time className="text-[#7d7d7d] text-[14px]">
                      23/03/2023
                    </time>
                  </div>
                  <div className="mb-5">
                    <Rate allowHalf defaultValue={5} />
                  </div>
                  <div className="text-[16px] leading-[24px]">
                    <dl className="flex gap-2">
                      <dt>Kích cỡ đã mua:</dt>
                      <dd>M</dd>
                    </dl>
                    <dl className="flex gap-2">
                      <dt>Quần áo có vừa không:</dt>
                      <dd>Đúng với kích thước</dd>
                    </dl>
                    <dl>
                      <dd>
                        True to size top.please restock with more colours.
                      </dd>
                    </dl>
                  </div>
                  <div className="mt-4 flex gap-4 items-center mb-7">
                    <strong className="uppercase text-[14px] font-semibold">
                      broccoli
                    </strong>
                    <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                    <span className="text-[14px] text-[#7d7d7d]">
                      Singapore
                    </span>
                  </div>
                </li>
                <div className="border-b"></div>
                <li>
                  <div className="flex justify-between items-center mt-7 mb-4">
                    <h3 className="uppercase text-[20px] font-bold">
                      BEST FIT
                    </h3>
                    <time className="text-[#7d7d7d] text-[14px]">
                      23/03/2023
                    </time>
                  </div>
                  <div className="mb-5">
                    <Rate allowHalf defaultValue={5} />
                  </div>
                  <div className="text-[16px] leading-[24px]">
                    <dl className="flex gap-2">
                      <dt>Kích cỡ đã mua:</dt>
                      <dd>M</dd>
                    </dl>
                    <dl className="flex gap-2">
                      <dt>Quần áo có vừa không:</dt>
                      <dd>Đúng với kích thước</dd>
                    </dl>
                    <dl>
                      <dd>
                        True to size top.please restock with more colours.
                      </dd>
                    </dl>
                  </div>
                  <div className="mt-4 flex gap-4 items-center mb-7">
                    <strong className="uppercase text-[14px] font-semibold">
                      broccoli
                    </strong>
                    <span className="text-[14px] text-[#7d7d7d]">Nữ</span>
                    <span className="text-[14px] text-[#7d7d7d]">
                      Singapore
                    </span>
                  </div>
                </li>
                <div className="border-b"></div>
                <div className="mt-[40px] mb-[20px]">
                  <Link to="/reviews">
                    <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                      Xem thêm
                    </button>
                  </Link>
                </div>
              </ul>
            </article>
          </div>
          <article className="flex-1">
            <h1 className="text-[45px] text-[#1b1b1b] font-bold">
              HEATTECH Áo Giả Lông Cừu Cổ Lọ Dài Tay
            </h1>
            <div className="pb-[50px] text-[42px] font-bold">VND 391.000</div>
            <p>
              Một kết hợp từ sự thoải mái cùng độ ấm áp trong thiết kế cổ lọ.
            </p>
            <div className="my-5 border-b"></div>
            <aside className="mb-5">
              <div className="uppercase text-[14px] font-semibold">
                <strong className="mr-1">Màu sắc:</strong>
                <span>03 gray</span>
              </div>
              <div className="flex gap-2 mt-[11px]">
                {colors.map((cl) => (
                  <div
                    key={cl.id}
                    className={`size-[45px] border bg-${cl.color}-500 `}
                  ></div>
                ))}
              </div>
            </aside>
            <aside>
              <div className="uppercase text-[14px] font-semibold flex items-center justify-between">
                <div>
                  <strong className="mr-1">Kích thước:</strong>
                  <span>Nữ S</span>
                </div>
                <div className="flex items-center uppercase text-[14px] font-bold">
                  <strong className="mr-1">
                    <img
                      height={24}
                      width={24}
                      src="https://tse4.mm.bing.net/th?id=OIP.BofAAsdNRyN-d3ikDZMsEQAAAA&pid=Api&P=0&h=180"
                      alt=""
                    />
                  </strong>
                  <Link className="underline">Chọn kích thước</Link>
                </div>
              </div>
              <div className="flex gap-2 mt-[11px] mb-5">
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  XS
                </div>
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  S
                </div>
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  M
                </div>
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  L
                </div>
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  XL
                </div>
                <div
                  className={`size-[45px] border bg-white text-center leading-[45px]`}
                >
                  XXL
                </div>
              </div>
              <div>
                <button className="h-[45px] text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-full py-2 px-1">
                  Kích thước theo chiều cao
                </button>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="uppercase font-semibold">
                  Số lượng
                </label>
                <div className="w-[134px] mt-4 relative">
                  <div className="border px-3 h-[45px] flex items-center justify-between">
                    <span>1</span>
                    <KeyboardArrowDownIcon
                      id="icon-dropdown"
                      onClick={() => setShowQuantity(!showQuantity)}
                      className={`cursor-pointer hover:opacity-70 ${
                        !showQuantity ? "dropdown-rote" : ""
                      }`}
                    />
                  </div>
                  {showQuantity && (
                    <ul className="w-full border absolute bg-white z-20">
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        1
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        2
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        3
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        4
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        5
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        6
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        7
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        8
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        9
                      </li>
                      <li className="p-3 cursor-pointer hover:bg-[#f6f6f6]">
                        10
                      </li>
                    </ul>
                  )}
                </div>
                <p className="text-[14px] text-[#7d7d7d] mt-1">Còn hàng</p>
              </div>
              <div className="mt-[28px] mb-[20px]">
                <button className="h-[45px] text-[16px] bg-[#ff0000] text-white uppercase font-bold hover:opacity-85 w-full py-2 px-1">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="flex gap-6">
                <button className="flex-1 text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                  Thêm vào danh sách mong muốn
                </button>
                <button className="flex-1 text-[16px] uppercase font-bold hover:opacity-70 border border-[#7d7d7d] w-[288px] py-2 px-1">
                  Tìm sản phẩm còn hàng trong giỏ hàng
                </button>
              </div>
              <div className="border-b my-5"></div>
              <div className="text-[16px] uppercase font-bold">Chia sẻ</div>
              <div className="flex items-center gap-6 mt-3">
                <img
                  height={45}
                  width={45}
                  src="https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180"
                  alt=""
                />
                <img
                  height={45}
                  width={45}
                  src="https://cdn.freebiesupply.com/logos/large/2x/facebook-4-logo-png-transparent.png"
                  alt=""
                />
              </div>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
}
