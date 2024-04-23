import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateReview() {
  const [size, setSize] = useState(3);

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
        <Link className="text-[16px] uppercase font-bold underline">
          Quay lại chi tiết sản phẩm
        </Link>
        <h1 className="mb-[88px] text-[34px] font-bold w-[60%]">
          AIRism Áo Hoodie Chống UV Vải Mắt Lưới (Chống Nắng)
        </h1>
        <div className="flex gap-[30px]">
          <section style={{ flex: 3 }} className="border px-[20px] py-[28px]">
            <div className="flex justify-between items-center mb-[40px]">
              <h3 className="text-[31px] uppercase font-bold">
                Viết bài đánh giá
              </h3>
              <p className="text-[#378694]">Bắt buộc *</p>
            </div>
            <div className="flex items-center mb-[28px]">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Đánh giá *
              </label>
              <Rating defaultValue={0} />
            </div>
            <div className="flex items-center">
              <label
                className="min-w-[200px] text-[17px] uppercase font-semibold"
                htmlFor=""
              >
                Dáng *
              </label>
              <div className="w-full">
                <ul className="w-full flex mb-7 justify-between">
                  <li className="text-[15px] font-bold uppercase">Chật</li>
                  <li className="text-[15px] font-bold uppercase">Hơi chật</li>
                  <li className="text-[15px] font-bold uppercase  text-center">
                    Đúng với kích thước
                  </li>
                  <li className="text-[15px] font-bold uppercase">Hơi rộng</li>
                  <li className="text-[15px] font-bold uppercase">Rộng</li>
                </ul>
                <div className="w-full flex items-center">
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 1 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(1)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 2 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(2)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 3 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(3)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 4 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(4)}
                  ></div>
                  <div className="border-b flex-1"></div>
                  <div
                    className={`size-[14px] rounded-full bg-[#dadada] cursor-pointer ${
                      size === 5 ? "dot-selected" : ""
                    }`}
                    onClick={() => setSize(5)}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          <article className="flex-1 h-[365px] w-[365px]">
            <img
              className="object-cover w-full h-full"
              src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465161/item/vngoods_70_465161.jpg?width=215"
              alt=""
            />
          </article>
        </div>
      </main>
    </>
  );
}
