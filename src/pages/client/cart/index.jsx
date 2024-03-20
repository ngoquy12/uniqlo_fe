import React from "react";
import { Breadcrumb, Button, Checkbox, Image, Tooltip } from "antd";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";

export default function Cart() {
  return (
    <>
      <main className="mx-[124px] my-0 px-[20px] py-0 h-auto flex flex-col z-20">
        <div className="mt-[15px] mb-[50px] z-20">
          <Breadcrumb
            items={[
              {
                title: <Link to="/">Uniqlo</Link>,
              },
              {
                title: <p className="font-medium text-orange-700">Giỏ hàng</p>,
              },
            ]}
          />
        </div>
        <section className="flex gap-6 mb-[50px]">
          <div id="list-cart" className="flex-[3] max-h-[65vh] overflow-y-auto">
            <table className="w-full">
              <thead className="border-b sticky top-0 bg-white z-10">
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th className="text-start">Tên SP</th>
                  <th className="">Hình ảnh</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Số tiền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white rounded-lg z-10">
                  <td>
                    <Checkbox />
                  </td>
                  <td className="">Hoa quả tươi ngon</td>
                  <td>
                    <div className="flex gap-3">
                      <Image
                        width={100}
                        height={80}
                        className="object-cover rounded-md"
                        src="https://static.ecosite.vn/5093/picture/2017/07/20/tu-vung-ve-hoa-qua-1500537543.jpg"
                      />
                    </div>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <div>
                      <button className="border w-[30px] h-9">+</button>
                      <input
                        value={1}
                        className="w-[50px] h-9 border outline-none px-2 text-center"
                      />
                      <button className="border w-[30px] h-9">-</button>
                    </div>
                  </td>
                  <td className="text-center">₫756.000</td>
                  <td className="text-center">
                    <Tooltip title="Xóa">
                      <DeleteIcon className="text-[#ff0000] cursor-pointer" />
                    </Tooltip>
                  </td>
                </tr>
                <tr className="border-b bg-white rounded-lg">
                  <td>
                    <Checkbox />
                  </td>
                  <td className="">Hoa quả tươi ngon</td>
                  <td>
                    <div className="flex gap-3">
                      <Image
                        width={100}
                        height={80}
                        className="object-cover rounded-md"
                        src="https://static.ecosite.vn/5093/picture/2017/07/20/tu-vung-ve-hoa-qua-1500537543.jpg"
                      />
                    </div>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <div>
                      <button className="border w-[30px] h-9">+</button>
                      <input
                        value={1}
                        className="w-[50px] h-9 border outline-none px-2 text-center"
                      />
                      <button className="border w-[30px] h-9">-</button>
                    </div>
                  </td>
                  <td className="text-center">₫756.000</td>
                  <td className="text-center">
                    <Tooltip title="Xóa">
                      <DeleteIcon className="text-[#ff0000] cursor-pointer" />
                    </Tooltip>
                  </td>
                </tr>
                <tr className="border-b bg-white rounded-lg">
                  <td>
                    <Checkbox />
                  </td>
                  <td className="">Hoa quả tươi ngon</td>
                  <td>
                    <div className="flex gap-3">
                      <Image
                        width={100}
                        height={80}
                        className="object-cover rounded-md"
                        src="https://static.ecosite.vn/5093/picture/2017/07/20/tu-vung-ve-hoa-qua-1500537543.jpg"
                      />
                    </div>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <div>
                      <button className="border w-[30px] h-9">+</button>
                      <input
                        value={1}
                        className="w-[50px] h-9 border outline-none px-2 text-center"
                      />
                      <button className="border w-[30px] h-9">-</button>
                    </div>
                  </td>
                  <td className="text-center">₫756.000</td>
                  <td className="text-center">
                    <Tooltip title="Xóa">
                      <DeleteIcon className="text-[#ff0000] cursor-pointer" />
                    </Tooltip>
                  </td>
                </tr>
                <tr className="border-b bg-white rounded-lg">
                  <td>
                    <Checkbox />
                  </td>
                  <td className="">Hoa quả tươi ngon</td>
                  <td>
                    <div className="flex gap-3">
                      <Image
                        width={100}
                        height={80}
                        className="object-cover rounded-md"
                        src="https://static.ecosite.vn/5093/picture/2017/07/20/tu-vung-ve-hoa-qua-1500537543.jpg"
                      />
                    </div>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <div>
                      <button className="border w-[30px] h-9">+</button>
                      <input
                        value={1}
                        className="w-[50px] h-9 border outline-none px-2 text-center"
                      />
                      <button className="border w-[30px] h-9">-</button>
                    </div>
                  </td>
                  <td className="text-center">₫756.000</td>
                  <td className="text-center">
                    <Tooltip title="Xóa">
                      <DeleteIcon className="text-[#ff0000] cursor-pointer" />
                    </Tooltip>
                  </td>
                </tr>
                <tr className="border-b bg-white rounded-lg">
                  <td>
                    <Checkbox />
                  </td>
                  <td className="">Hoa quả tươi ngon</td>
                  <td>
                    <div className="flex gap-3">
                      <Image
                        width={100}
                        height={80}
                        className="object-cover rounded-md"
                        src="https://static.ecosite.vn/5093/picture/2017/07/20/tu-vung-ve-hoa-qua-1500537543.jpg"
                      />
                    </div>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <div>
                      <button className="border w-[30px] h-9">+</button>
                      <input
                        value={1}
                        className="w-[50px] h-9 border outline-none px-2 text-center"
                      />
                      <button className="border w-[30px] h-9">-</button>
                    </div>
                  </td>
                  <td className="text-center">₫756.000</td>
                  <td className="text-center">
                    <Tooltip title="Xóa">
                      <DeleteIcon className="text-[#ff0000] cursor-pointer" />
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <article className="flex-1 border rounded-lg p-5 shadow max-h-[500px]">
            <h2 className="uppercase font-bold text-[20px]">
              Chi tiết đơn hàng
            </h2>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex justify-between ">
                <span>Số lượng</span>
                <span>3</span>
              </li>
              <div className="border-b"></div>
              <li className="flex justify-between ">
                <span>Thuế VAT</span>
                <span>3</span>
              </li>
              <div className="border-b"></div>
              <li className="flex justify-between ">
                <span>Giảm giá</span>
                <span>3 %</span>
              </li>
              <div className="border-b"></div>
              <li className="flex justify-between ">
                <span>Tổng tiền</span>
                <span>3.000.000 đ</span>
              </li>
              <div className="border-b"></div>
              <li>
                Miễn phí giao hàng áp dụng cho đơn hàng giao tận nơi từ
                999.000VND
              </li>
              <li className="flex flex-col gap-3">
                <Button
                  type="primary"
                  className="bg-blue-600 text-white h-10 w-full"
                >
                  Thanh toán
                </Button>
                <Button type="default" className=" h-10 w-full">
                  Tiếp tục mua sắm
                </Button>
              </li>
            </ul>
          </article>
        </section>
        <section className="mt-[50px]">
          <h1 className="font-semibold text-[34px] uppercase">
            Sản phẩm gợi ý
          </h1>
          <main className="grid grid-cols-4 gap-6 mt-6 mb-6">
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow">
              <img
                className="w-full min-h-[293px] max-h-[293px] object-cover"
                src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454969/item/goods_50_454969.jpg?width=320"
                alt="Ảnh sản phẩm"
              />
              <div className="px-3 py-5 flex flex-col gap-3">
                <Link className="font-semibold text-[18px] hover:text-gray-600">
                  AIRism Áo Khoác Chống UV Dài Tay (Chống Nắng)
                </Link>
                <div className="flex justify-between items-center">
                  <span>2.000.000 VND</span>
                  <Button type="primary" className="bg-blue-600">
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </section>
        <div className="mb-4 text-center cursor-pointer hover:underline hover:text-blue-600">
          Xem thêm
        </div>
      </main>
    </>
  );
}
