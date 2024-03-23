import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../public/images/logo-header.svg";
import "./index.css";

export default function Login() {
  return (
    <>
      <header className="mt-[40px] px-5 border-b h-[72px] flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </header>
      <main className="my-[88px]">
        <div
          className=" border m-auto flex px-6 py-5 gap-5"
          style={{ width: "calc(1232px + 2* 20px)" }}
        >
          <form className="flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-[#1b1b1b] uppercase text-[35px] font-semibold mb-5">
                Đăng nhập
              </h1>
              <div className="text-[#378694]">Bắt buộc &#42;</div>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p>Đăng nhập bằng địa chỉ email và mật khẩu của bạn.</p>
              <img src="https://asset.uniqlo.com/g/icons/info.svg" alt="" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label
                className="text-[18px] uppercase font-semibold"
                htmlFor="email"
              >
                Địa chỉ email &#42;
              </label>
              <input
                id="email"
                className="login-input"
                type="text"
                placeholder="Nhập email hợp lệ"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label
                className="text-[18px] uppercase font-semibold"
                htmlFor="email"
              >
                Mật khẩu &#42;
              </label>
              <input
                id="email"
                className="login-input"
                type="text"
                placeholder="Nhập email hợp lệ"
              />
            </div>
            <span>
              Mật khẩu cần có ít nhất 08 ký tự (bao gồm cả chữ và số). Chỉ có
              thể sử dụng các ký tự đặc biệt này -_.@
            </span>
            <div className="flex items-center gap-3 mt-5 mb-5">
              <input className="w-5 h-5" type="checkbox" name="" id="" />
              <span>Hiện mật khẩu</span>
            </div>
            <div className="text-[#1b1b1b] underline uppercase font-semibold text-[18px] flex flex-col gap-2 mb-[40px]">
              <Link>Điều khoản sử dụng</Link>
              <Link>Chính sách bảo mật</Link>
            </div>
            <div className="w-[50%]">
              <button className="w-full h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
                Đăng nhập
              </button>
            </div>
            <div className="uppercase text-[#1b1b1b] text-[18px] underline mt-2 font-semibold">
              Quên mật khẩu của bạn?
            </div>
          </form>
          <div className="border-r"></div>
          <div className="flex-1">
            <h1 className="text-[#1b1b1b] uppercase text-[35px] font-semibold mb-5">
              TẠO MỘT TÀI KHOẢN
            </h1>
            <p className="text-[#1b1b1b] mb-[40px]">
              Hãy tạo tài khoản ngay ! Bạn có thể nhận được các dịch vụ đặc biệt
              cho riêng bạn như kiểm tra lịch sử mua hàng và nhận phiếu giảm giá
              cho thành viên. Đăng ký miễn phí ngay hôm nay!
            </p>
            <Link to="/register">
              <button className="w-[50%] h-[45px] bg-[#1b1b1b] text-white uppercase cursor-pointer text-[18px]">
                Tạo tài khoản
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mb-[28px] text-center uppercase font-bold">
        BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO. BẢO LƯU MỌI QUYỀN.
      </div>
    </>
  );
}
