import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Lắng nghe sự kiện cuộn màn hình
    window.addEventListener("scroll", handleScroll);
    // Hủy sự kiện cuộn màn hình khi component bị hủy khỏi DOM
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Hàm xử lý khi scroll màn hình quá 200px thì hiển thị button back top
   * Auth: NVQUY(20/12/2023)
   */
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  /**
   * Hàm xử lý sự kiện khi click vào button thì quay về đầu trang
   * Auth: NVQUY(20/12/2023)
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {show && (
        <nav
          onClick={scrollToTop}
          className="fixed bg-[#7d7d7d] hover:bg-[#888787] z-10 bottom-[40px] shadow-md right-[30px] cursor-pointer border p-2 rounded"
        >
          <ExpandLessIcon className="text-white" />
        </nav>
      )}
    </>
  );
}
