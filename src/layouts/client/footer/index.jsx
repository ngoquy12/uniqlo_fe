import React from "react";
import { Link } from "react-router-dom";
import LogoYoutube from "../../../../public/images/logo-youtube.webp";
import LogoInstagram from "../../../../public/images/logo-instagram.jpg";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f4f4f4] border-b">
        <div className="py-[52px] px-[20px] mx-[124px] my-0 flex gap-4">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-semibold text-[18px]">Về Uniqlo</h1>
            <Link>Thông tin</Link>
            <Link>Danh sách cửa hàng</Link>
            <Link>Cơ hội nghề nghiệp</Link>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-semibold text-[18px]">Trợ giúp</h1>
            <Link>FAQ</Link>
            <Link>Chính sách trả hàng</Link>
            <Link>Chính sách bảo mật</Link>
            <Link>Tiếp cận</Link>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-semibold text-[18px]">Tài khoản</h1>
            <Link>Tư cách thành viên</Link>
            <Link>Hồ sơ</Link>
            <Link>Coupons</Link>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-semibold text-[18px]">Bản tin điện tử</h1>
            <p className="pr-5">
              Đăng ký ngay và là người đầu tiên nắm được thông tin khi có mặt
              hàng mới, khuyến mãi, các sự kiện sắp diễn ra tại cửa hàng và
              nhiều thông tin hữu ích khác.
            </p>
            <Link className="underline uppercase text-[16px] font-semibold">
              Đăng ký ngay
            </Link>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-semibold text-[18px]">
              Tài khoản xã hội <span className="uppercase">uniqlo</span>
            </h1>
            <div className="flex items-center gap-3 ">
              <a className="border h-[50px] w-[50px] " href="">
                <img
                  className="w-[70%] m-auto h-full object-contain"
                  src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png"
                  alt=""
                />
              </a>
              <a className="border h-[50px] w-[50px] " href="">
                <img
                  className="w-full h-full object-contain"
                  src="https://logolook.net/wp-content/uploads/2021/06/Tiktok-Logo-2016.png"
                  alt=""
                />
              </a>
              <a className="border h-[50px] w-[50px] " href="">
                <img
                  className="w-[80%] m-auto h-full object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_(2017).svg/2560px-YouTube_full-color_icon_(2017).svg.png"
                  alt=""
                />
              </a>
              <a className="border h-[50px] w-[50px] " href="">
                <img
                  className="w-full m-auto h-full object-contain"
                  src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="mx-[124px]">
        <div className="p-5 flex justify-between items-center">
          <p className="text-gray-700 font-medium">
            BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO. BẢO LƯU MỌI QUYỀN.
          </p>
          <div className="flex gap-4 underline">
            <Link>Điều khoản sử dụng</Link>
            <Link>Điều khoản sử dụng</Link>
          </div>
        </div>
        <div className="pb-3 leading-7 text-[14px]">
          <p>Tên công ty: UNIQLO VIETNAM CO., LTD</p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số: 0315304731, đăng ký lần đầu
            ngày 02/10/2018, đăng ký thay đổi lần thứ ba ngày 23/09/2019
          </p>
          <p>
            Địa chỉ trụ sở doanh nghiệp: Tầng 26, Tòa nhà Trụ Sở Điều Hành Và
            Trung Tâm Thương Mại Viettel, 285 Cách Mạng Tháng Tám, Phường 12,
            Quận 10, Thành phố Hồ Chí Minh
          </p>
          <p>Để được giải đáp thắc mắc, vui lòng truy cập trang FAQ/Trợ giúp</p>
          <p className="pb-3">
            Giờ làm việc: 9:00 - 18:00 (Thứ Hai - Chủ Nhật)
          </p>
          <img
            src="https://im.uniqlo.com/global-cms/spa/resfb28ee615b9469a533e195812bd0de44fr.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
