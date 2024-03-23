import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../../public/images/logo-header.svg";
import { Link, useNavigate } from "react-router-dom";
import { Input, Tooltip } from "antd";
import { CloseSharp, SearchOutlined } from "@mui/icons-material";
import ModalMain from "../../../components/modal/ModalMain";

export default function Navbar() {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const isLogin = true;

  const handleRedirect = () => {
    if (isLogin) {
      navigate("/wishlist");
    } else {
      setShowModalLogin(true);
    }
  };

  const handleCloseModal = () => {
    setShowModalLogin(false);
  };

  return (
    <>
      {showModalLogin && <ModalMain close={handleCloseModal} />}
      <nav className="sticky top-0 z-40 w-full h-[72px] bg-white py-0 border-b border-solid border-b-[rgb(204, 204, 204)]">
        {showInput ? (
          <>
            <div className="absolute h-full w-full gap-3 flex items-center justify-center">
              <div className="flex w-[50%] items-center">
                <Input
                  className="h-[40px] rounded-r-none"
                  placeholder="Tìm kiếm theo từ khóa"
                />
                <Tooltip title="Tìm kiếm">
                  <div className="h-10 flex items-center border px-2 bg-black rounded-r-[4px] text-white">
                    <SearchOutlined className="cursor-pointer" />
                  </div>
                </Tooltip>
              </div>
              <Tooltip onClick={() => setShowInput(false)} title="Đóng">
                <CloseSharp className="cursor-pointer hover:text-gray-800" />
              </Tooltip>
            </div>
          </>
        ) : (
          <>
            <div className="py-0 px-5 my-0 mx-[124px] h-full flex justify-between items-center">
              <div className="flex items-center gap-5">
                <Link to="/" className="mr-[28px]">
                  <img src={Logo} alt="Logo" />
                </Link>
                <ul className="flex gap-4">
                  <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                    Nam
                  </li>
                  <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                    Nữ
                  </li>
                  <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                    Trẻ em
                  </li>
                  <li className="uppercase font-semibold hover:text-[#424242] cursor-pointer">
                    Trẻ sơ sinh
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-8">
                <Tooltip title="Tìm kiếm">
                  <SearchIcon
                    onClick={() => setShowInput(true)}
                    className="cursor-pointer text-[24px]"
                  />
                </Tooltip>
                <Tooltip title="Đăng nhập">
                  <Link to="/login">
                    <PersonIcon className="cursor-pointer text-[24px]" />
                  </Link>
                </Tooltip>
                <Tooltip title="Sản phẩm ưu thích">
                  <div onClick={handleRedirect} className="relative">
                    <FavoriteBorderIcon className="cursor-pointer text-[24px]" />
                    <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                      2
                    </span>
                  </div>
                </Tooltip>
                <Tooltip title="Giỏ hàng">
                  <Link to="/cart" className="relative">
                    <ShoppingCartIcon className="cursor-pointer text-[24px]" />
                    <span className="absolute px-2 py-0 rounded-full top-[-3px] right-[-18px] text-[10px] bg-[#EB3333] text-white font-semibold">
                      2
                    </span>
                  </Link>
                </Tooltip>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
