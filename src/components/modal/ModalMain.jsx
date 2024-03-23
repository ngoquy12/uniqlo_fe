import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

export default function ModalMain({ close }) {
  return (
    <>
      <div className="overlay">
        <div className="bg-white px-5 py-7 w-[636px]">
          <header className="flex justify-between items-center mb-7">
            <h1 className="text-[19px] uppercase font-semibold">
              Yêu cầu đăng nhập
            </h1>
            <div title="Đóng">
              <CloseIcon
                onClick={close}
                className="cursor-pointer hover:text-gray-700"
              />
            </div>
          </header>
          <div className="mb-10">
            <p className="text-[#1b1b1b] break-words text-[18px] font-normal">
              Vui lòng đăng nhập.
            </p>
          </div>
          <div className="w-[50%]">
            <Link to="/login">
              <button className="w-full bg-[#1b1b1b] px-1 py-2 text-white uppercase">
                Ok
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
