import { Button, Checkbox, Input, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <main className="flex items-center justify-center my-[20px]">
        <form className="border shadow px-6 py-5 rounded-md w-[470px]">
          <h3 className="font-bold text-[30px] text-center">
            Đăng ký tài khoản
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Họ và tên
              </label>
              <Input className="h-10" placeholder="Nhập email hợp lệ" />
            </div>
            {/* <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Ngày sinh
              </label>
              <Input
                type="date"
                className="h-10"
                placeholder="Nhập email hợp lệ"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Giới tính
              </label>
              <Radio.Group>
                <Radio>Nam</Radio>
                <Radio>Nữ</Radio>
                <Radio>Khác</Radio>
              </Radio.Group>
            </div> */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Email
              </label>
              <Input className="h-10" placeholder="Nhập email hợp lệ" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Mật khẩu
              </label>
              <Input.Password
                className="h-10"
                placeholder="Nhập mật khẩu của bạn"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Nhập lại mật khẩu
              </label>
              <Input.Password
                className="h-10"
                placeholder="Nhập mật khẩu của bạn"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <div>
              <div className="flex pb-3 gap-3">
                <Checkbox id="confirm" />
                <label htmlFor="confirm">
                  Bạn đồng ý với{" "}
                  <Link className="text-blue-600 hover:text-blue-500 underline">
                    chính sách và điều khoản
                  </Link>{" "}
                  của chúng tôi
                </label>
              </div>
              <Button className="bg-blue-600 w-full h-10" type="primary">
                Đăng ký
              </Button>
            </div>
            <div></div>
          </div>
          <p className="text-center">
            Bạn chưa có tài khoản?{" "}
            <Link className="text-blue-600 hover:text-blue-500" to="/login">
              Đăng nhập
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
