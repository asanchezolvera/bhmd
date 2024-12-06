import { useState } from "react";
import { Link } from "@remix-run/react";
import Overlay from "./Overlay";
import ShopMegaMenu from "./ShopMegaMenu";
import {
  HiMiniChevronDown,
  HiMiniBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineUserCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

export default function Header() {
  const [showShopMegaMenu, setShowShopMegaMenu] = useState(false);

  return (
    <div className="w-full h-auto sticky top-0 z-50 ">
      <header className="w-full bg-white py-4 border-b-[1px] border-slate-100 shadow-md">
        <div className="container">
          <div className="flex justify-between items-center">
            <button className="md:hidden">
              <HiMiniBars3 size={24} className=" text-slate-700" />
            </button>

            <div className="hidden md:flex justify-start items-center gap-2">
              <Link to="/">
                <img
                  src="/img/bhmd-logo.webp"
                  alt="Beverly Hills MD Cosmeceuticals"
                  className="w-auto h-8 object-contain"
                />
              </Link>
              <div className="w-[1px] h-6 bg-slate-400 mx-4"></div>
              <nav className="flex gap-4">
                <button
                  onClick={() => setShowShopMegaMenu(!showShopMegaMenu)}
                  className={`flex items-center gap-1 text-sm font-medium  transition-colors duration-300 ${
                    showShopMegaMenu
                      ? "text-blue-500"
                      : "text-slate-700 hover:text-blue-500"
                  }`}>
                  Shop All
                  <HiMiniChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      showShopMegaMenu ? "-rotate-180" : ""
                    } `}
                  />
                </button>
                <button className="flex items-center gap-1 text-sm font-medium  transition-colors duration-300 text-slate-700 hover:text-blue-500">
                  Discover
                  <HiMiniChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      showShopMegaMenu ? "-rotate-180" : ""
                    } `}
                  />
                </button>
                <Link
                  to="/posts"
                  className="text-slate-700 text-sm font-medium hover:text-blue-500 transition-colors duration-300">
                  Earn Rewards
                </Link>
              </nav>
            </div>
            <Link to="/">
              <img
                src="/img/bhmd-logo-small.webp"
                className="md:hidden w-auto h-8 object-contain"
                alt="Beverly Hills MD Cosmeceuticals"
              />
            </Link>
            <div className="flex justify-end items-center gap-4">
              <button className="hidden md:block">
                <HiOutlineMagnifyingGlass
                  size={24}
                  className=" text-slate-700"
                />
              </button>
              <Link to="/login" className="hidden md:block">
                <HiOutlineUserCircle size={24} className=" text-slate-700" />
              </Link>
              <button className="relative">
                <HiOutlineShoppingBag size={24} className=" text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {showShopMegaMenu && (
        <Overlay>
          <ShopMegaMenu />
        </Overlay>
      )}
    </div>
  );
}
