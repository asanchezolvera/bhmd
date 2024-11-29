import { Form } from "@remix-run/react";
import OfferSelectorOption from "./OfferSelectorOption";
import { HiMiniCheck } from "react-icons/hi2";

export default function OfferSelector({ price }: { price: number }) {
  return (
    <Form
      method="post"
      className="w-full flex flex-col justify-start items-stretch gap-4">
      <OfferSelectorOption label="Subscribe & Save" id="1" price={price}>
        <ul>
          <li className="flex justify-start items-center gap-1 text-slate-600 text-sm">
            <HiMiniCheck size={16} className="text-rose-500" />
            Save 5% on your first order
          </li>
          <li className="flex justify-start items-center gap-1 text-slate-600 text-sm">
            <HiMiniCheck size={16} className="text-rose-500" />
            Start earning points toward future orders
          </li>
          <li className="flex justify-start items-center gap-1 text-slate-600 text-sm">
            <HiMiniCheck size={16} className="text-rose-500" />
            Easily manage your subscription and cancel at any time
          </li>
        </ul>
      </OfferSelectorOption>
      <OfferSelectorOption label="One-time Purchase" id="2" price={price} />
      <input
        type="submit"
        value="Add to Cart"
        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors duration-300 cursor-pointer"
      />
      <div className="w-full flex justify-center items-center gap-2">
        <img src="/img/visa.webp" alt="Visa" className="w-8 h-auto" />
        <img
          src="/img/mastercard.webp"
          alt="Mastercard"
          className="w-8 h-auto"
        />
        <img src="/img/discover.webp" alt="Discover" className="w-8 h-auto" />
        <img
          src="/img/amex.webp"
          alt="American Express"
          className="w-8 h-auto"
        />
        <img src="/img/apple-pay.webp" alt="Apple Pay" className="w-8 h-auto" />
        <img src="/img/paypal.webp" alt="PayPal" className="w-8 h-auto" />
        <img src="/img/klarna.webp" alt="Klarna" className="w-8 h-auto" />
      </div>
    </Form>
  );
}
