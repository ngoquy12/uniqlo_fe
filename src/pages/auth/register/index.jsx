import React from "react";
import { Link } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import "../login/index.css";

export default function Register() {
  return (
    <>
      <div className="mx-[124px]">
        <div className="flex mt-[15px] mb-[52px] gap-2 uppercase">
          <Link title="Home" to="/">
            Uniqlo
          </Link>
          <span>/</span>
          <p>Tạo tài khoản</p>
        </div>
        <main className="w-[60%] mb-[88px]">
          <div className="flex justify-between mb-[52px] items-center">
            <h1 className="text-[#1b1b1b] uppercase font-bold text-[32px]">
              Tạo một tài khoản
            </h1>
            <HttpsIcon className="text-[24px]" />
          </div>
          <form className="border shadow px-6 py-5 rounded-md ">
            <div className="flex justify-between gap-[10px] mb-[28px]">
              <p className="text-[#1b1b1b] break-words font-normal">
                Chúng tôi sẽ gửi thư xác nhận đến địa chỉ email được liên kết
                với tài khoản của bạn. Hãy kiểm tra email đến từ chúng tôi.
              </p>
              <span className="min-w-[100px] text-[#378694]">
                Bắt buộc &#8277;
              </span>
            </div>
            <div className="flex mb-7">
              <label
                className="min-w-[200px] uppercase text-red-500 font-bold"
                htmlFor="email"
              >
                Địa chỉ email &#8277;
              </label>
              <div className="flex-1">
                <input
                  id="email"
                  type="text"
                  className="login-input border-red-500 border-2 w-full"
                />
                <span className="text-[13px] text-red-500 mt-2">
                  Vui lòng nhập một địa chỉ email.
                </span>
              </div>
            </div>
            <div className="flex mb-7">
              <label
                className="min-w-[200px] uppercase text-red-500 font-bold"
                htmlFor="password"
              >
                Địa chỉ email &#8277;
              </label>
              <div className="flex-1">
                <input
                  id="password"
                  type="password"
                  className="login-input border-red-500 border-2 w-full"
                />
                <span className="text-[13px] text-red-500 mt-2">
                  Vui lòng nhập mật khẩu.
                </span>
              </div>
            </div>
            <div className="flex mb-7 w-full items-center gap-3">
              <input id="toggle" className="w-5 h-5" type="checkbox" />
              <label htmlFor="toggle">Hiện mật khẩu</label>
            </div>
            <div className="flex mb-7">
              <label
                className="min-w-[200px] uppercase font-bold"
                htmlFor="dateOfBirth"
              >
                Sinh nhật
              </label>
              <div className="flex-1">
                <input
                  id="dateOfBirth"
                  type="date"
                  className="login-input border-2 w-full"
                />
                <span className="text-[13px] mt-2">
                  Không thể chỉnh sửa ngày sinh sau khi bạn đăng ký tài khoản.
                </span>
              </div>
            </div>
            <div className="flex mb-7">
              <label
                className="min-w-[200px] uppercase font-bold"
                htmlFor="male"
              >
                Giới tính
              </label>
              <div className="flex-1 flex gap-[20px]">
                <div className="flex items-center gap-2">
                  <input
                    className="w-5 h-5 "
                    type="radio"
                    name="gender"
                    id="male"
                    checked
                  />
                  <label className="font-semibold" htmlFor="male">
                    Nam
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="font-semibold" htmlFor="female">
                    Nữ
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="gender"
                    id="other"
                  />
                  <label className="font-semibold" htmlFor="other">
                    Bỏ chọn
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b mb-7"></div>
            <div>
              <h3 className="text-[18px] font-bold mb-4">
                THỎA THUẬN THÀNH VIÊN{" "}
                <span className="text-[#378694]">&#8277;</span>
              </h3>
              <p className="text-[#7d7d7d] break-words mb-[20px]">
                Bằng cách tạo tài khoản, bạn đồng ý với chính sách bảo mật và
                điều khoản sử dụng của UNIQLO
              </p>
              <div className="flex items-center gap-3 mb-5">
                <input type="checkbox" className="h-5 w-5" id="confirm" />
                <label htmlFor="confirm" className="text-[#1b1b1b] font-normal">
                  Tôi đồng ý với ĐIỀU KHOẢN SỬ DỤNG và CHÍNH SÁCH BẢO MẬT CỦA
                  UNIQLO
                </label>
              </div>
              <div className="flex gap-5 uppercase font-bold underline">
                <Link>Điều khoản sử dụng</Link>
                <Link>Chính sách bảo mật</Link>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
