import { Link } from "@remix-run/react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUserCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 border-b-[1px] border-slate-100 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/img/bhmd-logo.webp"
              alt="Beverly Hills MD Cosmeceuticals"
              className="w-auto h-8 object-contain"
            />
            <div className="w-[1px] h-6 bg-slate-400 mx-4"></div>
            <nav className="flex gap-4">
              <Link
                to="/"
                className="text-slate-700 text-sm font-medium hover:text-blue-500 transition-colors duration-300">
                Shop All
              </Link>
            </nav>
          </div>

          <div className="flex justify-end items-center gap-4">
            <HiOutlineMagnifyingGlass size={24} className=" text-slate-700" />
            <HiOutlineUserCircle size={24} className=" text-slate-700" />
            <HiOutlineShoppingBag size={24} className=" text-slate-700" />
          </div>
        </div>
      </div>
    </header>
  );
}
