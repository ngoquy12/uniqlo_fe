import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main className="flex items-center justify-center my-[80px]">
        <form className="border shadow px-6 py-5 rounded-md w-[450px]">
          <h3 className="font-bold text-[30px] text-center">Đăng nhập</h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Địa chỉ email
              </label>
              <Input className="h-10" placeholder="Nhập email hợp lệ" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Mật khẩu
              </label>
              <Input className="h-10" placeholder="Nhập email hợp lệ" />
            </div>
            <div>
              <Link className="flex justify-end mb-2 text-blue-600 hover:text-blue-500">
                Quên mật khẩu
              </Link>
              <Button className="bg-blue-600 w-full h-10" type="primary">
                Đăng nhập
              </Button>
            </div>
            <div></div>
          </div>
          <p className="text-center">
            Bạn chưa có tài khoản?{" "}
            <Link className="text-blue-600 hover:text-blue-500" to="/register">
              Đăng ký
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
